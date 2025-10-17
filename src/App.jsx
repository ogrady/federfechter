import * as marked from 'marked'
import { useState } from "react";
import "./App.css";
import ImageCarousel from "./ImageCarousel";
import Content from "./Content"
import showsMd from './content/auftritte.md?raw'
import contactMd from './content/kontakt.md?raw'
import clubMd from './content/verein.md?raw'
import imprintMd from './content/imprint.md?raw'

const toContent = async meta => ({...meta,
 element: <Content slug={meta.slug} title={meta.title} content={meta.text}/>,
})

const images = [
  "banner2_0.jpg",
  "Duell_Schwert_2_0.jpg",
  "Lager_2_0.jpg"
];

const contents = [
  {
    slug: 'galerie',
    title: 'asdasddsa',
    element: <ImageCarousel images={images}/>,
    content: true,
    nav: false
  },
  await toContent(
  {
    slug: 'auftritte',
    title: 'Federfechter auf Ihrem Fest',
    text: await marked.parse(showsMd),
    content: true,
    nav: true
  }),
  await toContent(
  {
    slug: 'verein',
    title: 'Der Verein',
    text: await marked.parse(clubMd),
    content: true,
    nav: true
  }),
  await toContent(
  {
    slug: 'kontakt',
    title: 'Kontakt',
    text: await marked.parse(contactMd),
    content: true,
    nav: true
  }),
  await toContent(
  {
    slug: 'imprint',
    title: 'Impressum',
    text: await marked.parse(imprintMd),
    nav: true
  }),
]

export default function App() {
  const [active, setActive] = useState("A");

  const renderContent = () => (
    <div className="content-text">
      {contents
        .filter(({content}) => content)
        .map(({element}) => element)}
    </div>)

  return (
    <div className="app-container">
      <nav className="nav">
        <div className="logo"><img src="logo.png"></img></div>
        <div className="menu">
          {contents.filter(({nav}) => nav).map(({slug, title}) => (
            <button
              key={slug}
              onClick={() => setActive(slug)}
              className={`menu-item ${active === slug ? "active" : ""}`}
            >
              {title}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        <div className="content-container">
          {renderContent()}
        </div>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()}  All rights reserved
      </footer>
    </div>
  );
}        
