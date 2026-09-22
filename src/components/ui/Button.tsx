import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline-dark" | "light" | "outline-light";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white font-bold hover:bg-ink-2 shadow-none",
  "outline-dark":
    "bg-transparent text-ink font-bold shadow-[0_14px_30px_rgba(216,173,24,0.2)] hover:shadow-[0_14px_30px_rgba(216,173,24,0.35)]",
  light:
    "bg-lavender text-ink font-bold hover:bg-[#e3dce8]",
  "outline-light":
    "bg-transparent text-white font-bold border border-white/30 hover:bg-white/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-colors duration-200 whitespace-nowrap";

interface ButtonLinkProps extends BaseProps {
  href: string;
  onClick?: never;
  external?: boolean;
}

interface ButtonButtonProps extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button(props: ButtonLinkProps | ButtonButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
