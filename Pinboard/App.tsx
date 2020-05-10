import React, {useEffect, useState} from 'react';
import {StatusBar, View, Image, Text, ScrollView} from 'react-native';
import Markdown from 'react-native-markdown-display';

const App = () => {
  return <View style={{flex: 1, backgroundColor: 'black'}}>
    <StatusBar hidden={true}/>
    <Content/>
  </View>;
}

const Content = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const interval = setInterval(() =>
        // TODO: Figure out how to inject URL from the environment
        fetch('https://pinboard-nexusa.herokuapp.com/current_pin')
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
      return <MarkdownView content={response.content}/>;
    default:
      return <ImageView url={'https://coleabramson.com/pinboard.png'}/>;
  }
}

const MarkdownView = ({content}) => {
  const theme = 'rgb(' + (256 - Math.floor(Math.random() * 75)) + ',' + (256 - Math.floor(Math.random() * 75)) + ',' + (256 - Math.floor(Math.random() * 75)) + ')';
  const theme2 = 'rgb(' + (190 - Math.floor(Math.random() * 75)) + ',' + (256 - Math.floor(Math.random() * 75)) + ',' + (256 - Math.floor(Math.random() * 75)) + ')';

  return <ScrollView style={{padding: 20}}>
    <Markdown style={{
      body: {color: '#dbdbdb', fontSize: 30, lineHeight: 36, fontFamily: 'Avenir-Light'},
      list_item: {lineHeight: 36},
      heading1: {color: theme, fontSize: 50, lineHeight: 60},
      heading2: {color: theme2, fontSize: 40, lineHeight: 50},
      blockquote: {backgroundColor: '#535353'},
      code_block: {backgroundColor: '#535353', fontFamily: 'Menlo'},
      code_inline: {backgroundColor: '#535353', fontFamily: 'Menlo'},
    }}>{content}</Markdown>
  </ScrollView>;
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
