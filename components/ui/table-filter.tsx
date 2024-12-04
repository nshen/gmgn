'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDown } from 'lucide-react'
import { useState } from "react"

interface FilterRange {
  min: string
  max: string
}

interface FilterState {
  pool: FilterRange
  marketCap: FilterRange
  selectedPool: string
  selectedMarketCap: string
}

export function TableFilter() {
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    pool: { min: '', max: '' },
    marketCap: { min: '', max: '' },
    selectedPool: '',
    selectedMarketCap: ''
  })

  const handleReset = () => {
    setFilters({
      pool: { min: '', max: '' },
      marketCap: { min: '', max: '' },
      selectedPool: '',
      selectedMarketCap: ''
    })
  }

  const handleApply = () => {
    // Apply filters logic here
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="text-sm font-normal">
          池子 <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="font-medium">池子($)</div>
            <div className="grid gap-2">
              {['$10K', '$100K', '$300K'].map((value) => (
                <Button
                  key={value}
                  variant={filters.selectedPool === value ? "secondary" : "outline"}
                  className="w-full justify-start font-normal"
                  onClick={() => setFilters({ ...filters, selectedPool: value })}
                >
                  {'>'}{value}
                </Button>
              ))}
              <div className="flex items-center gap-2">
                <Input 
                  placeholder="K"
                  value={filters.pool.min}
                  onChange={(e) => setFilters({
                    ...filters,
                    pool: { ...filters.pool, min: e.target.value }
                  })}
                  className="h-9"
                />
                <span>to</span>
                <Input 
                  placeholder="K"
                  value={filters.pool.max}
                  onChange={(e) => setFilters({
                    ...filters,
                    pool: { ...filters.pool, max: e.target.value }
                  })}
                  className="h-9"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-medium">MKT Cap($)</div>
            <div className="grid gap-2">
              {['$50K', '$100K', '$500K'].map((value) => (
                <Button
                  key={value}
                  variant={filters.selectedMarketCap === value ? "secondary" : "outline"}
                  className="w-full justify-start font-normal"
                  onClick={() => setFilters({ ...filters, selectedMarketCap: value })}
                >
                  {'>'}{value}
                </Button>
              ))}
              <div className="flex items-center gap-2">
                <Input 
                  placeholder="K"
                  value={filters.marketCap.min}
                  onChange={(e) => setFilters({
                    ...filters,
                    marketCap: { ...filters.marketCap, min: e.target.value }
                  })}
                  className="h-9"
                />
                <span>to</span>
                <Input 
                  placeholder="K"
                  value={filters.marketCap.max}
                  onChange={(e) => setFilters({
                    ...filters,
                    marketCap: { ...filters.marketCap, max: e.target.value }
                  })}
                  className="h-9"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleReset}
            >
              重置
            </Button>
            <Button 
              className="flex-1"
              onClick={handleApply}
            >
              应用
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

