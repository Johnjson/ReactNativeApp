package com.reactnativeapp.base;

import android.content.Context;
import android.view.ViewGroup;
import android.view.ViewParent;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.reactnativeapp.MainApplication;

import java.util.HashMap;

/**
 * @author jhonjson
 */
public class RNCacheViewManager {


    public final static String LOL_ASSETSBUNDLENAME = "index.android.bundle";
    public final static String JSMAINMODULEPATH = "index";
    public final static String JSMODULENAME = "ReactNativeApp";
    private static HashMap<String, ReactRootView> rootViewHashMap = new HashMap<>();
    public  static ReactInstanceManager reactInstanceManager = null;
    /**
     * 预加载RN渲染引擎
     * @param mContext
     */
    public static void init(Context mContext) {
        //包含了，立刻返回
        if (rootViewHashMap.containsKey(JSMODULENAME)) {return;}
        //ReactRootView 直接new就可以了
        ReactRootView mReactRootView = new ReactRootView(mContext);
        //在MainApplication中提前初始化ReactInstanceManager
         reactInstanceManager = ((MainApplication) mContext).getReactNativeHost().getReactInstanceManager();;

        //第一个参数为ReactInstanceManager
        //第二个参数建议和RN主界面中getMainComponentName返回的内容一样，也就是此函数中的第二个形参moduleName
        //第三个参数为null即可
        mReactRootView.startReactApplication(reactInstanceManager, JSMODULENAME, null);
        rootViewHashMap.put(JSMODULENAME, mReactRootView);
    }


    /**
     * 获取指定的reactrootview
     * @return
     */
    public static ReactRootView getReactRootView() {
        ReactRootView reactRootView = rootViewHashMap.get(JSMODULENAME);
        if (reactRootView != null) {
            ViewParent parent = reactRootView.getParent();
            if (parent != null && parent instanceof ViewGroup) {
                ((ViewGroup) parent).removeAllViews();
            }
        }
        return reactRootView;
    }
}
