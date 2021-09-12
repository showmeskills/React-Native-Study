import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const App = () => {
  const [state] = useState<string>(
    'the develop environment has been done in IOS and Android',
  );

  return (
    <SafeAreaView>
      <View>
        <Text>this is terry first react-native app</Text>
      </View>
      <View>
        <Text>{state}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
