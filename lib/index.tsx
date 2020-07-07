import Icon from "./icon";
import ReactDOM from "react-dom";
import React from "react";

const fn = () => {
  console.log("222");
};

ReactDOM.render(
  <div>
    <Icon name="wechat" onClick={fn} />
  </div>,
  document.getElementById("root")
);
