import { useState } from "react";
import "./ImageCarousel.css";


export default function ImageCarousel({ entries }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + entries.length) % entries.length)
  const next = () => setCurrent((current + 1) % entries.length)

  return (
    <div className="carousel">
      <img
        src={entries[current].image}
        alt={`Slide ${current}`}
        style={{ width: "100%", display: "block", objectFit: "cover" }}
      />
      <button
        className="navbutton"
        onClick={prev}
        style={{
          left: "10px"
        }}
      >
        ‹
      </button>
      <button
        className="navbutton"
        onClick={next}
        style={{
          right: "10px"
        }}
      >
        ›
      </button>
      <div className="dots">
        {entries.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className="dot"
            style={{
              background: idx === current
                ? "white"
                : "rgba(255,255,255,0.5)"
            }}
          />
        ))}
      </div>
      <div className="caption">{entries[current].caption}</div>
    </div>
  );
}