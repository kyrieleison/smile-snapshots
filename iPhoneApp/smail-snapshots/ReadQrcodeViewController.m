//
//  ReadQrcodeViewController.m
//  smail-snapshots
//
//  Created by tomoki on 2016/09/25.
//  Copyright © 2016年 tomoki. All rights reserved.
//

#import "ReadQrcodeViewController.h"
#import "ViewController.h"
#import <AVFoundation/AVFoundation.h>

@interface ReadQrcodeViewController()<AVCaptureMetadataOutputObjectsDelegate>

@property (strong, nonatomic) AVCaptureSession* session;

@end

@implementation ReadQrcodeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // Device
    AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    // session
    self.session = [[AVCaptureSession alloc] init];
    
    // Input
    AVCaptureDeviceInput *input = [AVCaptureDeviceInput deviceInputWithDevice:device error:nil];
    if (input) {
        [self.session addInput:input];
    } else {
        NSLog(@"error");
    }
    
    // Output
    AVCaptureMetadataOutput *output = [[AVCaptureMetadataOutput alloc] init];
    [self.session addOutput:output];
    [output setMetadataObjectsDelegate:self queue:dispatch_get_main_queue()];
    [output setMetadataObjectTypes:@[AVMetadataObjectTypeQRCode, AVMetadataObjectTypeEAN13Code]];
    
    
    // Preview
    AVCaptureVideoPreviewLayer *preview = [AVCaptureVideoPreviewLayer layerWithSession:self.session];
    preview.videoGravity = AVLayerVideoGravityResizeAspectFill;
    preview.frame = CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height);
    [self.view.layer insertSublayer:preview atIndex:0];
    
    // Start
    [self.session startRunning];
}

- (void)captureOutput:(AVCaptureOutput *)captureOutput didOutputMetadataObjects:(NSArray *)metadataObjects
       fromConnection:(AVCaptureConnection *)connection
{
    // 複数のmetadataが来るので順に調べる
    for (AVMetadataObject *data in metadataObjects) {
        if (![data isKindOfClass:[AVMetadataMachineReadableCodeObject class]]) continue;
        // QR code data
        NSString *strValue = [(AVMetadataMachineReadableCodeObject *)data stringValue];
        // type ?
        if ([data.type isEqualToString:AVMetadataObjectTypeQRCode]) {
            // QRコードの場合
            ViewController *viewController = [[ViewController alloc]initWithFrameUrlString:strValue];
            [self presentViewController:viewController animated:NO completion:nil];
            [self.session stopRunning];
        }
    }
}

@end
