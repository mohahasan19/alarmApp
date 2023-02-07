import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const App=() => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    console.log("canceled");
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <ScrollView
    style={styles.bgColor}>
      <View
      style={styles.bgColor}>
      <Button title="Start Time" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: 'black'
  }
});

export default App;
