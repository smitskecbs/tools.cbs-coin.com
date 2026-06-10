import './style.css'
import bannerUrl from './assets/banner.png'
import mangoLogo from './assets/mango-logo.png'
import toolLogoUrl from './assets/tool-logo.png'
import tokenBuilderLogo from './assets/tools/token-builder.png'
import tokenLauncherLogo from './assets/tools/token-launcher.png'
import walletGeneratorLogo from './assets/tools/wallet-generator.png'

type ToolchainCard = {
  toolName: string
  headline: string
  description: string
  keyPoints: string[]
  url: string
  logoUrl: string
}

type WorkflowStep = {
  id: string
  name: string
  description: string
  detail: string
}

type LiquidityProvider = {
  name: string
  url: string
  logoSrc: string
}

type Resource = {
  name: string
  url: string
}

type CommunityLink = {
  label: string
  value: string
  url: string
  icon: 'x' | 'telegram' | 'web' | 'email'
}

type CommunityCard = {
  title: string
  description: string
  links: CommunityLink[]
}

const DONATION_WALLET = 'ManGofryUWC5VWk7t4ATP32qJtGVBBNoVi2AQ9HyR9J'

const TOOL_URLS = {
  wallet: 'https://wallet.cbs-coin.com',
  tokenBuilder: 'https://token-builder.cbs-coin.com',
  tokenLauncher: 'https://token-launcher.cbs-coin.com',
} as const

const MANGO_URLS = {
  website: 'https://mangomeme.fun/',
  launcher: 'https://token-launcher.cbs-coin.com/token/mango',
} as const

const toolchainCards: ToolchainCard[] = [
  {
    toolName: 'Wallet Generator',
    headline: 'Create a Solana Wallet',
    description:
      'Generate a standard or vanity Solana wallet locally in your browser.',
    keyPoints: [
      'Private keys stay on your device',
      'Compatible with Phantom, Solflare and Backpack',
      'Vanity wallet support',
    ],
    url: TOOL_URLS.wallet,
    logoUrl: walletGeneratorLogo,
  },
  {
    toolName: 'Token Builder',
    headline: 'Create a Solana Token',
    description:
      'Create a token with metadata, supply controls and custom settings.',
    keyPoints: [
      'Metadata support',
      'Authority controls',
      'Vanity mint creation',
    ],
    url: TOOL_URLS.tokenBuilder,
    logoUrl: tokenBuilderLogo,
  },
  {
    toolName: 'Token Launcher',
    headline: 'Launch Your Project',
    description:
      'Create a project page, collect interest and grow your community.',
    keyPoints: [
      'Project listings',
      'Verification system',
      'Community updates',
    ],
    url: TOOL_URLS.tokenLauncher,
    logoUrl: tokenLauncherLogo,
  },
]

type MobileToolCard = {
  name: string
  description: string
  url: string
  logoUrl: string
}

const mobileToolCards: MobileToolCard[] = [
  {
    name: 'Wallet Generator',
    description:
      'Generate a standard or vanity Solana wallet locally in your browser. Private keys stay on your device.',
    url: TOOL_URLS.wallet,
    logoUrl: walletGeneratorLogo,
  },
  {
    name: 'Token Builder',
    description:
      'Create a token with metadata, supply controls and custom settings. Built for Solana builders who want full control.',
    url: TOOL_URLS.tokenBuilder,
    logoUrl: tokenBuilderLogo,
  },
  {
    name: 'Token Launcher',
    description:
      'Create a project page, collect interest and grow your community. Publish updates and make your project discoverable.',
    url: TOOL_URLS.tokenLauncher,
    logoUrl: tokenLauncherLogo,
  },
]

const mobileFlowSteps = [
  'Create wallet',
  'Create token',
  'Create liquidity',
  'Submit project',
  'Grow community',
]

