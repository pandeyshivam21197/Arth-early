interface ITypography {
  fontSize: number;
  lineHeight: number;
}
export interface ITheme {
  palette: {
    activeTint: string;
    themeBackgroundFaded: string;
    screenBackground: string;
    calenderBackground: string;
    attendanceBackground: string;
    insightsBackground: string;
    announcementBackground: string;
    messagesBackground: string;
    entryDispersalBackground: string;
    borderColor: string;
    presentStatus: string;
    defaultStatus: string;
    absentStatus: string;
    leaveStatus: string;
  };
  typography: {
    label: ITypography;
    subHeading: ITypography;
    heading: ITypography;
    title: ITypography;
  };
}
