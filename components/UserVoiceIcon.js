import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

const UserVoiceIcon = ( props ) => {
  const [sound, setSound] = React.useState();
  
  React.useEffect(() => {
    const soundGen = async () => {
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/sounds/info.wav')
      );
      await setSound(sound);
      return sound;
    }
    const playSound = async () => {
      const sound = await soundGen()
      await sound.playAsync();
    }
    const stopSound = async () => {
      const sound = await soundGen()
      await sound.stopAsync();
    }

    props.status == "run" && playSound();
    props.status == "stop" && stopSound();

  }, [props.status]);

  React.useEffect(() => {   
    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);

  return (
    <Svg
    width={34}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.333 16.07c2.827 0 4.959-2.007 4.959-4.667 0-2.66-2.132-4.667-4.959-4.667-2.826 0-4.958 2.007-4.958 4.667 0 2.66 2.132 4.666 4.958 4.666Zm1.417 1.263H9.917c-3.906 0-7.084 2.991-7.084 6.667v1.333h17V24c0-3.676-3.177-6.667-7.083-6.667ZM26.016 3.515 24.013 5.4c1.871 1.764 2.904 4.108 2.904 6.6s-1.033 4.836-2.905 6.6l2.004 1.885c2.408-2.268 3.734-5.281 3.734-8.485 0-3.204-1.326-6.217-3.734-8.485Z"
      fill={ props.color }
    />
    <Path
      d="m22.008 7.285-2.003 1.888c.803.754 1.245 1.758 1.245 2.827 0 1.07-.442 2.073-1.245 2.827l2.003 1.888c1.337-1.259 2.075-2.932 2.075-4.715s-.738-3.456-2.075-4.715Z"
      fill={ props.color }
    />
  </Svg>
  );
};
export default UserVoiceIcon