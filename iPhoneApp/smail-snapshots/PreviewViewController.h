//
//  PreviewViewController.h
//  smail-snapshots
//
//  Created by tomoki on 2016/09/24.
//  Copyright © 2016年 tomoki. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol PicturePreviewViewDelegate <NSObject>

- (void)dissmissPicturePreviewView;

@end

@interface PreviewViewController : UIViewController

- (void)setPreviewImage:(UIImage *)image;
@property (weak,nonatomic) id<PicturePreviewViewDelegate> delegate;

@end
