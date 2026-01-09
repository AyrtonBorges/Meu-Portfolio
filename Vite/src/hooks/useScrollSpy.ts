import { useEffect, useState } from "react";

type Options = {
  enabled: boolean;
  defaultId: string;
};

export const useScrollSpy = ({ enabled, defaultId }: Options) => {
  const [activeId, setActiveId] = useState(defaultId);

  useEffect(() => {
    if (!enabled) {
      setActiveId(defaultId);
      return;
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (!sections.length) return;

    let ticking = false;
    const header = document.querySelector(".site-header") as HTMLElement | null;
    const headerOffset = header ? header.offsetHeight : 0;

    const updateActive = () => {
      const viewportMark = window.scrollY + headerOffset + window.innerHeight * 0.35;
      let currentId = sections[0].id;

      for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (viewportMark >= top && viewportMark < bottom) {
          currentId = section.id;
          break;
        }
      }

      setActiveId(currentId);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    updateActive();

    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled, defaultId]);

  return activeId;
};
