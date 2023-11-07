import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AttendanceHeader} from './components/attendanceHeader';
import {theme} from '../../styles/theme';
import {AttandanceList} from './components/attendanceList';

export const Attendance = () => {
  return (
    <View style={styles.screen}>
      <AttendanceHeader />
      <View style={styles.separater} />
      <AttandanceList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.palette.screenBackground,
    paddingHorizontal: 20,
  },
  separater: {
    marginTop: 15,
    marginBottom: 23,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.palette.borderColor,
  },
});
