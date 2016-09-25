//
//  WebView.m
//  smail-snapshots
//
//  Created by tomoki on 2016/09/24.
//  Copyright © 2016年 tomoki. All rights reserved.
//

#import "WebView.h"

@interface WebView()<UIWebViewDelegate>

@end

@implementation WebView

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    // UIWebViewのインスタンス初期化
    UIWebView *tmpWebView = [[UIWebView alloc]init];
    
    // デリゲート
    tmpWebView.delegate = self;
    
    // Webページの大きさを画面に合わせる
    CGRect rect = CGRectMake(0, 14, self.view.frame.size.width, self.view.frame.size.height - 49);
    tmpWebView.frame = rect;
    tmpWebView.scalesPageToFit = YES;
    
    // インスタンスをビューに追加する
    [self.view addSubview:tmpWebView];
    
    // URLを指定
    NSURL *url = [NSURL URLWithString:@"http://192.168.1.178:3000"];
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    
    // リクエストを投げる
    [tmpWebView loadRequest:request];
}

// ロード時にインジケータをまわす
- (void)webViewDidStartLoad:(UIWebView*)webView
{
    [UIApplication sharedApplication].networkActivityIndicatorVisible = YES;
}

// ロード完了で非表示
- (void)webViewDidFinishLoad:(UIWebView*)webView
{
    [UIApplication sharedApplication].networkActivityIndicatorVisible = NO;
}

@end
