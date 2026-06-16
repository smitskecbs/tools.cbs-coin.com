import {
  LIQUIDITY_PROVIDER_LINKS,
  WALLET_LINKS,
  type PartnerLink,
} from './partnerLinksConfig'

function renderPartnerLinkCard(link: PartnerLink): string {
  return `
    <a
      class="partner-link-card"
      href="${link.url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit ${link.name}"
    >
      <img
        class="partner-link-logo"
        src="${link.logo}"
        alt=""
        loading="lazy"
      />
      <span class="partner-link-name">${link.name}</span>
    </a>
  `
}

export function renderPartnerLinkCards(
  links: PartnerLink[],
  modifier = '',
): string {
  const cards = links.map((link) => renderPartnerLinkCard(link)).join('')
  const modifierClass = modifier ? ` ${modifier}` : ''

  return `
    <div class="partner-links-row${modifierClass}" role="list">
      ${cards}
    </div>
  `
}

export function renderWalletLinksSection(): string {
  return `
    <section
      class="partner-links-section"
      aria-labelledby="wallet-links-heading"
    >
      <div class="partner-links-title-row">
        <img
          class="partner-links-title-logo"
          src="/assets/solana-logomark.svg"
          alt=""
          loading="lazy"
          width="23"
          height="18"
        />
        <h3 class="partner-links-title" id="wallet-links-heading">
          Getting Started on Solana
        </h3>
      </div>
      <p class="partner-links-subtitle">
        Choose a wallet or swap platform to get started.
      </p>
      ${renderPartnerLinkCards(WALLET_LINKS, 'partner-links-row--wallets')}
    </section>
  `
}

export function renderLiquidityProviderCards(): string {
  return renderPartnerLinkCards(
    LIQUIDITY_PROVIDER_LINKS,
    'partner-links-row--liquidity',
  )
}
