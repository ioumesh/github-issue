const Label = ({ label }) => {
  const color = label.color;
  const whiteTexts = [
    "Type: Bug",
    "React Core Team",
    "React 19",
    "Status: New",
    "dependencies",
    "Component: Fast Refresh",
  ];
  let textColor = "black";
  whiteTexts.forEach((text) => {
    if (text === label.name) {
      textColor = "white";
      return;
    }
  });
  return (
    <span
      style={{
        borderRadius: "20px",
        fontSize: "13px",
        marginLeft: "15px",
        padding: "2px 7px",
        background: `#${color}`,
        color: `${textColor}`,
      }}
    >
      {label.name}
    </span>
  );
};

export default Label;
