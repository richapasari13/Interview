import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Accordion
      label={"Topic 1"}
      content="Topic one content"
      isOpen={isOpen}
      onChange={handleToggleAccordion}
    />
  );
};

export default AccordionExample;
