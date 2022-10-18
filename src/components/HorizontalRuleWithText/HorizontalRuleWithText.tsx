import React from "react";

import "./HorizontalRuleWithText.scss";

interface IProps {
  text: string;
}

const HorizontalRuleWithText = (props: IProps) => {
  return (
    <div className="horizontalRuleWithText__wrapper">
      <span className="horizontalRuleWithText__text">{props.text}</span>
    </div>
  );
};

export default HorizontalRuleWithText;
