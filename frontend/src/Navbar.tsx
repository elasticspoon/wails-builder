import { GeneratePDF } from "../wailsjs/go/profile/Generator";

export function Navbar({
  updateProfile: genPDF,
  render: generateHtml,
}: {
  updateProfile: () => Promise<void>;
  render: () => string;
}) {
  return (
    <button className="btn" onClick={() => GeneratePDF(generateHtml())}>
      Save and Export to PDF
    </button>
  );
}
