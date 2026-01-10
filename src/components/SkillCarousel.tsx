import React from "react";
import type { SkillCard, SkillId } from "../data/skills";

const getPerPage = () => {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 960) return 2;
  return 3;
};

type SkillCarouselProps = {
  id: string;
  items: SkillCard[];
  onSelect: (id: SkillId) => void;
};

export const SkillCarousel = ({ id, items, onSelect }: SkillCarouselProps) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = React.useState(0);
  const [perPage, setPerPage] = React.useState(() => getPerPage());
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      setPerPage(getPerPage());
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    let resizeTimeout: number | null = null;
    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(update, 150);
    };

    update();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const normalizedIndex = ((index % totalPages) + totalPages) % totalPages;
  const gap = 14;
  const pageWidth = containerWidth + gap;
  const isCentered = items.length <= perPage;

  React.useEffect(() => {
    if (normalizedIndex !== index) {
      setIndex(normalizedIndex);
    }
  }, [index, normalizedIndex]);

  const minWidth = `calc(${100 / perPage}% - 10px)`;

  return (
    <div
      className={`carousel-container ${isCentered ? "centered-carousel" : ""}`}
      id={id}
      ref={containerRef}
    >
      <button
        className="carousel-button prev"
        onClick={() => setIndex(normalizedIndex - 1)}
        aria-label="Anterior"
        type="button"
        style={{ display: isCentered ? "none" : "flex" }}
      >
        &#10094;
      </button>
      <div className="carousel" style={{ transform: `translateX(${-normalizedIndex * pageWidth}px)` }}>
        {items.map((item) => (
          <div
            className="skill"
            key={item.id}
            style={{ minWidth }}
            onClick={() => onSelect(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(item.id);
              }
            }}
          >
            <div className="skill-content">
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-button next"
        onClick={() => setIndex(normalizedIndex + 1)}
        aria-label="Próximo"
        type="button"
        style={{ display: isCentered ? "none" : "flex" }}
      >
        &#10095;
      </button>
    </div>
  );
};
