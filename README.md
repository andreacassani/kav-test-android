# How to Test

First, navigate to `kav_test_fix` and run `npm install`.

Run the project as usual with `npm run android`.

There are 2 views in the app:

- **KAV example**: demonstrates that ScrollView does not work properly when the user interacts with a TextInput in a ScrollView nested in a KeyboardAvoidingView.
- **Momentum example**: demonstrates that the ScrollView momentum stops correctly when calling scrollTo programmatically after [this fix](https://github.com/facebook/react-native/pull/36104) was introduced in version 0.72.0.

## Change `android:windowSoftInputMode`

If we set `android:windowSoftInputMode=stateUnspecified`, the ScrollView starts responding again to Keyboard events, but it still does not work properly as you can't scroll down the ScrollView when the Keyboard is open.

To test this behavior, run `npm run softinput-unspecified`, and then rebuild the Android project (`cd android && ./gradlew clean && cd .. && npm run android`).

After testing, revert to the default setting with `npm run softinput-resize`.

## Proposed Fix

To check the proposed fix, we need to first build ReactAndroid from sources:

- Run `npm run android-sources` to edit the `android/settings.gradle` file.
- Run `rm -rf node_modules` and `npm install` (I'm not sure if this step is actually needed, but without it, the build consistently failed on my device).
- Run `npm run android-patch` to patch ReactAndroid.
- Run `cd android && ./gradlew clean && cd .. && npm run android` to clean and rebuild.

Now both example screens should work correctly.
