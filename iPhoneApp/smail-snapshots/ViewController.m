//
//  ViewController.m
//  smail-snapshots
//
//  Created by tomoki on 2016/09/24.
//  Copyright © 2016年 tomoki. All rights reserved.
//

#import "ViewController.h"
#import <AVFoundation/AVFoundation.h>
#import "PreviewViewController.h"

@interface ViewController ()<PicturePreviewViewDelegate>

@property (strong, nonatomic) AVCaptureDeviceInput *videoInput;
@property (strong, nonatomic) AVCaptureStillImageOutput *stillImageOutput;
@property (strong, nonatomic) AVCaptureSession *session;
@property (strong, nonatomic) UIView *photoView;
@property (strong, nonatomic) UIImageView *frameView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.frame = CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height - 49);
    NSLog(@"%f,%f",self.view.frame.size.height,(self.view.frame.size.height));
    
    _photoView = [[UIView alloc] initWithFrame:self.view.frame];
    UIImage * myImage = [UIImage imageNamed: @"frame3.png"];
    _frameView = [[UIImageView alloc] initWithFrame:self.view.frame];
    _frameView.image = myImage;
    // Do any additional setup after loading the view, typically from a nib.
    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake((self.view.frame.size.width/2 - 50), (self.view.frame.size.height - 40), 100, 20)];
    //button.backgroundColor = [UIColor whiteColor];
    
    [button setTitle:@"撮影" forState:UIControlStateNormal];
    
    [button addTarget:self action:@selector(takePhoto:) forControlEvents:UIControlEventTouchDown];
    [self.view addSubview:_photoView];
    [self.view addSubview:_frameView];
    [self.view addSubview:button];
    // 撮影開始
    [self setupAVCapture];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)setupAVCapture
{
    
    NSError *error = nil;
    
    // 入力と出力からキャプチャーセッションを作成
    self.session = [[AVCaptureSession alloc] init];
    
    // 正面に配置されているカメラを取得
    AVCaptureDevice *camera = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    
    // カメラからの入力を作成し、セッションに追加
    self.videoInput = [[AVCaptureDeviceInput alloc] initWithDevice:camera error:&error];
    [self.session addInput:self.videoInput];
    
    // 画像への出力を作成し、セッションに追加
    self.stillImageOutput = [[AVCaptureStillImageOutput alloc] init];
    [self.session addOutput:self.stillImageOutput];
    
    // キャプチャーセッションから入力のプレビュー表示を作成
    AVCaptureVideoPreviewLayer *captureVideoPreviewLayer = [[AVCaptureVideoPreviewLayer alloc] initWithSession:self.session];
    captureVideoPreviewLayer.frame = self.photoView.bounds;
    captureVideoPreviewLayer.videoGravity = AVLayerVideoGravityResizeAspectFill;
    
    // レイヤーをViewに設定
    CALayer *previewLayer = self.photoView.layer;
    previewLayer.masksToBounds = YES;
    [previewLayer addSublayer:captureVideoPreviewLayer];
    
    // セッション開始
    [self.session startRunning];
}

- (void)takePhoto:(id)sender
{
    // ビデオ入力のAVCaptureConnectionを取得
    AVCaptureConnection *videoConnection = [self.stillImageOutput connectionWithMediaType:AVMediaTypeVideo];
    
    if (videoConnection == nil) {
        return;
    }
    
    PreviewViewController *previewViewController = [[PreviewViewController alloc] init];
    previewViewController.delegate = self;
    [self presentViewController:previewViewController animated:YES completion:nil];
    __weak typeof(previewViewController) weakPicturePreviewView = previewViewController;
    // ビデオ入力から画像を非同期で取得。ブロックで定義されている処理が呼び出され、画像データを引数から取得する
    [self.stillImageOutput
     captureStillImageAsynchronouslyFromConnection:videoConnection
     completionHandler:^(CMSampleBufferRef imageDataSampleBuffer, NSError *error) {
         if (imageDataSampleBuffer == NULL) {
             return;
         }
         
         // 入力された画像データからJPEGフォーマットとしてデータを取得
         NSData *imageData = [AVCaptureStillImageOutput jpegStillImageNSDataRepresentation:imageDataSampleBuffer];
         
         // JPEGデータからUIImageを作成
         UIImage *image = [[UIImage alloc] initWithData:imageData];
         
         UIImage *setImage = [self compositeImages:@[image,[UIImage imageNamed: @"frame3.png"]] size:self.view.frame.size];
         
         [weakPicturePreviewView setPreviewImage:setImage];
         
         // アルバムに画像を保存
         //UIImageWriteToSavedPhotosAlbum(image, self, nil, nil);
     }];
}

- (UIImage *)compositeImages:(NSArray *)array size:(CGSize)size
{
    UIImage *image = nil;
    
    // ビットマップ形式のグラフィックスコンテキストの生成
    UIGraphicsBeginImageContextWithOptions(size, 0.f, 0);
    
    // 塗りつぶす領域を決める
    CGRect rect = CGRectMake(0, 0, size.width, size.height);
    
    for (id item in array) {
        if (![item isKindOfClass:[UIImage class]]) {
            continue;
        }
        UIImage *img = item;
        [img drawInRect:rect];
    }
    
    // 現在のグラフィックスコンテキストの画像を取得する
    image = UIGraphicsGetImageFromCurrentImageContext();
    
    // 現在のグラフィックスコンテキストへの編集を終了
    // (スタックの先頭から削除する)
    UIGraphicsEndImageContext();
    
    return image;
}

- (void)dissmissPicturePreviewView {
    [self dismissViewControllerAnimated:YES completion:nil];
}

@end
