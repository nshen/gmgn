'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const NextThemesProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableSystem={false}
    disableTransitionOnChange
  >{children}</NextThemesProvider>
}
