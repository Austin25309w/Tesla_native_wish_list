import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const BottomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Drawer" onPress={toggleDrawer} />
      {isOpen && (
        <View style={styles.drawer}>
          <Text>This is the bottom drawer!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: 'white',
  },
});

export default BottomDrawer;