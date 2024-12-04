
import { Button } from "@/components/ui/button"
import { MessageCircleQuestionIcon as QuestionCircle, Command, Bot, Code, X } from 'lucide-react'
import Image from "next/image"

export function BottomToolbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Image 
              src="/placeholder.svg" 
              alt="Rentbot" 
              width={20} 
              height={20} 
              className="mr-2"
            />
            租用BOT
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Command className="mr-2 h-4 w-4" />
            关于GMGN
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <QuestionCircle className="mr-2 h-4 w-4" />
            使用教程
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Bot className="mr-2 h-4 w-4" />
            电报BOT
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Code className="mr-2 h-4 w-4" />
            API
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <X className="mr-2 h-4 w-4" />
            Twitter
          </Button>
          <div className="text-sm text-muted-foreground">
            SOL: $235.65
          </div>
        </div>
      </div>
    </div>
  )
}

