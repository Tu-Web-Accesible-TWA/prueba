scrollBy(direction: -1 | 1) {
  const el = this.track()?.nativeElement;
  if (!el) return;
  el.scrollTo({
    left: direction === 1 ? el.scrollWidth : 0,
    behavior: 'smooth',
  });
}