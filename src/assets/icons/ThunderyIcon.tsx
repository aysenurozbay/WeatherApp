import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {colors} from '../colors';

interface IThunderyIconProps {
  size: number;
  fill: string;
}

const ThunderyIcon = ({
  size,
  fill = colors.black,
  ...props
}: IThunderyIconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill={fill} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          fill={fill}
          d="m13.365 22.677l1.343-1.506l-1.062-.54q-.367-.187-.448-.566q-.08-.378.187-.677l1.5-1.711q.067-.079.164-.128t.201-.049q.323 0 .46.287q.138.286-.075.536l-1.343 1.506l1.062.54q.367.187.448.566q.08.378-.187.677l-1.5 1.711q-.067.079-.164.128t-.201.049q-.323 0-.46-.287q-.138-.286.075-.536m-6 0l1.343-1.506l-1.062-.54q-.367-.187-.448-.566q-.08-.378.187-.677l1.5-1.711q.067-.079.164-.128t.201-.049q.323 0 .46.287q.138.286-.075.536L8.292 19.83l1.062.54q.367.187.448.566q.08.378-.187.677l-1.5 1.711q-.067.079-.164.128t-.201.049q-.323 0-.46-.287q-.138-.286.075-.536M7.5 15.5q-2.083 0-3.541-1.459Q2.5 12.583 2.5 10.5q0-1.94 1.308-3.356Q5.115 5.73 7.083 5.512q.742-1.406 2.033-2.21Q10.408 2.5 12 2.5q2.154 0 3.701 1.428q1.547 1.428 1.8 3.559q1.841.111 2.92 1.28Q21.5 9.937 21.5 11.5q0 1.663-1.168 2.832Q19.163 15.5 17.5 15.5zm0-1h10q1.242 0 2.121-.879T20.5 11.5q0-1.242-.879-2.121T17.5 8.5h-1V8q0-1.862-1.32-3.18Q13.863 3.5 12 3.5q-1.354 0-2.466.737q-1.113.736-1.67 1.97l-.116.293H7.45q-1.637.05-2.793 1.207Q3.5 8.863 3.5 10.5q0 1.662 1.17 2.83Q5.837 14.5 7.5 14.5M12 9"
        />
      </G>
    </Svg>
  );
};
export default ThunderyIcon;
