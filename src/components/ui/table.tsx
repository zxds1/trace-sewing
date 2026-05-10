import * as React from 'react'

export function Table({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={["w-full overflow-auto", className].filter(Boolean).join(' ')}>{children}</div>
}

export function TableHeader({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <thead className={className}>{children}</thead>
}

export function TableBody({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <tbody className={className}>{children}</tbody>
}

export function TableRow({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <tr className={className}>{children}</tr>
}

export function TableHead({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <th className={className}>{children}</th>
}

export function TableCell({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <td className={className}>{children}</td>
}

export default Table
