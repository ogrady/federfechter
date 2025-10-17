function scrollToSection(id, offset = 0) {
    const el = document.getElementById(id);
    if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
    }
}

export default function ScrollLink({ slug, children }) {
  return (
    <a href={`#${slug}`}>
      {children}
    </a>
  );
}