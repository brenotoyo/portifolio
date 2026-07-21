import type { Metadata, Viewport } from 'next'
import Sidebar from '@/src/app/components/Sidebar'
import UseViewportHeight from '@/src/app/components/UseViewportHeight' // Importe o novo componente
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio - Breno Kazuo',
  description: 'Portfólio de Breno Kazuo',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Opcional: evita zoom automático em inputs no iPhone
  userScalable: false, // Opcional: evita que o usuário mude o zoom manualmente
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="overflow-hidden">
        {/* Ativa o cálculo da altura logo no início */}
        <UseViewportHeight />
        {/* Desktop: sidebar fixo + conteúdo rolável */}
        <div className="hidden h-screen w-full lg:flex">
          <aside className="bg-background w-1/2 border-r border-zinc-800">
            <Sidebar />
          </aside>
          <main className="h-full w-1/2 overflow-y-auto">{children}</main>
        </div>
        {/* Mobile: sidebar como section rolável + conteúdo embaixo */}
        <div
          className="w-full lg:hidden"
          style={{ height: 'var(--vh, 100vh)' }}
        >
          <main className="h-full w-full overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  )
}