const workflowSteps: WorkflowStep[] = [
  {
    id: 'wallet',
    name: 'Wallet',
    description: 'Generate or import your Solana wallet',
    detail:
      'Create or import a Solana wallet. You can use the CBS Wallet Generator to create a local wallet or vanity address, then import it into Phantom, Solflare or Backpack.',
  },
  {
    id: 'token',
    name: 'Token',
    description: 'Create your token with metadata and controls',
    detail:
      'Create your token with metadata, supply settings and authority controls using the CBS Token Builder.',
  },
  {
    id: 'liquidity',
    name: 'Liquidity',
    description: 'Add trading liquidity on a DEX',
    detail:
      'Create a liquidity pool using trusted Solana platforms such as Raydium, Meteora or Orca. Always understand liquidity risks before adding funds.',
  },
  {
    id: 'launch',
    name: 'Launch',
    description: 'Submit and promote your project',
    detail:
      'Submit your project to the CBS Token Launcher, add links, publish updates and make your project discoverable.',
  },
  {
    id: 'community',
    name: 'Community',
    description: 'Share updates and grow interest',
    detail:
      'Share updates, collect interest, grow your holders and keep people informed as the project develops.',
  },
]

const liquidityProviders: LiquidityProvider[] = [
  {
    name: 'Raydium',
    url: 'https://raydium.io/',
    logoSrc: '/assets/liquidity/raydium.svg',
  },
  {
    name: 'Meteora',
    url: 'https://meteora.ag/',
    logoSrc: '/assets/liquidity/meteora.svg',
  },
  {
    name: 'Orca',
    url: 'https://www.orca.so/',
    logoSrc: '/assets/liquidity/orca.svg',
  },
]

const resources: Resource[] = [
  { name: 'Phantom', url: 'https://phantom.app/' },
  { name: 'Solflare', url: 'https://solflare.com/' },
  { name: 'Jupiter', url: 'https://jup.ag/' },
  { name: 'Raydium', url: 'https://raydium.io/' },
  { name: 'Dexscreener', url: 'https://dexscreener.com/' },
  { name: 'Solscan', url: 'https://solscan.io/' },
  { name: 'ORB', url: 'https://orb.helius.dev/' },
]

const communityCards: CommunityCard[] = [
  {
    title: 'CBS Community',
    description:
      'The main community for CBS Coin and the CBS tools ecosystem.',
    links: [
      {
        label: 'X',
        value: '@CBS_Coin',
        url: 'https://x.com/CBS_Coin',
        icon: 'x',
      },
      {
        label: 'Telegram',
        value: '@CBS_Coin',
        url: 'https://t.me/CBS_Coin',
        icon: 'telegram',
      },
      {
        label: 'Email',
        value: 'contact@cbs-coin.com',
        url: 'mailto:contact@cbs-coin.com',
        icon: 'email',
      },
    ],
  },
  {
    title: 'ManGo Community',
    description:
      'The first public project built with CBS tools and part of the growing ecosystem.',
    links: [
      {
        label: 'X',
        value: '@ManGomemefun',
        url: 'https://x.com/ManGomemefun',
        icon: 'x',
      },
      {
        label: 'Telegram',
        value: '@mangomeme',
        url: 'https://t.me/mangomeme',
        icon: 'telegram',
      },
      {
        label: 'Website',
        value: 'mangomeme.fun',
        url: 'https://mangomeme.fun/',
        icon: 'web',
      },
    ],
  },
]

function renderCommunityLinkIcon(icon: CommunityLink['icon']): string {
  if (icon === 'x') {
    return `<span class="community-link-icon" aria-hidden="true">𝕏</span>`
  }

  if (icon === 'telegram') {
    return `
      <span class="community-link-icon community-link-icon--svg" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M22 3L2 11.5l7 2.5L16 8l-5.5 8.5 2 7L22 3z"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    `
  }

  if (icon === 'web') {
    return `<span class="community-link-icon" aria-hidden="true">↗</span>`
  }

  return `<span class="community-link-icon" aria-hidden="true">@</span>`
}

function renderCommunityLink(link: CommunityLink): string {
  const target =
    link.url.startsWith('mailto:') ? '' : 'target="_blank" rel="noopener noreferrer"'

  return `
    <a
      class="community-link"
      href="${link.url}"
      ${target}
      aria-label="${link.label}: ${link.value}"
    >
      ${renderCommunityLinkIcon(link.icon)}
      <span class="community-link-content">
        <span class="community-link-label">${link.label}</span>
        <span class="community-link-value">${link.value}</span>
      </span>
      <span class="community-link-arrow" aria-hidden="true">↗</span>
    </a>
  `
}

