import { useEffect } from "react";

export const usePageClass = (className: string) => {
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    body.classList.add(className);
    html.classList.add(className);

    return () => {
      body.classList.remove(className);
      html.classList.remove(className);
    };
  }, [className]);
};
