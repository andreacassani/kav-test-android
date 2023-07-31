import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {Array.from(Array(20).keys()).map(value => (
            <View style={styles.inputContainer} key={value}>
              <TextInput style={styles.input} value={'TextInput' + value} />
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: 'pink'},
  keyboardAvoidingView: {flex: 1},
  contentContainer: {backgroundColor: 'lightblue'},
  inputContainer: {marginVertical: 8},
  input: {height: 40, backgroundColor: 'white', color: 'black'},
});

export default App;
