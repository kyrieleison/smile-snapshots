//
//  APIClient.m
//  smail-snapshots
//
//  Created by tomoki on 2016/09/24.
//  Copyright © 2016年 tomoki. All rights reserved.
//

#import "APIClient.h"
#import "AFNetworking.h"

@implementation APIClient

+ (void)requestRegist:(UIImage *)requestImage shopId:(NSString *)shopId success:(void (^)())success failure:(void (^)(NSError *error))failure {
    NSString *url = @"http://192.168.1.178:3000/image";
    
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    
    NSData* jpgData = [[NSData alloc] initWithData:UIImageJPEGRepresentation(requestImage, 1.0f)];
    NSString* imageData = [jpgData base64EncodedStringWithOptions:NSDataBase64Encoding76CharacterLineLength];
    NSDictionary *requestData = @{@"image":imageData,@"shop_id":shopId};
    [manager POST:url parameters:requestData success:^(NSURLSessionDataTask * _Nonnull task, id  _Nonnull responseObject) {
            success(responseObject);
            return;
        
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        failure(error);
        return;
    }];
}

@end
