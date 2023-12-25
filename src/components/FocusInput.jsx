import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="mt-[100px]">
      <h2>FocusInput</h2>
      <input type="text" placeholder="Insert Name" ref={inputRef} />
    </div>
  );
}

export default FocusInput;
