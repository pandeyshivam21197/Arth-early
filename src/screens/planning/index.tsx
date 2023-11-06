import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Planning: FC<any> = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>{'Planning Screen'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
