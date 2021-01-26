import React from "react";

const Draggable = () => {
  const onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
    console.log(evt);
  };
  return (
    <div draggable onDragStart={onDragStart}>
      Drag me!
    </div>
  );
};

export default Draggable;
