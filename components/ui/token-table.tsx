'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown, ChevronUp, ArrowUpDown, Star, MoreHorizontal, Flame } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { useState } from "react"
import { TableFilter } from "./table-filter"
import { cn } from "@/lib/utils"

interface TokenData {
  id: string
  name: string
  address: string
  price: number
  priceUsd: string
  volume: number
  change1m: number
  change5m: number
  change1h: number
  holdersActive: number
  holdersTotal: number
  marketCap: number
  verified: boolean
  time: string
  trades: string
}

type SortKey = keyof TokenData
type SortOrder = 'asc' | 'desc'

export function TokenTable({ data: initialData }: { data: TokenData[] }) {
  const [data, setData] = useState(initialData)
  const [sortKey, setSortKey] = useState<SortKey>('marketCap')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  const sortData = (key: SortKey) => {
    const order = key === sortKey && sortOrder === 'asc' ? 'desc' : 'asc'
    setSortKey(key)
    setSortOrder(order)
    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return order === 'asc' ? -1 : 1
      if (a[key] > b[key]) return order === 'asc' ? 1 : -1
      return 0
    })
    setData(sorted)
  }

  const renderSortIcon = (key: SortKey) => {
    if (sortKey !== key) return <ArrowUpDown className="ml-2 h-4 w-4" />
    return sortOrder === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
  }

  return (
    <div className="rounded-lg border border-border/40 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[50px] pl-4 hidden md:table-cell">
              <Checkbox />
            </TableHead>
            <TableHead className="min-w-[240px]">
              <Button variant="ghost" onClick={() => sortData('name')} className="font-medium">
                代币 {renderSortIcon('name')}
              </Button>
            </TableHead>
            <TableHead className="min-w-[120px]">
              <Button variant="ghost" onClick={() => sortData('price')} className="font-medium">
                价格 {renderSortIcon('price')}
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell">
              <div className="flex items-center space-x-2">
                <TableFilter />
                {renderSortIcon('marketCap')}
              </div>
            </TableHead>
            <TableHead className="hidden md:table-cell">
              <Button variant="ghost" onClick={() => sortData('volume')} className="font-medium">
                交易数 {renderSortIcon('volume')}
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell">
              <Button variant="ghost" onClick={() => sortData('trades')} className="font-medium">
                买卖/KOL {renderSortIcon('trades')}
              </Button>
            </TableHead>
            <TableHead className="min-w-[100px] hidden md:table-cell">
              <Button variant="ghost" onClick={() => sortData('holdersActive')} className="font-medium">
                持有者 {renderSortIcon('holdersActive')}
              </Button>
            </TableHead>
            <TableHead className="min-w-[80px] text-right hidden md:table-cell">
              <Button variant="ghost" onClick={() => sortData('change1h')} className="font-medium">
                1h {renderSortIcon('change1h')}
              </Button>
            </TableHead>
            <TableHead className="sticky right-0 bg-background min-w-[80px] text-right">
              操作
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((token) => (
            <TableRow key={token.id} className="hover:bg-muted/50">
              <TableCell className="pl-4 hidden md:table-cell">
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 hidden md:flex">
                    <Star className="h-4 w-4" />
                  </Button>
                  <div className="relative">
                    <Image 
                      src="/placeholder.svg" 
                      alt={token.name} 
                      width={24} 
                      height={24} 
                      className="rounded-full"
                    />
                    {token.verified && (
                      <div className="absolute -top-1 -right-1">
                        <Flame className="h-3 w-3 text-orange-500" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium flex items-center gap-1">
                      {token.name}
                      <span className="text-xs text-muted-foreground">{token.time}</span>
                    </div>
                    <div className="text-xs text-muted-foreground hidden md:block">{token.address}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="font-medium">${token.priceUsd}</div>
                <div className="text-xs text-muted-foreground">{token.price.toLocaleString()} K</div>
              </TableCell>
              <TableCell className="hidden md:table-cell">${token.marketCap.toLocaleString()}</TableCell>
              <TableCell className="hidden md:table-cell">{token.volume.toLocaleString()}</TableCell>
              <TableCell className="hidden md:table-cell">{token.trades}</TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="text-xs">
                  <span className="text-green-500">{token.holdersActive.toLocaleString()}</span>
                  <span className="text-muted-foreground">/{token.holdersTotal.toLocaleString()}</span>
                </div>
              </TableCell>
              <TableCell className={cn(
                "text-right hidden md:table-cell",
                token.change1h >= 0 ? "text-green-500" : "text-red-500"
              )}>
                {token.change1h > 0 ? "+" : ""}{token.change1h}%
              </TableCell>
              <TableCell className="sticky right-0 bg-background">
                <div className="flex justify-end">
                  <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                    买入
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

