import Icon from "./icon";
import ReactDOM from "react-dom";
import React from "react";

const fn: React.MouseEventHandler = (e) => {
  console.log(e);
  console.log(e.target);
  console.log((e.target as HTMLDivElement).style);
};

ReactDOM.render(
  <div>
    <Icon name="wechat" onClick={fn} />
  </div>,
  document.getElementById("root")
);
