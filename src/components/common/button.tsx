export function Button({
  label,
  cancelled,
  onClick,
}: {
  label: string | number;
  cancelled?: boolean;
  onClick?: () => void | Promise<void>;
}) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`p-0.5 flex justify-center items-center bg-gradient-to-r ${
          cancelled
            ? "text-red-500 from-red-500 to-orange-400 hover:text-black"
            : "text-white from-sky-500 to-pink-400"
        } 'from-sky-500 to-pink-400 rounded cursor-pointer`}
      >
        <div
          onClick={onClick}
          className="rounded px-6 py-2 bg-black w-full h-full hover:bg-transparent hover:font-bold"
        >
          {label}
        </div>
      </div>
    </div>
  );
}
