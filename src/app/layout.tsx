import { Content } from '../components/content'
import { Sidenav } from '../components/sidenav/sidenav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${inter.className} flex h-screen w-screen bg-zinc-200  justify-center items-center`}>
        <div className="flex w-4/5 h-4/5">
          <Sidenav/>
          <Content>
            {children}
          </Content>
        </div>
      </body>
    </html>
  )
}
