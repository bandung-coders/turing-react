import React from "react";
import {useState} from "react";

const FileUtama = () => {
  let [tampil, setTampil] = useState(true);
  let [apa, setApa] = useState(true);

  return (
    <>
      { tampil ? <h1>RESTU GANTENG</h1> : <h1>BABAW</h1> }
    </>  
  );
};


export default FileUtama;