import { GeneratePDF } from "../wailsjs/go/profile/Generator";

export function Navbar({
  render: generateHtml,
}: {
  updateProfile: () => Promise<void>;
  render: () => string;
}) {
  function genPDF() {
    const render = generateHtml();
    GeneratePDF(render)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <button className="btn" onClick={genPDF}>
      Save and Export to PDF
    </button>
  );
}
