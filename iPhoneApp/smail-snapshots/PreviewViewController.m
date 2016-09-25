//
//  PreviewViewController.m
//  smail-snapshots
//
//  Created by tomoki on 2016/09/24.
//  Copyright © 2016年 tomoki. All rights reserved.
//

#import "PreviewViewController.h"
#import "APIClient.h"

@interface PreviewViewController ()
@property (strong, nonatomic) UIButton *cancel;
@property (strong, nonatomic) UIButton *save;
@property (strong, nonatomic) UIImageView *imageView;
@property (strong, nonatomic) UIImage *image;
@property (strong, nonatomic) NSString *shopId;

@end

@implementation PreviewViewController

- (instancetype)initWithShopId:(NSString *)shopId {
    if (self = [super init]) {
        self.shopId = shopId;
    }
    return self;
}

- (void)viewDidLoad {
    self.view.backgroundColor = [UIColor whiteColor];
    _imageView = [[UIImageView alloc] initWithFrame:self.view.frame];
    [_imageView setContentMode:UIViewContentModeCenter];
    
    _cancel = [[UIButton alloc] initWithFrame:CGRectMake(self.view.frame.size.width/5 - 15, self.view.frame.size.height - 100, self.view.frame.size.width/5 + 30, 20)];
    _save = [[UIButton alloc] initWithFrame:CGRectMake(((self.view.frame.size.width/5) * 3) , self.view.frame.size.height - 100, self.view.frame.size.width/5, 20)];
    
    [_cancel setTitle:@"キャンセル" forState:UIControlStateNormal];
    [_save setTitle:@"保存" forState:UIControlStateNormal];
    
    [self.view addSubview:_imageView];
    [self.view addSubview:_cancel];
    [self.view addSubview:_save];
    
    [self.cancel addTarget:self action:@selector(tapCancel:) forControlEvents:UIControlEventTouchUpInside];
    [self.save addTarget:self action:@selector(tapSave:) forControlEvents:UIControlEventTouchUpInside];
    if (self.image) {
        [self setImageWithImage:_image];
    }
}

- (void)setPreviewImage:(UIImage *)image {
    _image = [[UIImage alloc] initWithCGImage:image.CGImage];
    [self setImageWithImage:_image];
}

- (void)tapCancel:(UIButton *)sender {
    [self dismissViewControllerAnimated:YES completion:nil];
}

- (void)tapSave:(UIButton *)sender {
    [APIClient requestRegist:_image shopId:_shopId success:^{
        [self dismissViewControllerAnimated:YES completion:nil];
        [self.delegate dissmissPicturePreviewView];
    } failure:^(NSError *error) {
        NSLog(@"error:%@",error);
        [self dismissViewControllerAnimated:YES completion:nil];
        [self.delegate dissmissPicturePreviewView];
    }];
}

- (void)setImageWithImage:(UIImage *)image {
    self.imageView.image = _image;
}


@end
