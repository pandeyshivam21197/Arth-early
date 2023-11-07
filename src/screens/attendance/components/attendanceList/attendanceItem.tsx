import React, {FC, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {SubHeading} from '../../../../components/atoms/text/subHeading';
import {Label} from '../../../../components/atoms/text/label';
import {StyleSheet} from 'react-native';
import {AttandanceStatus} from './constants';
import {StatusList} from './statusList';
import {StatusItem} from './statusList/statusItem';
import {Icon, icons} from '../../../../components/atoms/Icon';
import {IStudentAttendace} from '.';
import {Alert} from 'react-native';

export interface IAttendanceItemProps extends IStudentAttendace {
  onNewStatus: (newStatus: AttandanceStatus, id: number) => void;
}

const AttendanceItem: FC<IAttendanceItemProps> = ({
  id,
  selectedStatus,
  imageSrc,
  name,
  description,
  onNewStatus,
}) => {
  const [isEditingAttendance, setIsEditingAttendance] = useState(true);

  const onEdit = () => {
    setIsEditingAttendance(prevState => !prevState);
  };

  const onNotes = () => {
    Alert.alert('Pressed Notes');
  };

  const isUnassignedStatus = selectedStatus === AttandanceStatus.unassigned;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
      }}>
      <View style={styles.row}>
        <Image source={imageSrc} style={styles.userImage} />
        <View>
          <SubHeading>{name}</SubHeading>
          <Label>{description}</Label>
        </View>
      </View>
      <View style={styles.row}>
        {isEditingAttendance || isUnassignedStatus ? (
          <StatusList
            selectedStatus={selectedStatus}
            onNewStatus={(newStatus: AttandanceStatus) =>
              onNewStatus(newStatus, id)
            }
          />
        ) : (
          <StatusItem status={selectedStatus} isSlected />
        )}
        {!isUnassignedStatus && (
          <Pressable style={styles.editIcon} onPress={onEdit}>
            <Icon
              name={isEditingAttendance ? icons.checkCircled : icons.penOutline}
              size={16}
            />
          </Pressable>
        )}
        <Pressable style={styles.notes} onPress={onNotes}>
          <Icon name={icons.notes} size={14} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  notes: {
    padding: 7,
    borderRadius: 6,
    backgroundColor: 'rgba(120, 105, 230, 0.10)',
    marginLeft: 16,
  },
  editIcon: {
    marginLeft: 16,
  },
});

const attendanceItem = React.memo(AttendanceItem);
export {attendanceItem as AttendanceItem};
