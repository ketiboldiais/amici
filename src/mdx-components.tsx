import type { MDXComponents } from "mdx/types";
import { ReactNode } from "react";

const Toc = ({ children }: { children: ReactNode }) => {
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
    <div className={"brief"}>
      {title && <span className={"brief-title"}>{title}</span>}
      {children}
    </div>
  );
};

export function useMDXComponents(
  components: MDXComponents,
): MDXComponents {
  return {
    ...components,
    Brief,
    Toc,
  };
}
