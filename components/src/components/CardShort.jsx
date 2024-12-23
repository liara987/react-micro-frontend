import React from "react";

const CardShort = (props) => {
  const { image, name } = props.data;
  return (
    <div>
      <img src={image} />
      <div>{name}</div>
    </div>
  );
};

export default CardShort;
