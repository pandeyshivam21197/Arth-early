import {ITheme} from './interface';

export const theme: ITheme = {
  palette: {
    activeTint: '#7869E6',
    screenBackground: '#ffff',
    themeBackgroundFaded: 'rgba(120, 105, 230, 0.10)',
    calenderBackground: '#FBEBEE',
    attendanceBackground: '#EAEBFD',
    insightsBackground: '#E7F3C3',
    announcementBackground: '#FEE1D1',
    messagesBackground: '#F1E2F7',
    entryDispersalBackground: '#FFEBB9',
    borderColor: '#D0D0D0',
    presentStatus: '#00B1B1',
    defaultStatus: '#DBDBDB',
    absentStatus: '#FA8072',
    leaveStatus: '#FFD361',
  },
  typography: {
    label: {
      fontSize: 10,
      lineHeight: 12,
    },
    subHeading: {
      fontSize: 15,
      lineHeight: 17,
    },
    heading: {
      fontSize: 20,
      lineHeight: 22,
    },
    title: {
      fontSize: 24,
      lineHeight: 26,
    },
  },
};
