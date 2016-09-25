//
//  AppDelegate.m
//  smail-snapshots
//
//  Created by tomoki on 2016/09/24.
//  Copyright © 2016年 tomoki. All rights reserved.
//

#import "AppDelegate.h"
#import "ViewController.h"
#import "WebView.h"

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    // UIWindowの生成
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    
    // 最初に表示されるViewControllerを生成
    _tabBarController = [[UITabBarController alloc] init];
    // １つめのタブのタイトルを"hoge"に設定する
    [_tabBarController.tabBar.items objectAtIndex:0].title = @"写真";
    [_tabBarController.tabBar.items objectAtIndex:1].title = @"Web";
    ViewController *fvc = [[ViewController alloc] init];
    WebView *webView = [[WebView alloc] init];
    fvc.view.backgroundColor = [UIColor whiteColor];
    NSArray *views = @[fvc,webView];
    [_tabBarController setViewControllers:views animated:NO];
    self.window.rootViewController = _tabBarController;
    [self.window makeKeyAndVisible];
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
