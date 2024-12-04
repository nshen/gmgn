'use client'

import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

const timeRanges = [
  { label: "1m", value: "1m" },
  { label: "5m", value: "5m" },
  { label: "1h", value: "1h" },
  { label: "6h", value: "6h" },
  { label: "24h", value: "24h" },
]

export function TimeFilter({ selected = "24h", onSelect }: { selected?: string, onSelect?: (value: string) => void }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">热门</span>
        <ChevronDown className="h-4 w-4" />
      </div>
      <Button variant="ghost" size="sm" className="text-sm">
        下个监察
      </Button>
      <div className="flex bg-muted rounded-md p-0.5">
        {timeRanges.map((range) => (
          <Button
            key={range.value}
            variant={selected === range.value ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onSelect?.(range.value)}
            className={`
              text-xs px-3 h-7
              ${selected === range.value ? 'bg-background shadow-sm' : 'hover:bg-background/50'}
              ${selected === range.value ? 'text-foreground' : 'text-muted-foreground'}
            `}
          >
            {range.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

