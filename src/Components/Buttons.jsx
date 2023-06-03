import React from "react";

import Square from "./Square";

export default function Buttons() {
  return (
    <div>
      <div>
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
        <div className="board-row">
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </div>
      </div>
    </div>
  );
}
