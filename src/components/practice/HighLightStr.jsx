import React from "react";

const HighLightStr = () => {
  const str = "Ultimate JavaScript / FrontEnd Guide";
  const words = ["Front", "End", "JavaScript"];

  const highLightString = (str, words) => {
    let highlightedElements = [];
    let currentIndex = 0;

    // Sort words by length in descending order to handle overlapping matches correctly
    const sortedWords = [...words].sort((a, b) => b.length - a.length);

    while (currentIndex < str.length) {
      let matchedWord = null;
      let matchIndex = -1;

      // Find the first word that matches at the current index
      for (let word of sortedWords) {
        console.log("currentIndex", currentIndex);
        const index = str.indexOf(word, currentIndex);
        // console.log("index", index);
        if (index === currentIndex) {
          matchedWord = word;
          matchIndex = index;
          break;
        }
      }

      if (matchedWord) {
        // Push the highlighted word
        highlightedElements.push(
          <span key={currentIndex} style={{ backgroundColor: "yellow" }}>
            {matchedWord}
          </span>
        );
        currentIndex += matchedWord.length;
      } else {
        // Push non-highlighted character
        highlightedElements.push(str[currentIndex]);
        currentIndex += 1;
      }
    }

    return highlightedElements;
  };

  return <strong>{highLightString(str, words)}</strong>;
};

export default HighLightStr;
