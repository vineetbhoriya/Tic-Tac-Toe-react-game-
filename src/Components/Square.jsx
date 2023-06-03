import React from "react";
import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);

  function handlerOnCLike() {
    setValue("X");
  }
  return <button className='square' onClick={handlerOnCLike}>{value}</button>;
}
