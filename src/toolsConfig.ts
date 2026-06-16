import tokenBuilderLogo from './assets/tools/token-builder.png'
import tokenLauncherLogo from './assets/tools/token-launcher.png'
import tokenLockerLogo from './assets/tools/token-locker.png'
import walletGeneratorLogo from './assets/tools/wallet-generator.png'

export const TOOL_URLS = {
  wallet: 'https://wallet.cbs-coin.com',
  tokenBuilder: 'https://token-builder.cbs-coin.com',
  tokenLauncher: 'https://token-launcher.cbs-coin.com',
  tokenLocker: 'https://locker.cbs-coin.com',
} as const

export type CbsTool = {
  id: string
  name: string
  headline: string
  description: string
  whyItMatters: string
  benefits: string[]
  status: 'Live'
  url: string
  logoUrl: string
}

export const CBS_TOOLS: CbsTool[] = [
  {
    id: 'wallet',
    name: 'CBS Wallet Generator',
    headline: 'Create a Solana Wallet',
    description:
      'Generate a standard or vanity Solana wallet locally in your browser.',
    whyItMatters:
      'Your wallet is your identity on Solana. You need a wallet before you can create tokens, hold assets or interact with blockchain applications.',
    benefits: [
      'Private keys stay on your device',
      'Compatible with Phantom, Solflare and Backpack',
      'Vanity wallet support',
    ],
    status: 'Live',
    url: TOOL_URLS.wallet,
    logoUrl: walletGeneratorLogo,
  },
  {
    id: 'token-builder',
    name: 'CBS Token Builder',
    headline: 'Create a Solana Token',
    description:
      'Create a token with metadata, supply controls and custom settings.',
    whyItMatters:
      'A token is the foundation of your project. This is where you define your supply, branding and token settings.',
    benefits: [
      'Metadata support',
      'Authority controls',
      'Vanity mint creation',
    ],
    status: 'Live',
    url: TOOL_URLS.tokenBuilder,
    logoUrl: tokenBuilderLogo,
  },
  {
    id: 'token-launcher',
    name: 'CBS Token Launcher',
    headline: 'Launch Your Project',
    description:
      'Create a project page, collect interest and grow your community.',
    whyItMatters:
      'Creating a token is only the beginning. Projects grow through visibility, updates and community building.',
    benefits: [
      'Project listings',
      'Verification system',
      'Community updates',
    ],
    status: 'Live',
    url: TOOL_URLS.tokenLauncher,
    logoUrl: tokenLauncherLogo,
  },
  {
    id: 'token-locker',
    name: 'CBS Token Locker',
    headline: 'Lock Tokens On-Chain',
    description:
      'Lock SPL tokens or LP tokens on Solana to increase transparency and community trust.',
    whyItMatters:
      'Locked tokens show commitment. Public unlock dates help communities understand when supply can move.',
    benefits: [
      'Lock tokens or LP tokens',
      'Public unlock date',
      'Helps show long-term commitment',
      'Useful for community tokens and launch projects',
    ],
    status: 'Live',
    url: TOOL_URLS.tokenLocker,
    logoUrl: tokenLockerLogo,
  },
]

export const CBS_TOOLS_BY_ID = Object.fromEntries(
  CBS_TOOLS.map((tool) => [tool.id, tool]),
) as Record<string, CbsTool>
