import type { Metadata } from 'next'
import Sidebar from '@/src/app/components/Sidebar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio - Breno Kazuo',
  description: 'Portfólio de Breno Kazuo',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="overflow-auto">
        {/* Desktop: sidebar fixo + conteúdo rolável */}
        <div className="hidden h-screen w-full lg:flex">
          <aside className="bg-background w-1/2 border-r border-zinc-800">
            <Sidebar />
          </aside>
          <main className="w-1/2 overflow-y-auto">{children}</main>
        </div>

        {/* Mobile: sidebar como section rolável + conteúdo embaixo */}
        <div className="lg:hidden">
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  )
}
