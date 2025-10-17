function scrollToSection(id, offset = 0) {
    const el = document.getElementById(id);
    if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
    }
}

export default function ScrollLink({ slug, children, offset = 0 }) {
  const handleClick = (e) => {
    return
    e.preventDefault(); // prevent default jump
    scrollToSection(slug, offset);
    history.replaceState(null, "", `#${slug}`); // optional: update URL hash
  };

  return (
    <a href={`#${slug}`} onClick={handleClick}>
      {children}
    </a>
  );
}