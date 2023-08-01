import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import babelConfig from './babel.config';

function ScrollViewMomentumExample(): JSX.Element {
  const ref = useRef<ScrollView | null>(null);

  const handlePress = (animated: boolean) => {
    ref.current?.scrollTo({y: 0, animated});
  };

  return (
    <View style={styles.momentumContainer}>
      <View style={styles.navigation}>
        <Button title="scrollTo true" onPress={() => handlePress(true)} />
        <Button title="scrollTo false" onPress={() => handlePress(false)} />
      </View>
      <ScrollView ref={ref}>
        {Array.from(Array(500).keys()).map(value => (
          <Text key={value} style={styles.momentumText}>
            {value}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

function ScrollViewKAVExample(): JSX.Element {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {Array.from(Array(50).keys()).map(value => (
          <View style={styles.inputContainer} key={value}>
            <TextInput style={styles.input} value={'TextInput' + value} />
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function App(): JSX.Element {
  const [view, setView] = useState<number>(0);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.navigation}>
        <Button title="KAV example" onPress={() => setView(0)} />
        <Button title="Momentum example" onPress={() => setView(1)} />
      </View>
      {view === 0 ? <ScrollViewKAVExample /> : <ScrollViewMomentumExample />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: 'black'},
  navigation: {flexDirection: 'row', justifyContent: 'space-between'},

  keyboardAvoidingView: {flex: 1},
  contentContainer: {flexGrow: 1},
  inputContainer: {marginVertical: 8},
  input: {height: 40, backgroundColor: 'white', color: 'black'},

  momentumContainer: {flex: 1},
  momentumText: {fontSize: 50, textAlign: 'center', color: 'white'},
});

export default App;
