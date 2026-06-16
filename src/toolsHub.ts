import { CBS_TOOLS, CBS_TOOLS_BY_ID } from './toolsConfig'

function renderToolTriggerCard(tool: (typeof CBS_TOOLS)[number]): string {
  return `
    <button
      type="button"
      class="tools-hub-card"
      data-tool-trigger
      data-tool-id="${tool.id}"
      aria-label="Open ${tool.name} details"
    >
      <span class="tools-hub-card-badge">${tool.status}</span>
      <img
        class="tools-hub-card-logo"
        src="${tool.logoUrl}"
        alt=""
        loading="lazy"
      />
      <span class="tools-hub-card-name">${tool.name}</span>
      <span class="tools-hub-card-description">${tool.headline}</span>
      <span class="tools-hub-card-cta">Learn more</span>
    </button>
  `
}

export function renderInteractiveToolsHub(): string {
  const cards = CBS_TOOLS.map((tool) => renderToolTriggerCard(tool)).join('')

  return `
    <div class="tools-hub">
      <div
        class="tools-hub-row"
        tabindex="0"
        role="list"
        aria-label="CBS Tools"
      >
        <div class="tools-hub-track">
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
        class="tool-modal-dialog tool-modal-dialog--detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tool-modal-title"
      >
        <button
          type="button"
          class="tool-modal-close"
          data-tool-modal-close
          aria-label="Close"
        >
          ×
        </button>
        <div class="tool-modal-header">
          <img
            class="tool-modal-logo"
            data-tool-modal-logo
            src=""
            alt=""
          />
          <h3 class="tool-modal-title" id="tool-modal-title" data-tool-modal-title></h3>
        </div>
        <div class="tool-modal-body">
          <section class="tool-modal-section">
            <h4 class="tool-modal-section-title">What it does</h4>
            <p class="tool-modal-text" data-tool-modal-what></p>
          </section>
          <section class="tool-modal-section">
            <h4 class="tool-modal-section-title">When to use it</h4>
            <p class="tool-modal-text" data-tool-modal-when></p>
          </section>
          <section class="tool-modal-section">
            <h4 class="tool-modal-section-title">Who it is for</h4>
            <p class="tool-modal-text" data-tool-modal-who></p>
          </section>
          <section class="tool-modal-section">
            <h4 class="tool-modal-section-title">How to use it</h4>
            <ol class="tool-modal-steps" data-tool-modal-steps></ol>
          </section>
          <div class="tool-modal-warning" data-tool-modal-warning hidden></div>
          <section class="tool-modal-section">
            <h4 class="tool-modal-section-title">Benefits</h4>
            <ul class="tool-modal-benefits" data-tool-modal-benefits></ul>
          </section>
        </div>
        <div class="tool-modal-footer">
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
    </div>
  `
}

export function attachToolsHub(): void {
  const modal = document.querySelector<HTMLElement>('[data-tool-modal]')

  if (!modal) {
    return
  }

  const title = modal.querySelector<HTMLElement>('[data-tool-modal-title]')
  const what = modal.querySelector<HTMLElement>('[data-tool-modal-what]')
  const when = modal.querySelector<HTMLElement>('[data-tool-modal-when]')
  const who = modal.querySelector<HTMLElement>('[data-tool-modal-who]')
  const steps = modal.querySelector<HTMLOListElement>('[data-tool-modal-steps]')
  const warning = modal.querySelector<HTMLElement>('[data-tool-modal-warning]')
  const benefits = modal.querySelector<HTMLUListElement>(
    '[data-tool-modal-benefits]',
  )
  const status = modal.querySelector<HTMLElement>('[data-tool-modal-status]')
  const logo = modal.querySelector<HTMLImageElement>('[data-tool-modal-logo]')
  const openLink = modal.querySelector<HTMLAnchorElement>('[data-tool-modal-open]')

  if (
    !title ||
    !what ||
    !when ||
    !who ||
    !steps ||
    !warning ||
    !benefits ||
    !status ||
    !logo ||
    !openLink
  ) {
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
    what.textContent = tool.whatItDoes
    when.textContent = tool.whenToUseIt
    who.textContent = tool.whoItIsFor
    status.textContent = tool.status
    logo.src = tool.logoUrl
    logo.alt = `${tool.name} logo`
    openLink.href = tool.url
    steps.innerHTML = tool.usageSteps
      .map((step) => `<li>${step}</li>`)
      .join('')
    benefits.innerHTML = tool.benefits
      .map((benefit) => `<li>${benefit}</li>`)
      .join('')

    if (tool.warning) {
      warning.hidden = false
      warning.textContent = tool.warning
    } else {
      warning.hidden = true
      warning.textContent = ''
    }

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
