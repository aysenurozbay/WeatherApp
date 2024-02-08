import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {colors} from '../colors';

interface IWindIconProps {
  size: number;
  fill: string;
}

const WindIcon = ({size, fill = colors.black, ...props}: IWindIconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill={fill} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <Path
          fill={fill}
          d="M10.5 4.5a1 1 0 0 0-.917.6a1.5 1.5 0 1 1-2.75-1.2A4 4 0 1 1 10.5 9.5H5a1.5 1.5 0 1 1 0-3h5.5a1 1 0 1 0 0-2m8 4a1 1 0 0 0-.917.6a1.5 1.5 0 0 1-2.75-1.2a4 4 0 1 1 3.667 5.6H3a1.5 1.5 0 0 1 0-3h15.5a1 1 0 1 0 0-2m-4.917 10.4a1 1 0 1 0 .917-1.4H8a1.5 1.5 0 0 1 0-3h6.5a4 4 0 1 1-3.666 5.6a1.5 1.5 0 1 1 2.749-1.2"
        />
      </G>
    </Svg>
  );
};
export default WindIcon;
