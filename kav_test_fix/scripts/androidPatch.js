/**
 * Patches ReactAndroid.
 */

const fs = require('fs');
const path = require('path');
const scrollDir = path.join(
  __dirname,
  '../node_modules/react-native/ReactAndroid/src/main/java/com/facebook/react/views/scroll/',
);
const patchesDir = path.join(__dirname, '/patches/');

fs.renameSync(
  scrollDir + 'ReactScrollView.java',
  scrollDir + 'ReactScrollView.java.bak',
);
fs.renameSync(
  scrollDir + 'ReactScrollViewManager.java',
  scrollDir + 'ReactScrollViewManager.java.bak',
);

fs.copyFileSync(
  patchesDir + 'ReactScrollView.java',
  scrollDir + 'ReactScrollView.java',
);
fs.copyFileSync(
  patchesDir + 'ReactScrollViewManager.java',
  scrollDir + 'ReactScrollViewManager.java',
);
