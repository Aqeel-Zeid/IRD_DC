import React from "react";

export default function ButtonMain({ ClassName, Text, OnClickMethod }) {
  return (
    <div>
      <button className={ClassName} onClick={OnClickMethod}>
        {Text}
      </button>
    </div>
  );
}
