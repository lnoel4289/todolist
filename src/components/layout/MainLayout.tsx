import { FC, PropsWithChildren } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
} 