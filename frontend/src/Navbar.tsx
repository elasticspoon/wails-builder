export function Navbar({
  updateProfile,
}: {
  updateProfile: () => Promise<void>;
}) {
  return (
    <button className="btn" onClick={updateProfile}>
      Save
    </button>
  );
}
