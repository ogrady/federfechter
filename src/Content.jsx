export default function Content({ slug, title, content }) {
  return (
    <div className="content">
        <a href={`#${slug}`}>
            <h1>{title}</h1>
        </a>
        <p dangerouslySetInnerHTML={{__html:content}}></p>
    </div>
  );
}
