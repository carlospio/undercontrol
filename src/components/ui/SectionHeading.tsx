import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  emphasis,
  description,
  align = "left",
  tone = "dark",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = as;
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.18em]",
            isLight ? "text-gold" : "text-gold-dark"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[44px]",
          isLight ? "text-white" : "text-ink"
        )}
      >
        {title}
        {emphasis ? (
          <>
            {" "}
            <em className={cn("italic", isLight ? "text-gold" : "text-gold-dark")}>
              {emphasis}
            </em>
          </>
        ) : null}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            isLight ? "text-white/76" : "text-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
