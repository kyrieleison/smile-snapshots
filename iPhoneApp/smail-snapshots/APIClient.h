//
//  APIClient.h
//  smail-snapshots
//
//  Created by tomoki on 2016/09/24.
//  Copyright © 2016年 tomoki. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface APIClient : NSObject

+ (void)requestRegist:(UIImage *)request success:(void (^)())success failure:(void (^)(NSError *error))failure;

@end
