package com.quickplay;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.hieuvp.fingerprint.ReactNativeFingerprintScannerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
        // Make sure you are using BuildConfig from your own application
        return BuildConfig.DEBUG;
     }

    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
           new MainReactPackage(),
           new ReactNativeFingerprintScannerPackage()
      );
    }


  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}