import React from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {SubHeading} from '../../../../components/atoms/text/subHeading';
import {FontWeights} from '../../../../components/atoms/text';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {NavigationKeys} from '../../../../navigation/constants';

interface IContentList {
  title: string;
  SvgComponent: React.ReactElement;
  backgroundColor: string;
}

export const Content = ({data}: {data: IContentList[]}) => {
  const navigation = useNavigation();

  const onCard = (index: number, title: string) => {
    if (index === 1) {
      navigation.navigate(NavigationKeys.attendanceScreen);
    } else {
      Alert.alert(`Pressed ${title}`);
    }
  };

  const renderCard = ({item, index}: {item: IContentList; index: number}) => {
    const {title, SvgComponent, backgroundColor} = item;

    const dynamicStyles = getStyles(backgroundColor, index);

    return (
      <Pressable
        onPress={() => onCard(index, title)}
        style={dynamicStyles.contentContainer}>
        <SvgComponent />
        <SubHeading style={styles.contentTitle} fontWeight={FontWeights.bold}>
          {title}
        </SubHeading>
      </Pressable>
    );
  };

  const renderItemSeperator = () => <View style={styles.seperator} />;

  return (
    <FlatList
      data={data}
      renderItem={renderCard}
      numColumns={2}
      style={styles.container}
      ItemSeparatorComponent={renderItemSeperator}
    />
  );
};

const getStyles = (bgColor: string, index: number) =>
  StyleSheet.create({
    contentContainer: {
      backgroundColor: bgColor,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 32,
      flex: 1,
      ...(index % 2 === 0 ? {marginRight: 15} : {}),
    },
  });

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
  },
  seperator: {
    height: 15,
  },
  contentTitle: {
    marginTop: 20,
  },
});
