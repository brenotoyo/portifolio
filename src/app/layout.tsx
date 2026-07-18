import type { Metadata } from 'next'
import Sidebar from '@/src/app/components/Sidebar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio - Breno Kazuo',
  description: 'Portfólio de Breno Kazuo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="overflow-hidden">
        {/* Container Principal */}
        <div className="flex h-screen w-screen flex-col lg:flex-row">
          {/* Lado Esquerdo: Fixo no Desktop */}
          <aside className="bg-background w-full border-b border-zinc-800 lg:h-screen lg:w-1/2 lg:border-r">
            <Sidebar />
          </aside>

          {/* Lado Direito: Rolevél (Scrollable) */}
          <main className="h-screen w-full lg:w-1/2">{children}</main>
        </div>
      </body>
    </html>
  )
}
