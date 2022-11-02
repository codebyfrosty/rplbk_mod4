import { useState, useEffect, useRef } from "react";

export default function Ref() {
  const [, setClick] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleClick = () => {
    setClick(count.current);
  };

  return (
    <>
      <div className="Main">
        <h1>Counter Menggunakan ref</h1>
        <button style={{ height: 50, width: 150 }} onClick={handleClick}>
          Tambah
        </button>
        <h1 style={{ marginBottom: 0 }}>Hitungan:</h1>
        <h1 style={{ margin: 0 }}>{count.current}</h1>
      </div>
    </>
  );
}