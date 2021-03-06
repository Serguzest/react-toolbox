import * as React from "react";
import ReactToolbox from "../index";

interface FontIconProps extends ReactToolbox.Props {
  /**
   * Children to pass through the component.
   */
  children?: React.ReactNode;
  /**
   * The key string for the icon you want be displayed.
   */
  value?: React.ReactNode | string;
}

export class FontIcon extends React.Component<FontIconProps, {}> { }

export default FontIcon;
