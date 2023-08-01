/**
 * Removes android:windowSoftInputMode="adjustResize" from AndroidManifest.xml,
 * which is the default value shipped with React Native, and replaces it with
 * android:windowSoftInputMode="stateUnspecified", which is Android's default.
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
  manifestFile.replace('adjustResize', 'stateUnspecified'),
  'utf-8',
);
