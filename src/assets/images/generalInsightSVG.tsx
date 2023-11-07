import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={48}
    fill="none"
    {...props}>
    <Path fill="#37474F" d="M26.19 0h-2.38v45h2.38V0Z" />
    <Path
      fill="#37474F"
      d="m28.846 34.746-1.683-1.684L15.21 45.014l1.683 1.683 11.952-11.951Z"
    />
    <Path
      fill="#37474F"
      d="m33.148 46.712 1.684-1.684L22.88 33.077l-1.683 1.683 11.951 11.952Z"
    />
    <Path fill="#fff" d="M48.81 3.571H1.19v33.334h47.62V3.57Z" />
    <Path
      fill="#8FBC07"
      d="M50 2.381H0v4.762h50V2.38ZM50 35.714H0v2.381h50v-2.38ZM33.928 47.619a1.786 1.786 0 1 0 0-3.571 1.786 1.786 0 0 0 0 3.571ZM16.071 47.619a1.786 1.786 0 1 0 0-3.571 1.786 1.786 0 0 0 0 3.571ZM25.071 47.619a1.786 1.786 0 1 0 0-3.571 1.786 1.786 0 0 0 0 3.571Z"
    />
    <Path
      fill="#E00065"
      d="M34.405 16.548 27.38 23.69l-7.143-7.142-9.643 9.523 2.62 2.62 7.023-7.143 7.143 7.142 9.643-9.523-2.62-2.62Z"
    />
    <Path fill="#E00065" d="m39.286 22.62-8.334-8.334h8.334v8.333Z" />
  </Svg>
);
export default SvgComponent;
