interface ITypography {
  fontSize: number;
  lineHeight: number;
}
export interface ITheme {
  palette: {
    activeTint: string;
    themeBackgroundFaded: string;
    screenBackground: string;
  };
  typography: {
    label: ITypography;
    subHeading: ITypography;
    heading: ITypography;
    title: ITypography;
  };
}
