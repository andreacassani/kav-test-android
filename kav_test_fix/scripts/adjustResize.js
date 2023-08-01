/**
 * Sets android:windowSoftInputMode="adjustResize" in AndroidManifest.xml,
 * which is the default value shipped with React Native.
 */

const fs = require('fs');
const path = require('path');
const manifestPath = path.join(
  __dirname,
  '../android/app/src/main/AndroidManifest.xml',
);
const manifestFile = fs.readFileSync(manifestPath, 'utf-8');
fs.writeFileSync(
  manifestPath,
  manifestFile.replace('stateUnspecified', 'adjustResize'),
  'utf-8',
);
