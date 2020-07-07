import React from "react";
import "./importIcons.js";
import "./icon.scss";
interface IconProps {
  name: string;
  // onClick: React.MouseEventHandler<SVGElement>
  onClick: () => void;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="zsj-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;
