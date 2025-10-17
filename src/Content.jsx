export default function Content({ slug, title, content }) {
  return (
    <div className="content">
        <section id={slug}>
            <h1>
                <a href={`#${slug}`}>{title}</a>
            </h1>
            <p dangerouslySetInnerHTML={{__html:content}}></p>
        </section>
    </div>
  );
}
