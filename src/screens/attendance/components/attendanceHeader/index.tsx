import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Title} from '../../../../components/atoms/text/title';
import {useNavigation} from '@react-navigation/native';
import {Icon, icons} from '../../../../components/atoms/Icon';
import {Alert} from 'react-native';
import {Heading} from '../../../../components/atoms/text/heading';
import {FontWeights} from '../../../../components/atoms/text';
import {ImageSources} from '../../../../assets/images';
import {Label} from '../../../../components/atoms/text/label';
import {theme} from '../../../../styles/theme';
import {SubHeading} from '../../../../components/atoms/text/subHeading';

export const AttendanceHeader = () => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  const onSearch = () => {
    Alert.alert('Search Pressed');
  };

  const onDailyAttandance = () => {
    Alert.alert('Daily Attandance Pressed');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.backContainer]}>
        <Pressable onPress={onGoBack}>
          <Icon name={icons.backArrow} size={24} />
        </Pressable>
        <Title>{'Attendance'}</Title>
        <Pressable onPress={onSearch}>
          <Icon name={icons.searchOutline} size={24} />
        </Pressable>
      </View>
      <View style={styles.headerContent}>
        <View>
          <View style={[styles.row, styles.headingName]}>
            <Heading fontWeight={FontWeights.bold}>
              {'Arth Hours - Dhara'}
            </Heading>
            <Icon name={icons.downArrow} size={24} />
          </View>
          <ImageSources.calenderPicker />
        </View>
        <Pressable style={styles.dailyAttandance} onPress={onDailyAttandance}>
          <View style={styles.row}>
            <SubHeading
              fontSize={13}
              textColor={theme.palette.screenBackground}
              fontWeight={FontWeights.semiBold}>
              {'Daily Attendance'}
            </SubHeading>
            <Icon
              color={theme.palette.screenBackground}
              name={icons.downArrow}
              size={16}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingName: {
    marginBottom: 5,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  dailyAttandance: {
    backgroundColor: theme.palette.activeTint,
    paddingHorizontal: 33,
    paddingVertical: 13,
    borderRadius: 10,
  },
  backContainer: {
    marginBottom: 27,
  },
});
