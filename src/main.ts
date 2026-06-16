import './style.css'
import bannerUrl from './assets/banner.png'
import mangoLogo from './assets/mango-logo.png'
import toolLogoUrl from './assets/tool-logo.png'
import {
  attachToolsHub,
  renderInteractiveToolsHub,
  renderToolModal,
} from './toolsHub'
import {
  renderLiquidityProviderCards,
  renderWalletLinksSection,
} from './partnerLinksHub'

type CommunityLink = {
  label: string
  value: string
  url: string
  icon: 'x' | 'telegram' | 'web' | 'email' | 'facebook'
}

type CommunityCard = {
  title: string
  description: string
  links: CommunityLink[]
}

const DONATION_WALLET = 'ManGofryUWC5VWk7t4ATP32qJtGVBBNoVi2AQ9HyR9J'

const MANGO_URLS = {
  website: 'https://mangomeme.fun/',
  launcher: 'https://token-launcher.cbs-coin.com/token/mango',
} as const

const LIQUIDITY_WHY_IT_MATTERS =
  'Without liquidity, people cannot easily buy or sell your token. Liquidity connects your token to the market.'

const COMMUNITY_BENEFITS = [
  'Share updates',
  'Provide feedback',
  'Find bugs',
  'Support adoption',
  'Help a project grow',
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
        label: 'Website',
        value: 'cbs-coin.com',
        url: 'https://cbs-coin.com',
        icon: 'web',
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
        label: 'Facebook',
        value: 'ManGomeme.fun',
        url: 'https://facebook.com/ManGomeme.fun',
        icon: 'facebook',
      },
      {
        label: 'Email',
        value: 'mangomemefun@gmail.com',
        url: 'mailto:mangomemefun@gmail.com',
        icon: 'email',
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

function renderWhyBlock(text: string): string {
  return `
    <div class="edu-block">
      <h4 class="edu-block-title">Why it matters</h4>
      <p class="edu-block-text">${text}</p>
    </div>
  `
}

function renderCommunityWhyBlock(): string {
  const benefits = COMMUNITY_BENEFITS.map((item) => `<li>${item}</li>`).join('')

  return `
    <div class="edu-block edu-block--community">
      <h3 class="edu-block-heading">Why Community Matters</h3>
      <p class="edu-block-text">
        Strong communities often outperform strong technology.
      </p>
      <p class="edu-block-text">
        People support projects they understand, trust and enjoy being part of.
      </p>
      <p class="edu-block-label">A community can:</p>
      <ul class="edu-block-list">
        ${benefits}
      </ul>
    </div>
  `
}

function renderLiquidityEducation(): string {
  return `
    ${renderWhyBlock(LIQUIDITY_WHY_IT_MATTERS)}
    <p class="edu-block-text">
      Liquidity can be created through trusted Solana DEX platforms. Review each provider carefully before adding funds.
    </p>
  `
}

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

  if (icon === 'facebook') {
    return `
      <span class="community-link-icon community-link-icon--svg" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            fill="currentColor"
          />
        </svg>
      </span>
    `
  }

  if (icon === 'web') {
    return `
      <span class="community-link-icon community-link-icon--svg" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3 12h18M12 3c2.5 3 4 6.5 4 9s-1.5 6-4 9M12 3c-2.5 3-4 6.5-4 9s1.5 6 4 9"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </span>
    `
  }

  return `
    <span class="community-link-icon community-link-icon--svg" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          d="M3 7l9 6 9-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  `
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
        ${renderCommunityWhyBlock()}
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

function renderCommunityMessage(): string {
  return `
    <div class="community-message" aria-labelledby="community-message-heading">
      <div class="community-message-panel">
        <div class="community-message-heading-row">
          <img
            class="community-message-logo"
            src="/assets/solana-logomark.svg"
            alt=""
            loading="lazy"
            width="32"
            height="25"
          />
          <h3 class="community-message-title" id="community-message-heading">
            Built for the Solana Community
            <svg
              class="community-message-heart"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
              />
            </svg>
          </h3>
        </div>
        <div class="community-message-copy">
          <p class="community-message-lead">
            All CBS tools are <strong class="community-message-emphasis">free to use</strong>.
          </p>
          <div class="community-message-fees">
            <p class="community-message-fees-label">You only pay:</p>
            <ul class="community-message-fees-list">
              <li><strong class="community-message-emphasis">Solana network fees</strong></li>
              <li>Optional third-party service fees</li>
            </ul>
          </div>
          <p class="community-message-note">
            CBS does not charge platform fees.
          </p>
          <p class="community-message-footer">
            Open Source • <strong class="community-message-emphasis">Community Driven</strong> • Built on Solana
          </p>
        </div>
      </div>
    </div>
  `
}

function renderToolsEcosystemIntro(): string {
  return `
    <div class="tools-ecosystem-intro">
      <h2 class="section-title" id="tools-heading">CBS Tools Ecosystem</h2>
      <p class="section-subtitle">
        Free tools for creating, launching and managing Solana projects.
      </p>
    </div>
  `
}

function renderMobileLayout(): string {
  return `
    <div class="mobile-only">
      <section class="mobile-section" aria-labelledby="tools-heading">
        ${renderCommunityMessage()}
        ${renderWalletLinksSection()}
        ${renderToolsEcosystemIntro()}
        ${renderInteractiveToolsHub()}
      </section>

      <section class="mobile-section" aria-labelledby="mobile-liquidity-heading">
        <h2 class="mobile-section-title" id="mobile-liquidity-heading">Liquidity</h2>
        ${renderLiquidityEducation()}
        ${renderLiquidityProviderCards()}
        <p class="mobile-section-note">
          Always understand liquidity risks before providing liquidity.
        </p>
      </section>

      <section class="mobile-section" aria-labelledby="mobile-community-heading">
        <h2 class="mobile-section-title" id="mobile-community-heading">Community</h2>
        ${renderCommunityWhyBlock()}
        <div class="community-grid">
          ${communityCards.map((card) => renderCommunityCard(card)).join('')}
        </div>
      </section>
    </div>
  `
}

function renderLiquiditySection(): string {
  return `
    <div class="liquidity-section-content">
      ${renderLiquidityEducation()}
      ${renderLiquidityProviderCards()}
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
        class="page-section tools-section"
        aria-labelledby="tools-heading"
      >
        ${renderCommunityMessage()}
        ${renderWalletLinksSection()}
        ${renderToolsEcosystemIntro()}
        ${renderInteractiveToolsHub()}
      </section>

      <section
        class="page-section"
        aria-labelledby="liquidity-heading"
      >
        <h2 class="section-title" id="liquidity-heading">Liquidity</h2>
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

function renderSiteFooter(): string {
  return `
    <footer class="site-footer">
      <section class="footer-open-source" aria-labelledby="footer-open-title">
        <h2 class="footer-open-title" id="footer-open-title">Built in the Open</h2>
        <p class="footer-open-text">
          CBS Tools is developed publicly and transparently.
          Source code, improvements and community contributions can be followed on GitHub.
        </p>
        <a
          class="footer-github-link"
          href="https://github.com/smitskecbs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit CBS on GitHub"
        >
          <svg class="footer-github-icon" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              fill="currentColor"
            />
          </svg>
          <span>GitHub</span>
        </a>
        <p class="footer-badge-row">
          Open Source • Community Driven • Built on Solana
        </p>
      </section>
      <p class="site-footer-copy">Community-built tools for Solana builders.</p>
    </footer>
  `
}

function renderDonationSection(): string {
  return `
    <section class="support-section" aria-labelledby="support-title">
      <div class="support-card">
        <p class="support-title" id="support-title">Support CBS Ecosystem</p>
        <p class="support-text">
          Optional donations help fund development and infrastructure.
        </p>
        <code class="support-wallet" data-mango-donation-wallet>${DONATION_WALLET}</code>
        <button
          type="button"
          class="secondary-btn support-copy-btn"
          data-mango-donation-copy
        >
          Copy address
        </button>
        <p
          class="support-confirm"
          data-mango-donation-confirm
          hidden
          aria-live="polite"
        >
          Address copied.
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

    ${renderDonationSection()}

    ${renderSiteFooter()}

    ${renderToolModal()}
  </main>
`

attachDonationSection()
attachToolsHub()
