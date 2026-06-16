export function renderSwipeRow(content: string, dotCount: number): string {
  const dots = Array.from(
    { length: dotCount },
    () => '<span class="mobile-swipe-dot"></span>',
  ).join('')

  return `
    <div class="swipe-row-wrap">
      <p class="mobile-swipe-hint" aria-hidden="true">Swipe to see more →</p>
      <div class="swipe-row-fade">
        ${content}
      </div>
      <div class="mobile-swipe-dots" aria-hidden="true">
        ${dots}
      </div>
    </div>
  `
}
