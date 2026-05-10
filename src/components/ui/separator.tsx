import * as React from 'react'

export function Separator({ className = '' }: { className?: string }) {
  return <div className={["w-full h-px bg-zinc-100", className].filter(Boolean).join(' ')} />
}

export default Separator
