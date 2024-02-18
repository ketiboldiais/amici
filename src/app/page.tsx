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
];

export default function Home() {
  return (
    <div className={"home"}>
      <h1>Amici</h1>
      <p>This is a repository of my outlines from law school.</p>
      <ul>
        {outlineLinks.map((link) => (
          <li key={link.path}>
            <Link href={'/outlines'+link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className={"disclaimer"}>
        <p>
          The information provided on this website does not, and is not intended
          to, constitute legal advice. All information, content, and materials
          available on this site are for general informational purposes only.
          Information on this website may not constitute the most up-to-date
          legal or other information.
        </p>
        <p>
          You should contact your attorney to obtain advice with respect to any
          particular legal matter. No reader, user, or browser of this site
          should act or refrain from acting on the basis of information on this
          site without first seeking legal advice from counsel in the relevant
          jurisdiction. Only your individual attorney can provide assurances
          that the information contained herein – and your interpretation of it
          – is applicable or appropriate to your particular situation. Use of,
          and access to, this website or any of the links or resources contained
          within the site do not create an attorney-client relationship between
          the reader, user, or browser and website author.
        </p>
        <p>
          The views expressed at, or through, this site are those of the author
          writing in their individual capacities only. All liability with
          respect to actions taken or not taken based on the contents of this
          site are hereby expressly disclaimed. The content on this posting is
          provided "as is;" no representations are made that the content is
          error-free.
        </p>
      </div>
    </div>
  );
}
