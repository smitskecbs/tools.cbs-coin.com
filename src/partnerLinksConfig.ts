import backpackLogo from './assets/partners/backpack.png'
import jupiterLogo from './assets/partners/jupiter.svg'
import meteoraLogo from './assets/partners/meteora.svg'
import orcaLogo from './assets/partners/orca.svg'
import phantomLogo from './assets/partners/phantom.svg'
import raydiumLogo from './assets/partners/raydium.svg'
import solflareLogo from './assets/partners/solflare.svg'

export type PartnerLink = {
  id: string
  name: string
  url: string
  logo: string
  description?: string
}

export const WALLET_LINKS: PartnerLink[] = [
  {
    id: 'phantom',
    name: 'Phantom',
    url: 'https://phantom.app',
    logo: phantomLogo,
    description: 'Popular Solana wallet',
  },
  {
    id: 'backpack',
    name: 'Backpack',
    url: 'https://backpack.app',
    logo: backpackLogo,
    description: 'Solana wallet and exchange',
  },
  {
    id: 'solflare',
    name: 'Solflare',
    url: 'https://solflare.com',
    logo: solflareLogo,
    description: 'Secure Solana wallet',
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    url: 'https://jup.ag',
    logo: jupiterLogo,
    description: 'Swap platform on Solana',
  },
]

export const LIQUIDITY_PROVIDER_LINKS: PartnerLink[] = [
  {
    id: 'raydium',
    name: 'Raydium',
    url: 'https://raydium.io',
    logo: raydiumLogo,
    description: 'Solana AMM and liquidity',
  },
  {
    id: 'meteora',
    name: 'Meteora',
    url: 'https://www.meteora.ag',
    logo: meteoraLogo,
    description: 'Dynamic liquidity on Solana',
  },
  {
    id: 'orca',
    name: 'Orca',
    url: 'https://www.orca.so',
    logo: orcaLogo,
    description: 'Solana DEX and liquidity',
  },
]
