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
  whatItDoes: string
  whenToUseIt: string
  whoItIsFor: string
  usageSteps: string[]
  benefits: string[]
  warning?: string
  status: 'Live'
  url: string
  logoUrl: string
}

export const CBS_TOOLS: CbsTool[] = [
  {
    id: 'wallet',
    name: 'CBS Wallet Generator',
    headline: 'Create custom Solana wallet addresses.',
    whatItDoes:
      'Generate standard or vanity Solana wallets locally in your browser. Keys stay on your device — use them for fun, branding, experiments, or the start of a new project.',
    whenToUseIt:
      'Use it whenever you want a new wallet or a custom address prefix. You do not need to be launching a full project.',
    whoItIsFor:
      'Builders, creators, and anyone who wants a Solana wallet for fun, branding, side projects, or getting started on Solana.',
    usageSteps: [
      'Open CBS Wallet Generator.',
      'Generate a vanity or standard wallet locally in your browser.',
      'Download and save your wallet backup file.',
      'Open the backup file in Notepad.',
      'Copy the private key.',
      'Open Phantom, Backpack or Solflare.',
      'Choose Import Private Key.',
      'Paste the key and import the wallet.',
    ],
    benefits: [
      'Private keys stay on your device',
      'Vanity addresses for fun, branding or projects',
      'Compatible with Phantom, Backpack and Solflare',
      'Works on its own — not tied to a full project flow',
    ],
    warning:
      'Never share your private key. Anyone with your private key can control your wallet.',
    status: 'Live',
    url: TOOL_URLS.wallet,
    logoUrl: walletGeneratorLogo,
  },
  {
    id: 'token-builder',
    name: 'CBS Token Builder',
    headline: 'Create or manage SPL tokens.',
    whatItDoes:
      'Create a new SPL token with name, symbol, supply, decimals, logo and metadata — or update and present token metadata and controls where supported by the tool.',
    whenToUseIt:
      'Use it when you are launching a new token or when you already have a token and need metadata, branding, or authority updates.',
    whoItIsFor:
      'New projects creating their first token and existing token teams that need clearer metadata or control updates.',
    usageSteps: [
      'Open CBS Token Builder.',
      'Choose to create a new token or update an existing one where supported.',
      'Add name, symbol, supply, decimals and logo.',
      'Review metadata and authority settings.',
      'Confirm and create or update your token.',
    ],
    benefits: [
      'Create new SPL tokens from scratch',
      'Update token metadata where supported',
      'Authority and supply controls',
      'Useful even if you already have a token',
    ],
    status: 'Live',
    url: TOOL_URLS.tokenBuilder,
    logoUrl: tokenBuilderLogo,
  },
  {
    id: 'token-launcher',
    name: 'CBS Token Launcher',
    headline: 'Showcase your project.',
    whatItDoes:
      'Create a public project profile and launch presentation with your logo, links, description, and launch status so people can discover and understand your project.',
    whenToUseIt:
      'Use it when you want a clear public page for your token project — before launch, at launch, or after you are already live.',
    whoItIsFor:
      'Token creators and teams who want a professional public presence without building a full website first.',
    usageSteps: [
      'Open CBS Token Launcher.',
      'Add your project name, logo and description.',
      'Add links to your site, socials and token page.',
      'Set your launch or project status.',
      'Publish your public launch profile.',
    ],
    benefits: [
      'Public launch profile in one place',
      'Logo, links, description and status',
      'Helps people discover your project',
      'Works whether you are preparing or already live',
    ],
    status: 'Live',
    url: TOOL_URLS.tokenLauncher,
    logoUrl: tokenLauncherLogo,
  },
  {
    id: 'token-locker',
    name: 'CBS Token Locker',
    headline: 'Lock tokens and LP positions.',
    whatItDoes:
      'Lock SPL tokens or LP tokens on Solana with a public unlock date to show long-term commitment, transparency, and trust with your community.',
    whenToUseIt:
      'Use it after you hold tokens or LP tokens that you want to lock on-chain for a defined period.',
    whoItIsFor:
      'Projects and communities that already have tokens or LP tokens and want to demonstrate locked supply or liquidity.',
    usageSteps: [
      'Open CBS Token Locker.',
      'Connect your wallet.',
      'Select SPL tokens or LP tokens to lock.',
      'Choose lock duration and unlock date.',
      'Confirm the on-chain lock.',
    ],
    benefits: [
      'Lock SPL tokens or LP tokens on-chain',
      'Public unlock date for transparency',
      'Shows long-term commitment',
      'Useful for community and launch projects',
    ],
    status: 'Live',
    url: TOOL_URLS.tokenLocker,
    logoUrl: tokenLockerLogo,
  },
]

export const CBS_TOOLS_BY_ID = Object.fromEntries(
  CBS_TOOLS.map((tool) => [tool.id, tool]),
) as Record<string, CbsTool>
