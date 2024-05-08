export function Text({
  label,
  typography,
}: {
  label: string | number;
  typography: "enormous" | "medium" | "small";
}) {
  const fontSize = () => {
    if (typography === "enormous") return "text-4xl";
    if (typography === "medium") return "text-2xl";
    if (typography === "small") return "text-lg";
  };
  return (
    <span
      className={`${fontSize()} font-bold text-transparent bg-gradient-to-r from-sky-500 to-pink-400 bg-clip-text`}
    >
      {label}
    </span>
  );
}
