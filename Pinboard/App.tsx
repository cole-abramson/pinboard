import React, {useEffect, useState} from 'react';
import {StatusBar, View, Image, Text} from 'react-native';

const App = () => {
  return <View style={{flex: 1}}>
    <StatusBar hidden={true}/>
    <Content/>
  </View>;
}

const Content = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const interval = setInterval(() =>
        // TODO: Figure out how to inject URL from the environment
        fetch('http://localhost:4567/current_pin')
          .then(res => res.json())
          .then(res => setResponse(res)),
      5000
    )

    return () => clearInterval(interval);
  }, []);


  switch (response?.type) {
    case 'IMAGE_URL':
      return <ImageView url={response.content}/>;
    case 'MARKDOWN':
      return <Markdown content={response.content}/>;
    default:
      return <ImageView url={'https://coleabramson.com/pinboard.png'}/>;
  }
}
const Markdown = ({ content }: { content: string }) => {
  return <Text>{content}</Text>;
}

const ImageView = ({url}: { url: string }) => {
  return (
    <View style={{flex: 1, alignItems: 'stretch', backgroundColor: 'black'}}>
      <Image
        style={{flex: 1}}
        source={{uri: url}}
        resizeMode='contain'
      />
    </View>
  );
};

export default App;
