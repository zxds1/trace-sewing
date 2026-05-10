import * as React from 'react'

export function ScrollArea({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={["overflow-auto", className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

export default ScrollArea
