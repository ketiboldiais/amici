import type { MDXComponents } from "mdx/types";
import { ReactNode } from "react";

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
  };
}
