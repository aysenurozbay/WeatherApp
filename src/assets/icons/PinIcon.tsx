import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../colors';

interface IPinIconProps {
  size: number;
  fill: string;
}

const PinIcon = ({size, fill = colors.black, ...props}: IPinIconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill={fill} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.003 11.73q.668 0 1.14-.475q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472M12 21.019q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814"
      />
    </Svg>
  );
};
export default PinIcon;
