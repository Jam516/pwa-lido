"use client"
import "@/styles/globals.css"
import { Metadata } from "next"
import { MainMenu } from "@/components/main-menu"
import { LidoLogo } from "@/components/lidologo"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { mainnet } from "wagmi/chains";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

import { DesktopBlocker } from "@/components/desktop-blocker"

const alchemyId = process.env.ALCHEMY_API_KEY;
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID;

const chains = [mainnet];

const config = createConfig(
  getDefaultConfig({
    alchemyId,
    walletConnectProjectId: walletConnectProjectId || "default",
    chains,
    appName: "TipJar",
  })
);

function HeadBlock() {
  return (
    <div className="flex w-full justify-between px-3 pt-3">
      <LidoLogo />
      <ConnectKitButton />
    </div>
  );
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="apple-mobile-web-app-title" content="offline-plugin" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >

          <div className="relative flex min-h-screen flex-col">
            {/* <DesktopBlocker /> */}
            <div className="flex-1">
              <WagmiConfig config={config}>
                <ConnectKitProvider>
                  <HeadBlock />
                  {children}
                </ConnectKitProvider>
              </WagmiConfig>
            </div>
            <MainMenu />
          </div>
        </body>
      </html>
    </>
  )
}
