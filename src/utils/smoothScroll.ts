import type { MouseEvent } from 'react';

export function smoothScrollToId(e: MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  
  const el = document.getElementById(id);
  if (el?.id === 'hero') {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (el) {
    el?.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.hash = `#${id}`;
  }
}
