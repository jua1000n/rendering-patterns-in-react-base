interface TabProps {
  label: string;
  children: React.ReactNode;
}
const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  );
};

export default Tab;
