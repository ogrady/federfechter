import * as marked from 'marked'
import { useState } from "react";
import "./App.css";
import ImageCarousel from "./ImageCarousel";
import Content from "./Content"
import showsMd from './content/auftritte.md?raw'
import contactMd from './content/kontakt.md?raw'
import clubMd from './content/verein.md?raw'
import imprintMd from './content/imprint.md?raw'
import ScrollLink from './BackToTop';
import Nav from './Nav';
import BackToTop from './BackToTop';

const toSlug = title => title
  .toLowerCase()
  .split(' ')
  .join('-')

const toContent = async meta => ({...meta,
  element: <Content  key={`content-${toSlug(meta.title)}`} slug={toSlug(meta.title)} title={meta.title} content={meta.text}/>,
  slug: toSlug(meta.title),
})

const contents = [
  {
    title: '',
    element: <ImageCarousel key="carousel" entries={[
      { image: "banner2_0.jpg", caption: "\"Viribus Unitis\" ist der Leitspruch der Federfechter und prägt den Zusammenhalt des Vereins. Ausgebildet an so manchen Waffen begeistern wir Jung und Alt."},
      { image: "Duell_Schwert_2_0.jpg", caption: "Mit dem Katzbalger an die Gurgel – Die Basisausrüstung darf an keinem Landsknecht fehlen."},
      { image: "Lager_2_0.jpg", caption: "Ohne Mampf keinen Kampf! Ein Söldnertrupp sollte immer gut versorgt sein."}
    ]}/>,
    isContent: true,
    hasNavItem: false
  },
  await toContent(
  {
    title: 'Federfechter auf Ihrem Fest',
    text: await marked.parse(showsMd),
    isContent: true,
    hasNavItem: true
  }),
  await toContent(
  {
    title: 'Der Verein',
    text: await marked.parse(clubMd),
    isContent: true,
    hasNavItem: true
  }),
  await toContent(
  {
    title: 'Kontakt',
    text: await marked.parse(contactMd),
    isContent: true,
    hasNavItem: true
  }),
  await toContent(
  {
    title: 'Impressum',
    text: await marked.parse(imprintMd),
    isContent: true,
    hasNavItem: true
  }),
]

export default function App() {
  return (
    <div className="app-container">
      <Nav children={contents.filter(c => c.hasNavItem).map(c=> (
          <a key={c.slug} href={`#${c.slug}`}>{c.title}</a>
        ))}>
      </Nav>
      <main className="main-content">
        <div className="content-container">
            {contents
              .filter(c => c.isContent)
              .map(c => c.element)}
        </div>
      </main>
      <BackToTop />
      <footer className="footer">
        © {new Date().getFullYear()}  All rights reserved
      </footer>
    </div>
  );
}        
