export default function Home() {
  return (
    <div className={"home"}>
      <h1>Amici</h1>
      <p>This is a collection of various law school outlines.</p>
      <ul>
        <li>
          <a href="/contracts">Contracts</a>
        </li>
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
          the reader, user, or browser and website authors, contributors,
          contributing law firms, or committee members and their respective
          employers.
        </p>
        <p>
          The views expressed at, or through, this site are those of the
          author writing in their individual capacities only. All liability with respect to actions taken or not taken based on the contents of this site are hereby expressly disclaimed. The content on this posting is provided "as is;" no representations are made that the content is error-free.
        </p>
      </div>
    </div>
  );
}
