type ButtonProps = {
  children: React.ReactNode
  variant?: string
  disabled?: boolean
  id?: string
}

export const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  )
}
