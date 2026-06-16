import { CBS_TOOLS, CBS_TOOLS_BY_ID } from './toolsConfig'

const ORBIT_ANGLES = ['-90deg', '0deg', '90deg', '180deg']

function renderToolTriggerCard(
  tool: (typeof CBS_TOOLS)[number],
  variant: 'orbit' | 'carousel',
  orbitAngle?: string,
): string {
  const angleAttr =
    variant === 'orbit' && orbitAngle
      ? `style="--orbit-angle: ${orbitAngle}"`
      : ''

  return `
    <button
      type="button"
      class="tools-hub-card tools-hub-card--${variant}"
      data-tool-trigger
      data-tool-id="${tool.id}"
      aria-label="Open ${tool.name} details"
      ${angleAttr}
    >
      <img
        class="tools-hub-card-logo"
        src="${tool.logoUrl}"
        alt=""
        loading="lazy"
      />
      <span class="tools-hub-card-name">${tool.name}</span>
      <span class="tools-hub-card-tagline">${tool.headline}</span>
    </button>
  `
}

export function renderInteractiveToolsDesktop(): string {
  const cards = CBS_TOOLS.map((tool, index) =>
    renderToolTriggerCard(tool, 'orbit', ORBIT_ANGLES[index]),
  ).join('')

  return `
    <div class="tools-hub tools-hub--desktop">
      <p class="tools-hub-hint">Click a tool to learn more</p>
      <div class="tools-orbit" role="list" aria-label="CBS Tools">
        <div class="tools-orbit-center">
          <span class="tools-orbit-center-label">CBS</span>
          <span class="tools-orbit-center-sub">Tools</span>
        </div>
        ${cards}
      </div>
    </div>
  `
}

export function renderInteractiveToolsMobile(): string {
  const cards = CBS_TOOLS.map((tool) =>
    renderToolTriggerCard(tool, 'carousel'),
  ).join('')

  return `
    <div class="tools-hub tools-hub--mobile">
      <p class="tools-hub-hint">Swipe and tap a tool to learn more</p>
      <div class="tools-carousel" tabindex="0" aria-label="CBS Tools carousel">
        <div class="tools-carousel-track">
          ${cards}
        </div>
      </div>
    </div>
  `
}

export function renderToolModal(): string {
  return `
    <div class="tool-modal" data-tool-modal hidden>
      <button
        type="button"
        class="tool-modal-backdrop"
        data-tool-modal-close
        aria-label="Close tool details"
      ></button>
      <div
        class="tool-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tool-modal-title"
        aria-describedby="tool-modal-description"
      >
        <button
          type="button"
          class="tool-modal-close"
          data-tool-modal-close
          aria-label="Close"
        >
          ×
        </button>
        <img
          class="tool-modal-logo"
          data-tool-modal-logo
          src=""
          alt=""
        />
        <h3 class="tool-modal-title" id="tool-modal-title" data-tool-modal-title></h3>
        <p class="tool-modal-description" id="tool-modal-description" data-tool-modal-description></p>
        <ul class="tool-modal-benefits" data-tool-modal-benefits></ul>
        <p class="tool-modal-status" data-tool-modal-status>Live</p>
        <a
          class="primary-btn tool-modal-open"
          data-tool-modal-open
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Tool
        </a>
      </div>
    </div>
  `
}

export function attachToolsHub(): void {
  const modal = document.querySelector<HTMLElement>('[data-tool-modal]')

  if (!modal) {
    return
  }

  const title = modal.querySelector<HTMLElement>('[data-tool-modal-title]')
  const description = modal.querySelector<HTMLElement>(
    '[data-tool-modal-description]',
  )
  const benefits = modal.querySelector<HTMLUListElement>(
    '[data-tool-modal-benefits]',
  )
  const status = modal.querySelector<HTMLElement>('[data-tool-modal-status]')
  const logo = modal.querySelector<HTMLImageElement>('[data-tool-modal-logo]')
  const openLink = modal.querySelector<HTMLAnchorElement>('[data-tool-modal-open]')

  if (!title || !description || !benefits || !status || !logo || !openLink) {
    return
  }

  let activeTrigger: HTMLElement | null = null

  const closeModal = (): void => {
    modal.hidden = true
    document.body.classList.remove('tool-modal-open')
    activeTrigger?.focus()
    activeTrigger = null
  }

  const openModal = (toolId: string, trigger: HTMLElement): void => {
    const tool = CBS_TOOLS_BY_ID[toolId]

    if (!tool) {
      return
    }

    activeTrigger = trigger
    title.textContent = tool.name
    description.textContent = tool.description
    status.textContent = tool.status
    logo.src = tool.logoUrl
    logo.alt = `${tool.name} logo`
    openLink.href = tool.url
    benefits.innerHTML = tool.benefits
      .map((benefit) => `<li>${benefit}</li>`)
      .join('')

    modal.hidden = false
    document.body.classList.add('tool-modal-open')
    modal.querySelector<HTMLButtonElement>('.tool-modal-close')?.focus()
  }

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    const trigger = target.closest<HTMLElement>('[data-tool-trigger]')

    if (trigger?.dataset.toolId) {
      event.preventDefault()
      openModal(trigger.dataset.toolId, trigger)
      return
    }

    if (target.closest('[data-tool-modal-close]')) {
      event.preventDefault()
      closeModal()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal()
    }
  })
}
