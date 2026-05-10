import * as React from 'react'

export function Card({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={["bg-white rounded-none shadow-none", className].filter(Boolean).join(' ')}>{children}</div>
}

export function CardHeader({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={["px-6 py-4 border-b border-zinc-100", className].filter(Boolean).join(' ')}>{children}</div>
}

export function CardTitle({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={["text-sm font-bold", className].filter(Boolean).join(' ')}>{children}</div>
}

export function CardDescription({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={["text-xs text-zinc-500", className].filter(Boolean).join(' ')}>{children}</div>
}

export function CardContent({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={["p-6", className].filter(Boolean).join(' ')}>{children}</div>
}

export default Card
