export default function LoginButton({
  children,
  className,
  variant = "default",
}) {
  const variants = {
    default: "py-2 px-8 border-1",
    primary: "bg-green-400 text-white",
  };

  const baseStyle = `py-2 px-8 rounded-xl hover:cursor-pointer`;

  return (
    <button className={`${className} ${variants[variant]} ${baseStyle}`}>
      {children}
    </button>
  );
}
