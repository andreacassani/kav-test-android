/**
 * Edits android/settings.gradle to build ReactAndroid from sources.
 */

const fs = require('fs');
const path = require('path');
const gradleSettingsPath = path.join(__dirname, '../android/settings.gradle');
const gradleSettingsFile = fs.readFileSync(gradleSettingsPath, 'utf-8');

const dependencySubstitution = `includeBuild('../node_modules/react-native') {
    dependencySubstitution {
        substitute(module("com.facebook.react:react-android")).using(project(":packages:react-native:ReactAndroid"))
        substitute(module("com.facebook.react:react-native")).using(project(":packages:react-native:ReactAndroid"))
        substitute(module("com.facebook.react:hermes-android")).using(project(":packages:react-native:ReactAndroid:hermes-engine"))
        substitute(module("com.facebook.react:hermes-engine")).using(project(":packages:react-native:ReactAndroid:hermes-engine"))
    }
}
`;

fs.writeFileSync(
  gradleSettingsPath,
  gradleSettingsFile + '\n' + dependencySubstitution,
  'utf-8',
);
