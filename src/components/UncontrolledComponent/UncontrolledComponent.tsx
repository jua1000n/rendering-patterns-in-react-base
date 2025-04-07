import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (inputRef.current) {
      alert(`Nuevo producto en el carrito: ${inputRef.current.value}`);
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Ingrese el producto" />
      <button onClick={handleSubmit}>Anadir al carrito</button>
    </div>
  );
};
