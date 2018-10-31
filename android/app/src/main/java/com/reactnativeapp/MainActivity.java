package com.reactnativeapp;

import android.os.Bundle;

import com.facebook.react.ReactRootView;
import com.reactnativeapp.base.BaseReactActivity;
import com.reactnativeapp.base.RNCacheViewManager;

public class MainActivity extends BaseReactActivity {
    protected ReactRootView mReactRootView;
    private String KEY_NAME = "key_name";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Bundle bundle = new Bundle();
        bundle.putString(KEY_NAME,"zhangsan");
        mReactRootView = RNCacheViewManager.getReactRootView();
        mReactRootView.setAppProperties(bundle);
        setContentView(mReactRootView);
    }

//    @Override
//    protected String getMainComponentName() {
//        return "ReactNativeApp";
//    }
}


