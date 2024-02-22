import type { MDXComponents } from "mdx/types";
import { ReactNode } from "react";

const TOC = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"toc"}>
      {children}
    </div>
  );
};

const Brief = (
  { children, title }: { children: ReactNode; title?: ReactNode },
) => {
  return (
    <details className={"brief"}>
      {title && <summary className={"brief-title"}>{title}</summary>}
      {children}
    </details>
  );
};

export function useMDXComponents(
  components: MDXComponents,
): MDXComponents {
  return {
    ...components,
    Brief,
    TOC,
  };
}
