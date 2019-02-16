export function scrollToHeaderTitle(): void{
  window.scrollTo({ top: 180, behavior: 'smooth' });
}

export function getTopScroll(): number{
  return (window.pageYOffset || document.documentElement!.scrollTop) - (document.documentElement!.clientTop || 0);
}