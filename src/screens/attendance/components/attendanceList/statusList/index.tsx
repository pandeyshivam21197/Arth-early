import React, {FC, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {IStatusItem, StatusItem} from './statusItem';
import {AttandanceStatus} from '../constants';

interface IStatusListProps {
  selectedStatus?: AttandanceStatus;
  onNewStatus: (newStatus: AttandanceStatus) => void;
}

export const StatusList: FC<IStatusListProps> = ({
  selectedStatus,
  onNewStatus,
}) => {
  const [attandanceData, setAttandaceData] = useState<IStatusItem[]>([
    {status: AttandanceStatus.present, isSlected: false, id: 1},
    {status: AttandanceStatus.absent, isSlected: false, id: 2},
    {status: AttandanceStatus.empty, isSlected: false, id: 3},
    {status: AttandanceStatus.leave, isSlected: false, id: 4},
  ]);

  const onNewSelection = (newStatus: AttandanceStatus) => {
    setAttandaceData(prevState => {
      const filteredData: IStatusItem = prevState.map((att: IStatusItem) => {
        if (att.isSlected) {
          att.isSlected = false;
        }

        if (att.status === newStatus) {
          att.isSlected = true;
        }

        return att;
      });

      return filteredData;
    });

    onNewStatus(newStatus);
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <StatusItem
        status={item.status}
        isSlected={selectedStatus && item.status === selectedStatus}
        onPress={onNewSelection}
      />
    );
  };

  const renderItemSeparator = () => <View style={styles.separator} />;
  const renderKeyExtractor = (item: IStatusItem, index: number) =>
    item.id || index;

  return (
    <FlatList
      data={attandanceData}
      horizontal
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
      keyExtractor={renderKeyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    width: 16,
  },
});
