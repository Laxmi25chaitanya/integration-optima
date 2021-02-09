import React from "react";

const Label = (props) => {
  return (
    <div data-test="label-component">
      <p data-test="label-name">{props.lName}</p>
      <input
        data-test="input-component"
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Label;
