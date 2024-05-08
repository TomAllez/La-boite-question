export function VSpacer({ size }: { size?: number }) {
  return <div className={`${size ? `h-${size}` : "h-12"}`}></div>;
}

export function HSpacer({ size }: { size?: number }) {
  return <div className={`${size ? `w-${size}` : "w-12"}`}></div>;
}
