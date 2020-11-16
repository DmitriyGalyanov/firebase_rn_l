package com.test.test.gbm.app;

import com.facebook.react.ReactActivity;

import com.facebook.applinks.AppLinkData;
import android.os.Bundle; // required for onCreate parameter
import android.content.Intent;
import android.net.Uri;
import android.util.Log;


public class MainActivity extends ReactActivity {
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    AppLinkData.fetchDeferredAppLinkData(this, getString(R.string.facebook_app_id),
      new AppLinkData.CompletionHandler() {
          @Override
          public void onDeferredAppLinkDataFetched(AppLinkData appLinkData) {
              Log.d("SplashActivity", "appLinkData: " + appLinkData);
          }
      }
    );

    Intent intent = getIntent();
    String action = intent.getAction();
    Uri data = intent.getData();// URI data = intent.getData();
    Log.d("SplashActivity", "data: " + data);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    // return "firebase_rn_l";
    return "test.test.gbm.app";
  }
}
