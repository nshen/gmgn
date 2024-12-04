'use client'
import Image from "next/image"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeChanger } from '@/components/ui/theme-changer';
import { useLanguage } from '@/lib/language-provider';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { Search, Menu } from 'lucide-react'
import { BottomToolbar } from "@/components/ui/bottom-toolbar";
import { SettingsDropdown } from "@/components/ui/settings-dropdown";
import { TimeFilter } from "@/components/ui/time-filter";
import { useState } from "react";
import { TokenTable } from "@/components/ui/token-table";
// import { NetworkBadge } from "@/components/network-badge"
// import { SettingsDropdown } from "@/components/settings-dropdown"
// import { BottomToolbar } from "@/components/bottom-toolbar"
// import { ThemeProvider } from "@/providers/theme-provider"
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet"
//
//
// Helper function to generate random data
function generateMockData(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    name: `TOKEN${i + 1}`,
    address: `0x${Math.random().toString(16).slice(2, 8)}...${Math.random().toString(16).slice(2, 4)}`,
    price: Math.random() * 1000,
    priceUsd: (Math.random() * 100).toFixed(4),
    volume: Math.floor(Math.random() * 100000),
    change1m: (Math.random() * 20 - 10).toFixed(1),
    change5m: (Math.random() * 20 - 10).toFixed(1),
    change1h: (Math.random() * 20 - 10).toFixed(1),
    holdersActive: Math.floor(Math.random() * 50000),
    holdersTotal: Math.floor(Math.random() * 100000),
    marketCap: Math.floor(Math.random() * 1000000),
    verified: Math.random() > 0.5,
    time: `${Math.floor(Math.random() * 24)}h`,
    trades: `${Math.floor(Math.random() * 10)}/${Math.floor(Math.random() * 20)}`
  }))
}

const mockData = generateMockData(50)

export default function Home() {
  const { t } = useLanguage()
  const [timeRange, setTimeRange] = useState("24h")
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-4 flex h-14 items-center">
          <div className="flex items-center">
            {/* <Sheet> */}
            {/*   <SheetTrigger asChild> */}
            {/*     <Button variant="ghost" size="icon" className="md:hidden mr-2"> */}
            {/*       <Menu className="h-5 w-5" /> */}
            {/*     </Button> */}
            {/*   </SheetTrigger> */}
            {/*   <SheetContent side="left"> */}
            {/*     <nav className="flex flex-col space-y-4 mt-4"> */}
            {/*       <Link href="/new" className="text-sm font-medium">{t('newMarket')}</Link> */}
            {/*       <Link href="/hot" className="text-sm font-medium">{t('hot')}</Link> */}
            {/*       <Link href="/explore" className="text-sm font-medium">{t('explore')}</Link> */}
            {/*       <Link href="/holding" className="text-sm font-medium">{t('holding')}</Link> */}
            {/*       <Link href="/about" className="text-sm font-medium">{t('about')}</Link> */}
            {/*     </nav> */}
            {/*   </SheetContent> */}
            {/* </Sheet> */}
            <Link href="/" className="flex items-center space-x-2">
              {/* <Image */}
              {/*   src="/placeholder.svg" */}
              {/*   alt="GMGN Logo" */}
              {/*   width={32} */}
              {/*   height={32} */}
              {/*   className="rounded-full" */}
              {/* /> */}
              <span className="font-bold hidden md:inline">GMGN</span>
            </Link>
            <nav className="hidden md:flex items-center ml-8 space-x-4">
              <Link href="/new" className="text-sm font-medium hover:text-primary">{t('newMarket')}</Link>
              <Link href="/hot" className="text-sm font-medium hover:text-primary">{t('hot')}</Link>
              <Link href="/explore" className="text-sm font-medium hover:text-primary">{t('explore')}</Link>
              <Link href="/holding" className="text-sm font-medium hover:text-primary">{t('holding')}</Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary">{t('about')}</Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <div className="hidden md:flex relative">
              <Input
                type="search"
                placeholder={t('search')}
                className="w-full max-w-[300px] bg-muted"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                {/* <NetworkBadge network="sol" /> */}
                {/* <NetworkBadge network="trx" /> */}
                {/* <NetworkBadge network="eth" /> */}
                {/* <NetworkBadge network="bnb" /> */}
                {/* <NetworkBadge network="matic" /> */}
              </div>
              <div className="flex md:hidden items-center gap-1">
                {/* <NetworkBadge network="sol" iconOnly /> */}
                {/* <NetworkBadge network="trx" iconOnly /> */}
                {/* <NetworkBadge network="eth" iconOnly /> */}
              </div>
            </div>
            <SettingsDropdown />
            <Button variant="outline" className="hidden md:inline-flex ml-2">{t('connect')}</Button>
            <Button variant="outline" size="icon" className="md:hidden w-8 h-8">
              <Image
                src="/placeholder.svg"
                alt="Connect Wallet"
                width={16}
                height={16}
                className="rounded-full"
              />
            </Button>
          </div>
        </div>
      </header>
      <main className="min-h-[calc(100vh-7rem)]">
        <div className="px-4">
          <div className="mb-6 flex items-center justify-between">
            <TimeFilter selected={timeRange} onSelect={setTimeRange} />
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">{t('filter')}</span>
            </div>
          </div>
          {/* <TokenTable data={mockData} /> */}

          {/* <TokenTable data={mockData.map(item => ({ ...item, change1m: parseFloat(item.change1m) }))} /> */}

          <TokenTable data={mockData.map(item => ({ ...item, change1m: parseFloat(item.change1m), change5m: parseFloat(item.change5m), change1h: parseFloat(item.change1h) }))} />
        </div>
      </main>
      <BottomToolbar />
    </div>


  );
}

// {/* <div className='w-full h-screen flex flex-col'> */}
// {/*   <div className='w-full p-4 flex justify-end'> */}
// {/*     <ConnectButton accountStatus="full" chainStatus="full" showBalance={false} /> */}
// {/*   </div> */}
// {/*   <div className='flex justify-center'> */}
// {/*     <ThemeChanger></ThemeChanger> */}
// {/*   </div> */}
    // {/* </div> */}
