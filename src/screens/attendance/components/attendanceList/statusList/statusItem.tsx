import React, {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {AttandanceStatus} from '../constants';
import {getAttendanceStatusColor, getAttendanceStatusMarker} from '../utils';
import {theme} from '../../../../../styles/theme';
import {SubHeading} from '../../../../../components/atoms/text/subHeading';
import {FontWeights} from '../../../../../components/atoms/text';

export interface IStatusItem {
  status: AttandanceStatus;
  isSlected?: boolean;
  id?: number;
}

export interface IStatusItemProps extends IStatusItem {
  height?: number;
  onPress?: (status: AttandanceStatus) => void;
}

const StatusItem: FC<IStatusItemProps> = ({
  status = AttandanceStatus.empty,
  height = 24,
  isSlected = false,
  onPress,
}) => {
  const styles = getStyles(status, height, isSlected);

  return (
    <Pressable {...(onPress ? {onPress: () => onPress(status)} : {})}>
      <View style={styles.container}>
        <SubHeading fontWeight={FontWeights.bold}>
          {getAttendanceStatusMarker(status)}
        </SubHeading>
      </View>
    </Pressable>
  );
};

const getStyles = (
  status: AttandanceStatus,
  height: number,
  isSlected: boolean,
) =>
  StyleSheet.create({
    container: {
      width: height,
      height: height,
      borderRadius: height / 2,
      backgroundColor: isSlected
        ? getAttendanceStatusColor(status)
        : theme.palette.screenBackground,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.palette.borderColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const statusItem = React.memo(StatusItem);
export {statusItem as StatusItem};
