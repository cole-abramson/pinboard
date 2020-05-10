
import React, {useEffect, useState} from 'react';
import {StatusBar, View, Image} from 'react-native';

const App: () => React$Node = () => {
  const [contentUrl, setContentUrl] = useState('');

  useEffect(() => {
    const interval = setInterval(() =>
      fetch('http://localhost:4567/current_pin')
        .then(res => res.json())
        .then(res => setContentUrl(res.body.url)),
      5000
    )

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'stretch', backgroundColor: 'black'}}>
      <StatusBar hidden={true} />
      <Image
        style={{flex: 1}}
        source={{uri: contentUrl}}
        resizeMode='contain'
      />
    </View>
  );
};

export default App;
