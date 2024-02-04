import { ReactNode } from "react";
import Header from "./Header";

export default function MdxLayout({ children }: { children: ReactNode }) {
  return (
    <>
			<Header/>
      <article>
        {children}
      </article>
    </>
  );
}
