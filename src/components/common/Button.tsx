import { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === 'primary'
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-800'
      }`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Chargement...' : children}
    </button>
  )
} 