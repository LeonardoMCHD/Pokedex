import React, { useState, useEffect } from "react";
import BoxContents from "./BoxContents";

export default function ListBox(props) {
  const [ListData, setListData] = useState(props.listData || []);

  useEffect(() => {
    setListData(props.listData);
  }, [props.listData]);

  return (
    <div>
      {ListData.length > 0
      ? ListData.map((item, index) => (
        <BoxContents key={index} title={item.name} game={item.url} />
      ))
      :"Nenhum Dado"}
    </div>
  );
}
