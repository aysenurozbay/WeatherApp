import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {colors} from '../colors';

interface ISunriseIconProps {
  size: number;
  fill: string;
}

const SunriseIcon = ({
  size,
  fill = colors.black,
  ...props
}: ISunriseIconProps) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 1024 1024"
      fill={fill}
      {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          fill={fill}
          d="M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64m129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32m407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0m-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248"
        />
      </G>
    </Svg>
  );
};
export default SunriseIcon;
