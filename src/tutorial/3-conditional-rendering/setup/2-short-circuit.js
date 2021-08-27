import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <React.Fragment>
      <h1>{text || "Rohit Manohar"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle Error
      </button>
      {!text && <h1>Hello World</h1>}
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>Their is an error...</p>
      ) : (
        <div>
          <h2>their is no error</h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShortCircuit;
