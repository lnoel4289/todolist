import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Example from './Example'

describe('Example', () => {
  it('should render correctly', () => {
    render(<Example />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
}) 