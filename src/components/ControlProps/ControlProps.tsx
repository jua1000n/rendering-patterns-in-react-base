import { useState } from "react";

type ToggleProps = {
  isToggled?: boolean;
  onToggle?: (value: boolean) => void;
};

export const Toggle: React.FC<ToggleProps> = ({
  isToggled = false,
  onToggle,
}) => {
  const [stateToggle, setstateToggle] = useState<boolean>(isToggled);

  const toggle = () => {
    const newToggle = !stateToggle;
    setstateToggle(newToggle);

    if (onToggle) {
      onToggle(newToggle);
    }
  };

  return <button onClick={toggle}>{stateToggle ? "ON" : "OFF"}</button>;
};

export const ParentComponent = () => {
  const [stateToggle, setStateToggle] = useState(false);

  return (
    <div>
      Toggle is {stateToggle ? "ON" : "OFF"}
      <Toggle isToggled={stateToggle} onToggle={setStateToggle} />
    </div>
  );
};
