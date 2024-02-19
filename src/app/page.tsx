import Link from "next/link";

type LinkObj = { path: string; label: string };
const outlineLinks: LinkObj[] = [
  { path: "/civil-procedure", label: "Civil Procedure" },
  { path: "/constitutional-law", label: "Constitutional Law" },
  { path: "/contracts", label: "Contracts" },
  { path: "/criminal-law", label: "Criminal Law" },
  { path: "/federal-courts", label: "Federal Courts" },
  { path: "/federal-income-tax", label: "Federal Income Tax" },
  { path: "/real-property", label: "Real Property" },
  { path: "/torts", label: "Torts" },
];

export default function Home() {
  return (
    <div className={"home"}>
      <h1>Amici</h1>
      <p>This is a repository of my outlines from law school.</p>
      <ul>
        {outlineLinks.map((link) => (
          <li key={link.path}>
            <Link href={"/outlines" + link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className={"disclaimer"}>
        <p>
          <b>Disclaimer.</b>{" "}
          This website’s content does not, and is not intended to, constitute
          legal advice. All this website’s contents are for general
          informational purposes only. This website’s content may not be the
          most up-to-date.
        </p>
        <p>
          Contact your attorney to obtain advice on any particular legal matter.
          No user of this website should act or refrain from acting based on
          this website’s content without first seeking legal advice from counsel
          in the relevant jurisdiction. Only your individual attorney can assure
          you that this website’s content – and your interpretation of it –
          applies to your particular situation. Using or accessing this website
          or any of its links or resources do not create an attorney-client
          relationship between the user and website author.
        </p>
        <p>
          The views expressed on this website are only the author’s. All
          liability with respect to actions taken or not taken based on this
          site’s content are expressly disclaimed. This website’s content is
          provided "as is." No representations are made that the content is
          error-free.
        </p>
      </div>
    </div>
  );
}
