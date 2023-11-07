import {FlatList, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {AttendanceItem} from './attendanceItem';
import {ImageSources} from '../../../../assets/images';
import React, {useState} from 'react';
import {AttandanceStatus} from './constants';
import {Heading} from '../../../../components/atoms/text/heading';

export interface IStudentAttendace {
  selectedStatus: AttandanceStatus;
  imageSrc: ImageSourcePropType;
  name: string;
  description: string;
  id: number;
}

const data = [
  {
    name: 'shivam',
    description: 'pandey',
    id: 1,
    imageSrc: ImageSources.userPlaceholder,
    selectedStatus: AttandanceStatus.unassigned,
  },
  {
    name: 'kamal',
    description: 'pandey',
    id: 2,
    imageSrc: ImageSources.userPlaceholder,
    selectedStatus: AttandanceStatus.unassigned,
  },
  {
    name: 'RK',
    description: 'pandey',
    id: 3,
    imageSrc: ImageSources.userPlaceholder,
    selectedStatus: AttandanceStatus.unassigned,
  },
  {
    name: 'Rama',
    description: 'pandey',
    id: 4,
    imageSrc: ImageSources.userPlaceholder,
    selectedStatus: AttandanceStatus.unassigned,
  },
  {
    name: 'Arvind',
    description: 'pandey',
    id: 5,
    imageSrc: ImageSources.userPlaceholder,
    selectedStatus: AttandanceStatus.unassigned,
  },
  {
    name: 'Akash',
    description: 'pandey',
    id: 6,
    imageSrc: ImageSources.userPlaceholder,
    selectedStatus: AttandanceStatus.unassigned,
  },
  {
    name: 'Anshul',
    description: 'pandey',
    id: 7,
    imageSrc: ImageSources.userPlaceholder,
    selectedStatus: AttandanceStatus.unassigned,
  },
  {
    name: 'Aditya',
    description: 'pandey',
    id: 8,
    imageSrc: ImageSources.userPlaceholder,
    selectedStatus: AttandanceStatus.unassigned,
  },
];

export const AttandanceList = () => {
  const [studentsAttendaces, setStudentAttandaces] = useState(data);

  const onNewStatus = (newStatus: AttandanceStatus, id: number) => {
    setStudentAttandaces(prevState => {
      const newAttendace = [...prevState];

      const changedAttandaceIndex = newAttendace.findIndex(att => {
        return att.id === id;
      });

      if (changedAttandaceIndex > -1) {
        newAttendace[changedAttandaceIndex] = {
          ...newAttendace[changedAttandaceIndex],
          selectedStatus: newStatus,
        };
      }

      return newAttendace;
    });
  };

  const renderItem = ({item}: {item: IStudentAttendace}) => {
    return <AttendanceItem {...item} onNewStatus={onNewStatus} />;
  };

  const renderItemSeparator = () => <View style={styles.separater} />;

  const renderKeyExtractor = (item: IStudentAttendace) => item.id;

  return (
    <View>
      <View>
        <Heading>{`All Students: ${studentsAttendaces.length}`}</Heading>
      </View>
      <FlatList
        data={studentsAttendaces}
        contentContainerStyle={styles.content}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        keyExtractor={renderKeyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separater: {
    height: 39,
  },
  content: {paddingVertical: 20},
});
