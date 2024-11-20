// const TextLimit = (text, wordLimit ) => {
//         const words = text.split(" ");
//         if (words.length > wordLimit) {
//           return words.slice(0, wordLimit).join(" ") + " ...";
//         }
//         return text;

// }

// export default TextLimit
import React from "react";

const TextLimit = ({ text, wordLimit }) => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };

  return <span>{truncateText(text, wordLimit)}</span>;
};

export default TextLimit;
