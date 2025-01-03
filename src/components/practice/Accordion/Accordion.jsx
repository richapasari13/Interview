import React from "react";

const Accordion = ({
  label = "Topic1",
  onChange,
  isOpen,
  content = "content",
}) => {
  return (
    <>
      <div onClick={onChange}>{label}</div>
      {isOpen && <div>{content}</div>}
    </>
  );
};

export default Accordion;