function renderCommunityCard(card: CommunityCard): string {
  const links = card.links.map((link) => renderCommunityLink(link)).join('')

  return `
    <article class="community-card">
      <h3 class="community-card-title">${card.title}</h3>
      <p class="community-card-description">${card.description}</p>
      <div class="community-links">
        ${links}
      </div>
    </article>
  `
}

function renderCommunitySection(): string {
  return `
    <div class="desktop-only">
      <section
        class="page-section community-section"
        aria-labelledby="community-heading"
      >
        <h2 class="section-title" id="community-heading">Community</h2>
        <p class="section-subtitle">
          Follow the projects and communities built around the CBS ecosystem.
        </p>
        <div class="community-grid">
          ${communityCards.map((card) => renderCommunityCard(card)).join('')}
        </div>
      </section>
    </div>
  `
}

function setSiteFavicon(): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')

  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }

  link.type = 'image/png'
  link.href = toolLogoUrl
}

setSiteFavicon()

function renderMobileToolCard(card: MobileToolCard): string {
  return `
    <article class="mobile-tool-card">
      <img
        class="mobile-tool-logo"
        src="${card.logoUrl}"
        alt=""
        loading="lazy"
      />
      <h3 class="mobile-tool-title">${card.name}</h3>
      <p class="mobile-tool-description">${card.description}</p>
      <a
        class="mobile-tool-btn"
        href="${card.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Tool
      </a>
    </article>
  `
}

function renderMobileLayout(): string {
  const liquidityLinks = liquidityProviders
    .map(
      (provider) => `
        <li>
          <a
            href="${provider.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${provider.name}
          </a>
        </li>
      `,
    )
    .join('')

  const flowItems = mobileFlowSteps
    .map((step) => `<li>${step}</li>`)
    .join('')

  return `
    <div class="mobile-only">
      <section class="mobile-section" aria-labelledby="mobile-tools-heading">
        <h2 class="mobile-section-title" id="mobile-tools-heading">CBS Toolchain</h2>
        <p class="mobile-section-intro">
          Everything you need to go from a new wallet to a public Solana project.
        </p>
        <div class="mobile-tool-list">
          ${mobileToolCards.map((card) => renderMobileToolCard(card)).join('')}
        </div>
      </section>

      <section class="mobile-section" aria-labelledby="mobile-flow-heading">
        <h2 class="mobile-section-title" id="mobile-flow-heading">Project Flow</h2>
        <ol class="mobile-flow-list">
          ${flowItems}
        </ol>
      </section>

      <section class="mobile-section" aria-labelledby="mobile-liquidity-heading">
        <h2 class="mobile-section-title" id="mobile-liquidity-heading">Liquidity</h2>
        <p class="mobile-section-intro">
          Liquidity can be created through trusted Solana liquidity platforms.
        </p>
        <ul class="mobile-link-list">
          ${liquidityLinks}
        </ul>
        <p class="mobile-section-note">
          Always understand liquidity risks before providing liquidity.
        </p>
      </section>
    </div>
  `
}

function renderToolchainCard(card: ToolchainCard): string {
  const points = card.keyPoints
    .map((point) => `<li class="toolchain-point">${point}</li>`)
    .join('')

  return `
    <a
      class="toolchain-card"
      href="${card.url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${card.toolName}"
    >
      <div class="toolchain-logo-stage">
        <img
          class="toolchain-logo"
          src="${card.logoUrl}"
          alt=""
          loading="lazy"
        />
        <p class="toolchain-tool-name">${card.toolName}</p>
      </div>
      <div class="toolchain-card-content">
        <h3 class="toolchain-headline">${card.headline}</h3>
        <p class="toolchain-description">${card.description}</p>
        <ul class="toolchain-points" aria-label="${card.headline} highlights">
          ${points}
        </ul>
        <span class="toolchain-card-action">Open tool ↗</span>
      </div>
    </a>
  `
}

