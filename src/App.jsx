import React, { useState } from "react";
import Section from "./components/section";

const FileUtama = () => {
  const [tampil, setTampil] = useState(false);

  const showHide = () => {
    setTampil(!tampil);
  }

  return (
    <div>

      {
        tampil &&
        <div className="sidebar">
          INI SIDEBAR
        </div>
      }

      <button onClick={showHide} className="jarak"> KLIK </button>


      <h1> WELCOME </h1>

      <Section title="Nama Lengkap">
        <input type="text" />
      </Section>

    </div>
  );
};

export default FileUtama;