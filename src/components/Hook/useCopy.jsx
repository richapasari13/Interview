import { useState } from "react";

const useCopy = () => {
  const [copiedText, setCopiedText] = useState("");

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.log("Not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (e) {
      console.log(e);
    }
  };

  return { copy, copiedText };
};

const CopyComponent = () => {
  const { copy, copiedText } = useCopy();

  return (
    <button onClick={() => copy("Richa")}>
      Copy to clipboard: {copiedText}
    </button>
  );
};

export default CopyComponent;
