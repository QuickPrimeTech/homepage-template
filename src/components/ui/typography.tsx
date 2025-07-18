import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function H1({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-snug font-serif",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug font-serif",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 font-serif",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn("text-lg sm:text-xl font-medium text-gray-800", className)}
      {...props}
    >
      {children}
    </h4>
  );
}

export function Paragraph({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-base sm:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Description({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-base sm:text-lg text-gray-600 leading-relaxed max-w-prose mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mb-12 space-y-1 text-center max-w-xl mx-auto px-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
