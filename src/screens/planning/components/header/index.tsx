import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icon, icons} from '../../../../components/atoms/Icon';
import {ImageSources} from '../../../../assets/images';
import {FontWeights} from '../../../../components/atoms/text';
import {theme} from '../../../../styles/theme';
import {Heading} from '../../../../components/atoms/text/heading';
import {SubHeading} from '../../../../components/atoms/text/subHeading';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={ImageSources.userPlaceholder}
          style={styles.placeHolder}
        />
        <View style={styles.details}>
          <Heading fontWeight={FontWeights.bold}>{'Ratul Sarkar'}</Heading>
          <View style={styles.row}>
            <SubHeading fontWeight={FontWeights.bold}>
              {'Arth Houser - Dhara'}
            </SubHeading>
            <Icon style={styles.downArrowIcon} name={icons.downArrow} />
          </View>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <Icon name={icons.notificationOutline} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeHolder: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  downArrowIcon: {
    marginLeft: 2,
  },
  details: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  notificationContainer: {
    padding: 7,
    borderRadius: 6,
    backgroundColor: theme.palette.themeBackgroundFaded,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
