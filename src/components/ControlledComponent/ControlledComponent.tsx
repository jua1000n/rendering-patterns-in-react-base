import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese el codigo del cupon"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <p>
        Cupon de descuento <b>{value}</b>
      </p>
    </div>
  );
};
