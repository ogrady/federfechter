import { useState } from "react";
import "./ImageCarousel.css";


export default function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + images.length) % images.length)
  const next = () => setCurrent((current + 1) % images.length)

  return (
    <div className="carousel">
      <img
        src={images[current]}
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
        {images.map((_, idx) => (
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
      <div class="caption">asdasdasd</div>
    </div>
  );
}