export default function Footer() {
  return (
    <footer className="footer">
      <p>All security research and testing are performed only under legal authorization, responsible disclosure programs, and controlled lab environments.</p>
      <span>© {new Date().getFullYear()} Offensive Security Portfolio</span>
    </footer>
  );
}
