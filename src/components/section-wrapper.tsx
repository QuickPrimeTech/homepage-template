import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-20", className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
