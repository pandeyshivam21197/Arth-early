import {theme} from '../../../../styles/theme';
import {AttandanceStatus} from './constants';

export const getAttendanceStatusColor = (status: AttandanceStatus) => {
  switch (status) {
    case AttandanceStatus.present:
      return theme.palette.presentStatus;
    case AttandanceStatus.absent:
      return theme.palette.absentStatus;
    case AttandanceStatus.leave:
      return theme.palette.leaveStatus;
    default:
      return theme.palette.defaultStatus;
  }
};

export const getAttendanceStatusMarker = (status: AttandanceStatus) => {
  switch (status) {
    case AttandanceStatus.present:
      return 'P';
    case AttandanceStatus.absent:
      return 'A';
    case AttandanceStatus.leave:
      return 'L';
    default:
      return 'E';
  }
};
