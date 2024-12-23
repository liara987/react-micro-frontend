import React from "react";

const CardDetails = (props) => {
  const { image, name, cuisine, rating } = props.data;

  return (
    <div>
      <img src={image} alt={name} />
      <div>Items at 200 Rs.</div>
      <div>{name}</div>
      <div>Coisine: {cuisine}</div>
      <div>Ratings: {rating}</div>
    </div>
  );
};

export default CardDetails;
