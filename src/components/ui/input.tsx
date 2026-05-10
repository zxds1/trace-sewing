import * as React from 'react'

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(function Input(props, ref) {
  return (
    <input
      ref={ref}
      {...props}
      className={['rounded-none border-zinc-200 px-3 py-2 bg-white text-sm text-foreground outline-none', props.className].filter(Boolean).join(' ')}
    />
  )
})

Input.displayName = 'Input'

export default Input
