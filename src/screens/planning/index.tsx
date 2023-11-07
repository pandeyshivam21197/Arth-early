import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header} from './components/header';
import {theme} from '../../styles/theme';
import {Content} from './components/content';
import {ImageSources} from '../../assets/images';

export const Planning: FC<any> = (): React.ReactElement => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Content
        data={[
          {
            title: 'Calender',
            SvgComponent: ImageSources.calenderSVG,
            backgroundColor: theme.palette.calenderBackground,
          },
          {
            title: 'Attendance',
            SvgComponent: ImageSources.attendanceSVG,
            backgroundColor: theme.palette.attendanceBackground,
          },
          {
            title: 'General Insights',
            SvgComponent: ImageSources.generalInsightSVG,
            backgroundColor: theme.palette.insightsBackground,
          },
          {
            title: 'Announcements',
            SvgComponent: ImageSources.announcementSVG,
            backgroundColor: theme.palette.announcementBackground,
          },
          {
            title: 'Messages',
            SvgComponent: ImageSources.messagesSVG,
            backgroundColor: theme.palette.messagesBackground,
          },
          {
            title: 'Entry/Disposal',
            SvgComponent: ImageSources.entryDisperalSVG,
            backgroundColor: theme.palette.entryDispersalBackground,
          },
        ]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.palette.screenBackground,
  },
});
