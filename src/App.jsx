import * as marked from 'marked'
import { useState } from "react";
import "./App.css";
import ImageCarousel from "./ImageCarousel";
import Content from "./Content"
import showsMd from './content/auftritte.md?raw'
import contactMd from './content/kontakt.md?raw'
import clubMd from './content/verein.md?raw'
import imprintMd from './content/imprint.md?raw'
import ScrollLink from './ScrollLink';

const toContent = async meta => ({...meta,
 element: <Content slug={meta.slug} title={meta.title} content={meta.text}/>,
})

const contents = [
    {
    slug: 'galerie',
    title: '',
    element: <ImageCarousel entries={[
      { image: "banner2_0.jpg", caption: "\"Viribus Unitis\" ist der Leitspruch der Federfechter und prägt den Zusammenhalt des Vereins. Ausgebildet an so manchen Waffen begeistern wir Jung und Alt."},
      { image: "Duell_Schwert_2_0.jpg", caption: "Mit dem Katzbalger an die Gurgel – Die Basisausrüstung darf an keinem Landsknecht fehlen."},
      { image: "Lager_2_0.jpg", caption: "Ohne Mampf keinen Kampf! Ein Söldnertrupp sollte immer gut versorgt sein."}
    ]}/>,
    isContent: true,
    hasNavItem: false
  },
  await toContent(
  {
    slug: 'auftritte',
    title: 'Federfechter auf Ihrem Fest',
    text: await marked.parse(showsMd),
    isContent: true,
    hasNavItem: true
  }),
  await toContent(
  {
    slug: 'verein',
    title: 'Der Verein',
    text: await marked.parse(clubMd),
    isContent: true,
    hasNavItem: true
  }),
  await toContent(
  {
    slug: 'kontakt',
    title: 'Kontakt',
    text: await marked.parse(contactMd),
    isContent: true,
    hasNavItem: true
  }),
  await toContent(
  {
    slug: 'imprint',
    title: 'Impressum',
    text: await marked.parse(imprintMd),
    isContent: true,
    hasNavItem: true
  }),

]

export default function App() {
  return (
    <div className="app-container">
      <nav className="nav">
        <div className="logo"><a href="/"><img src="logo.png"></img></a></div>
        <div className="menu">
          {contents.filter(c => c.hasNavItem).map(c=> (
            <ScrollLink slug={c.slug} offset={64}>{c.title}</ScrollLink>
          ))}
        </div>
      </nav>

      <main className="main-content">
        <div className="content-container">
            {contents
              .filter(c => c.isContent)
              .map(c => c.element)}
        </div>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()}  All rights reserved
      </footer>
    </div>
  );
}        
