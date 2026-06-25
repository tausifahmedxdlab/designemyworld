import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon = true
}) {
  const styles = {
    primary:
      "bg-accent text-black hover:scale-105",

    secondary:
      "border border-border text-white hover:border-accent",

    ghost:
      "text-accent hover:bg-accent/10"
  };

  const classes = `
    inline-flex
    items-center
    gap-2
    px-6
    py-3
    rounded-full
    transition-all
    duration-300
    font-medium
    ${styles[variant]}
  `;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <ArrowRight size={18} />}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
}