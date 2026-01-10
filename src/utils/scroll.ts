export const scrollToHash = (hash: string, behavior: ScrollBehavior = "smooth") => {
  if (!hash) return;
  const target = document.querySelector(hash);
  if (!target) return;

  const header = document.querySelector(".site-header") as HTMLElement | null;
  const offset = header ? header.offsetHeight + 12 : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior });
};
