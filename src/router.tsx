import React from "react";

type LocationState = {
  pathname: string;
  hash: string;
};

const getBasePath = () => {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/" || base === "./") {
    return "";
  }
  return base.endsWith("/") ? base.slice(0, -1) : base;
};

const normalizePath = (pathname: string) => {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
};

const getLocationState = (): LocationState => {
  const basePath = getBasePath();
  let pathname = window.location.pathname;
  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || "/";
  }
  return {
    pathname: normalizePath(pathname),
    hash: window.location.hash,
  };
};

export const useLocation = () => {
  const [location, setLocation] = React.useState<LocationState>(() => getLocationState());

  React.useEffect(() => {
    const handleChange = () => {
      setLocation(getLocationState());
    };

    window.addEventListener("popstate", handleChange);
    window.addEventListener("hashchange", handleChange);
    return () => {
      window.removeEventListener("popstate", handleChange);
      window.removeEventListener("hashchange", handleChange);
    };
  }, []);

  return location;
};

export const navigate = (to: string) => {
  const basePath = getBasePath();
  const target = to.startsWith("/") && basePath ? `${basePath}${to}` : to;
  const url = new URL(target, window.location.origin);
  const next = normalizePath(url.pathname) + url.hash;
  const current = normalizePath(window.location.pathname) + window.location.hash;

  if (next === current) {
    return;
  }

  window.history.pushState({}, "", `${url.pathname}${url.hash}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export const Link = ({ to, onClick, target, ...rest }: LinkProps) => {
  const basePath = getBasePath();
  const href = to.startsWith("/") && basePath ? `${basePath}${to}` : to;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }

    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
    if (target && target !== "_self") return;
    if (to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("tel:")) return;

    event.preventDefault();
    navigate(to);
  };

  return <a href={href} onClick={handleClick} target={target} {...rest} />;
};

export const normalizeRoutePath = (pathname: string) => normalizePath(pathname);
