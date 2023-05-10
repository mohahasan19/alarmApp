import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { VolumeManager, useRingerMode, RINGER_MODE, checkDndAccess,
  requestDndAccess,
  RingerModeType, getRingerMode } from 'react-native-volume-manager';

const App = () => {
  const { mode, error, setMode } = useRingerMode();
  const newMode = getRingerMode();

  useEffect(() => {
    (async() => {
      if (mode === RINGER_MODE.silent || newMode === RINGER_MODE.silent ) {
      const hasDndAccess = await checkDndAccess();
      console.log("HOOOOOOO");
      if (hasDndAccess === false) {
        // This function opens the DND settings.
        // You can ask user to give the permission with a modal before calling this function.
        requestDndAccess();
        return;
      }
    }
    setMode(RINGER_MODE.normal);

    VolumeManager.setVolume(1, {
      type: 'ring', // default: "music" (Android only)
      showUI: true, // default: false (suppress native UI volume toast for iOS & Android)
      playSound: true, // default: false (Android only)
    }, () => console.log("i work"));
    })();
    
  }, []);

  return (
    <View>
      <Text>hiiiiiiiii</Text>
      <Button title="Normal" onPress={() => setMode(RINGER_MODE.normal)} />
    </View>
  );
};

export default App;

