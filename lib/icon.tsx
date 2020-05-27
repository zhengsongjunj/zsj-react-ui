import React from "react";
import weChat from "./icons/wechat.svg";
console.log(weChat);
interface IconProps {
  name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return <span>{props.name}</span>;
};

export default Icon;
