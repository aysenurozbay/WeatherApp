import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {colors} from '../colors';

interface IHumidityIconProps {
  size: number;
  fill: string;
}

const HumidityIcon = ({
  size,
  fill = colors.black,
  ...props
}: IHumidityIconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill={fill} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          fill={fill}
          d="M12 2c-5.33 4.55-8 8.48-8 11.8c0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8M7.83 14c.37 0 .67.26.74.62c.41 2.22 2.28 2.98 3.64 2.87c.43-.02.79.32.79.75c0 .4-.32.73-.72.75c-2.13.13-4.62-1.09-5.19-4.12a.75.75 0 0 1 .74-.87"
        />
      </G>
    </Svg>
  );
};
export default HumidityIcon;
