import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from './components/header';
import {theme} from '../../styles/theme';

export const Planning: FC<any> = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.palette.screenBackground,
  },
});
