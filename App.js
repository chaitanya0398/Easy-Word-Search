// import React, { Component } from "react";
// import {
//   AppRegistry,
//   View,
//   Text,
//   StyleSheet,
//   Clipboard,
//   Button,
//   ScrollView,
// } from "react-native";

// import * as Permissions from "expo-permissions";
// import * as Notifications from "expo-notifications";
// let result = [];

// Notifications.setNotificationHandler({
//   handleNotification: async () => {
//     return {
//       shouldShowAlert: true,
//     };
//   },
// });
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: "hello",
//       pushToken: "LAc4-RNgPTUworioCkutPP",
//       data: [],
//       noti: "",
//       audio: "",
//       feedURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
//     };
//     this.searchForTerm = this.searchForTerm.bind(this);
//   }

//   async searchForTerm() {
//     let text = "Hi";

//     text = await Clipboard.getString();
//     if (text == null) {
//       text = "Hi";
//     }

//     let url = this.state.feedURL + text;

//     if (this.state.input != text) {
//       this.searching(url, text);
//       this.triggerNotificationHandler();
//     }
//     this.setState({
//       input: text,
//     });
//   }

//   searching = (url, text) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((res) => {
//         let notidata = "";
        

//         result.push(text.toUpperCase());
//         result.push(
//           "\n\n----------------------------------------------------------------------------------------------\n"
//         );
//         result.push("\n");
//         result.push(`Phonetics: ${res[0].phonetics[0].text}`);
//         result.push("\n");
//         result.push(
//           "\n----------------------------------------------------------------------------------------------\n"
//         );

//         for (let i = 0; i < 4; i++) {
//           try {
//             result.push("\n");
//             result.push(`${res[0].meanings[i].partOfSpeech.toUpperCase()} : `);
//             notidata += res[0].meanings[i].partOfSpeech.toUpperCase() + "\n\n";
//             result.push("\n\n");
//             for (let j = 0; j < 3; j++) {
//               result.push(
//                 `Definition: ${res[0].meanings[i].definitions[j].definition}`
//               );
//               notidata += res[0].meanings[i].definitions[j].definition + "\n\n";
//               result.push("\n\n");
//               try {
//                 result.push(
//                   `Example: ${res[0].meanings[i].definitions[j].example}`
//                 );
//                 result.push("\n\n");
//               } catch (e) {}
//               result.push("Synonyms: ");
//               for (let k = 0; k < 3; k++) {
//                 try {
//                   result.push(
//                     `${res[0].meanings[i].definitions[j].synonyms[k]}, `
//                   );
                  
//                 } catch (e) {}
//               }
//               result.push(
//                 "\n----------------------------------------------------------------------------------------------\n\n"
//               );
//             }
//             result.push(
//               "----------------------------------------------------------------------------------------------\n\n"
//             );
//           } catch (e) {
//             break;
//           }
//           result.push(
//             "\n\n----------------------------------------------------------------------------------------------\n"
//           );
//         }

//         this.setState({
//           data: result,
//           noti: notidata,
//         });

//         return notidata;
//       })

//       .catch((error) => {});
//   };

//   componentDidMount = () => {
//     Permissions.getAsync(Permissions.NOTIFICATIONS)
//       .then(() => {
//         return Notifications.getExpoPushTokenAsync();
//       })
//       .then((response) => {
//         const token = response.data;
//         this.setState({ pushToken: token });
//       })
//       .catch((err) => {});
//   };

//   triggerNotificationHandler = () => {
//     fetch("https://exp.host/--/api/v2/push/send", {
//       method: "POST",
//       body: JSON.stringify({
//         to: this.state.pushToken,
//         title: this.state.input,
//         body: this.state.noti,
//       }),
//       trigger: null,
//     });
//   };

//   render() {
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <Button onClick={this.searchForTerm()} title="Start Searching" />
//         </View>
//         {/* 
//         <View style={styles.container}>
//           <Button onPress={this.PlayRemoteURLSoundFile} title="Play Audio" />
//         </View> */}

//         <View style={styles.container}>
//           <Text>{this.state.data}</Text>
//         </View>
//       </ScrollView>
//     );
//   }
// }

// AppRegistry.registerComponent("Dictionary", () => App);

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 100,
//   },
//   copiedText: {
//     marginTop: 10,
//     color: "red",
//   },
// });


// Play Music / Sound in React Native App for Android and iOS
// https://aboutreact.com/react-native-play-music-sound/

// import React in our code
import React, {useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

// import Sound Component
import Sound from 'react-native-sound';

const App = () => {
  let sound1, sound2, sound3, sound4, sound5, sound6;

  useEffect(() => {
    Sound.setCategory('Playback', true); // true = mixWithOthers
    return () => {
      if (sound1) sound1.release();
      if (sound2) sound2.release();
      if (sound3) sound3.release();
      if (sound4) sound4.release();
      if (sound5) sound5.release();
      if (sound6) sound6.release();
    };
  }, []);

  //List of the dummy sound track
  const audioList = [
    {
      title: 'Play mp3 sound from Local',
      isRequire: true,
      url: require('./resource/advertising.mp3'),
    },
    {
      title: 'Play mp3 sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
    },
    {
      title: 'Play aac sound from Local',
      isRequire: true,
      url: require('./resource/pew2.aac'),
    },
    {
      title: 'Play aac sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
    },
    {
      title: 'Play wav sound from Local',
      isRequire: true,
      url: require('./resource/frog.wav'),
    },
    {
      title: 'Play wav sound from remote URL',
      url:
        'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
  ];

  const playSound = (item, index) => {
    if (index == 0) {
      sound1 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 1) {
      sound2 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound2.play(() => {
          sound2.release();
        });
      });
    } else if (index == 2) {
      sound3 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound3.play(() => {
          sound3.release();
        });
      });
    } else if (index == 3) {
      sound4 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound4.play(() => {
          sound4.release();
        });
      });
    } else if (index == 4) {
      sound5 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound5.play(() => {
          sound5.release();
        });
      });
    } else if (index == 5) {
      sound6 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound6.play(() => {
          sound6.release();
        });
      });
    }
  };

  const stopSound = (_item, index) => {
    if (index == 0 && sound1) {
      sound1.stop(() => {
        console.log('Stop');
      });
    } else if (index == 1 && sound2) {
      sound2.stop(() => {
        console.log('Stop');
      });
    } else if (index == 2 && sound3) {
      sound3.stop(() => {
        console.log('Stop');
      });
    } else if (index == 3 && sound4) {
      sound4.stop(() => {
        console.log('Stop');
      });
    } else if (index == 4 && sound5) {
      sound5.stop(() => {
        console.log('Stop');
      });
    } else if (index == 5 && sound6) {
      sound6.stop(() => {
        console.log('Stop');
      });
    }
  };

  const ItemView = (item, index) => {
    return (
      <View style={styles.feature} key={index}>
        <Text style={styles.textStyle}>{item.title}</Text>
        <TouchableOpacity onPress={() => playSound(item, index)}>
          <Text style={styles.buttonPlay}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => stopSound(item, index)}>
          <Text style={styles.buttonStop}>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Play Music / Sound in React Native App for Android and iOS
        </Text>
        <ScrollView style={{flex: 1}}>
          {audioList.map(ItemView)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    flex: 1,
    padding: 5,
  },
  buttonPlay: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(00,80,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(80,00,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 7,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
  },
});