function renderWorkflowTimeline(): string {
  const items = workflowSteps
    .map((step, index) => {
      const connector =
        index < workflowSteps.length - 1
          ? `<li class="workflow-connector" aria-hidden="true">→</li>`
          : ''

      return `
        <li class="workflow-step" data-workflow-step="${step.id}">
          <button
            type="button"
            class="workflow-step-button"
            data-workflow-step-button
            aria-expanded="false"
            aria-controls="workflow-detail-${step.id}"
          >
            <strong class="workflow-step-name">${step.name}</strong>
            <span class="workflow-step-desc">${step.description}</span>
            <span class="workflow-step-detail" id="workflow-detail-${step.id}">
              <span class="workflow-step-detail-inner">
                <span class="workflow-step-detail-text">${step.detail}</span>
              </span>
            </span>
          </button>
        </li>
        ${connector}
      `
    })
    .join('')

  return `
    <div class="workflow-panel">
      <div class="workflow-panel-header">
        <h3 class="workflow-panel-title">Project Flow</h3>
        <p class="workflow-panel-hint">Hover or tap a step to learn more</p>
      </div>
      <ol class="workflow-timeline" aria-label="Typical CBS project flow">
        ${items}
      </ol>
    </div>
  `
}

function attachWorkflowSteps(): void {
  const steps = Array.from(
    document.querySelectorAll<HTMLLIElement>('[data-workflow-step]'),
  )

  if (steps.length === 0) {
    return
  }

  const touchPreferred = window.matchMedia('(hover: none)')

  const setExpandedStep = (target: HTMLLIElement | null): void => {
    steps.forEach((step) => {
      const button = step.querySelector<HTMLButtonElement>(
        '[data-workflow-step-button]',
      )
      const isExpanded = step === target

      step.classList.toggle('is-expanded', isExpanded)
      button?.setAttribute('aria-expanded', isExpanded ? 'true' : 'false')
    })
  }

  steps.forEach((step) => {
    const button = step.querySelector<HTMLButtonElement>(
      '[data-workflow-step-button]',
    )

    if (!button) {
      return
    }

    button.addEventListener('click', () => {
      if (!touchPreferred.matches) {
        return
      }

      const isExpanded = step.classList.contains('is-expanded')
      setExpandedStep(isExpanded ? null : step)
    })
  })
}

function renderLiquiditySection(): string {
  const providers = liquidityProviders
    .map(
      (provider) => `
        <a
          class="liquidity-provider"
          href="${provider.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${provider.name}"
        >
          <img
            class="liquidity-provider-logo"
            src="${provider.logoSrc}"
            alt=""
            loading="lazy"
          />
          <span class="liquidity-provider-name">${provider.name}</span>
        </a>
      `,
    )
    .join('')

  return `
    <div class="liquidity-panel">
      <p class="liquidity-panel-text">
        Liquidity can be created through trusted Solana liquidity platforms.
      </p>
      <div class="liquidity-providers">
        ${providers}
      </div>
      <p class="liquidity-panel-note">
        Always understand liquidity risks before providing liquidity.
      </p>
    </div>
  `
}

function renderToolchainSection(): string {
  return `
    <div class="desktop-only">
      <section
        class="page-section toolchain-section"
        aria-labelledby="toolchain-heading"
      >
        <h2 class="section-title" id="toolchain-heading">CBS Toolchain</h2>
        <p class="section-subtitle">
          Everything you need to go from a new wallet to a public Solana project.
        </p>

        <div class="toolchain-grid">
          ${toolchainCards.map((card) => renderToolchainCard(card)).join('')}
        </div>

        ${renderWorkflowTimeline()}
        ${renderLiquiditySection()}
      </section>
    </div>
  `
}

