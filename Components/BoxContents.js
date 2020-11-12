import React from "react";

export default function BoxContents(props) {
  return (
    <div>
      <h1>{props.title || "Meu titulo"}</h1>
      <h5>{props.game || "Não Reconhecido"}</h5>
    </div>
  );
}