function renderShowcaseSection(): string {
  return `
    <section
      class="page-section showcase-section"
      aria-labelledby="showcase-heading"
    >
      <h2 class="section-title" id="showcase-heading">Built With CBS Tools</h2>
      <div class="showcase-card">
        <div class="showcase-logo-wrap">
          <img
            class="showcase-logo"
            src="${mangoLogo}"
            alt="ManGo logo"
            loading="lazy"
          />
        </div>
        <div class="showcase-content">
          <h3 class="showcase-name">ManGo</h3>
          <p class="showcase-text">
            ManGo is the first public project built and launched using the CBS toolchain.
          </p>
          <div class="showcase-actions">
            <a
              class="primary-btn"
              href="${MANGO_URLS.website}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit ManGo
            </a>
            <a
              class="secondary-btn"
              href="${MANGO_URLS.launcher}"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Token Launcher
            </a>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderResourceMarqueeSequence(): string {
  return resources
    .map((resource) => {
      return `
        <a
          class="resource-marquee-link"
          href="${resource.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${resource.name}
        </a>
        <span class="resource-marquee-separator" aria-hidden="true">•</span>
      `
    })
    .join('')
}

function renderResourcesMarquee(): string {
  const sequence = renderResourceMarqueeSequence()

  return `
    <div class="resources-marquee" tabindex="0" aria-label="Trusted Solana resources">
      <div class="resources-marquee-track">
        <div class="resources-marquee-group">${sequence}</div>
        <div class="resources-marquee-group" aria-hidden="true">${sequence}</div>
      </div>
    </div>
  `
}

function renderDonationSection(): string {
  return `
    <section
      class="page-section mango-donation-section"
      aria-labelledby="mango-donation-title"
    >
      <div class="mango-donation-card">
        <h2 class="mango-donation-title" id="mango-donation-title">
          Support CBS Ecosystem Development
        </h2>
        <p class="mango-donation-text">
          Donations help fund development, infrastructure, liquidity, and future CBS ecosystem tools.
        </p>
        <ul class="mango-donation-points" aria-label="What support helps fund">
          <li>Liquidity</li>
          <li>Development</li>
          <li>Launch tools</li>
        </ul>
        <p class="mango-donation-wallet-label">Wallet address</p>
        <code
          class="mango-donation-wallet"
          data-mango-donation-wallet
        >${DONATION_WALLET}</code>
        <button
          type="button"
          class="secondary-btn mango-donation-copy-btn"
          data-mango-donation-copy
        >
          Copy Address
        </button>
        <p
          class="mango-donation-confirm"
          data-mango-donation-confirm
          hidden
          aria-live="polite"
        >
          Address copied.
        </p>
        <p class="mango-donation-disclaimer">
          No promises. No pressure. Only support if you believe in the build.
        </p>
      </div>
    </section>
  `
}

function attachDonationSection(): void {
  const button = document.querySelector<HTMLButtonElement>(
    '[data-mango-donation-copy]',
  )
  const confirm = document.querySelector<HTMLElement>(
    '[data-mango-donation-confirm]',
  )

  if (!button || !confirm) {
    return
  }

  let confirmTimeoutId: number | undefined

  button.addEventListener('click', () => {
    void copyDonationWallet(confirm, () => {
      if (confirmTimeoutId !== undefined) {
        window.clearTimeout(confirmTimeoutId)
      }

      confirmTimeoutId = window.setTimeout(() => {
        confirm.hidden = true
        confirm.textContent = 'Address copied.'
      }, 2400)
    })
  })
}

async function copyDonationWallet(
  confirm: HTMLElement,
  onShown: () => void,
): Promise<void> {
  try {
    await navigator.clipboard.writeText(DONATION_WALLET)
    confirm.hidden = false
    confirm.textContent = 'Address copied.'
    onShown()
  } catch {
    confirm.hidden = false
    confirm.textContent =
      'Copy failed. Select the wallet address above and copy manually.'
    onShown()
  }
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="app-shell">
    <header class="site-hero" aria-labelledby="hero-heading">
      <img
        id="hero-heading"
        class="site-banner"
        src="${bannerUrl}"
        alt="CBS Solana Tools"
      />
      <p class="site-hero-subtitle">
        Build, launch and grow on Solana.
      </p>
    </header>

    ${renderToolchainSection()}
    ${renderMobileLayout()}
    ${renderShowcaseSection()}
    ${renderCommunitySection()}

    <div class="desktop-only">
      <section
        class="page-section"
        aria-labelledby="resources-heading"
      >
        <h2 class="section-title" id="resources-heading">Trusted Resources</h2>
        ${renderResourcesMarquee()}
      </section>
    </div>

    ${renderDonationSection()}

    <footer class="site-footer">
      <p>Community-built tools for Solana builders.</p>
    </footer>
  </main>
`

attachDonationSection()
attachWorkflowSteps()
