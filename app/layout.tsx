import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects in 3D Modeling, Arduino, and DIY",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="border-b">
            <nav className="container mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
              <div className="flex items-center">
                <Link href="/" className="mr-6">
                  <Image
                    src="/logoii.png" // Make sure to add your logo image in the public folder
                    alt="Home"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              <ul className="flex items-center space-x-4">
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center">
                        Projects <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href="/projects">All Projects</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/projects/3d-model">3D Model</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/projects/arduino">Arduino</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/projects/diy">DIY</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center">
                        Support <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href="https://saweria.co/yourusername" target="_blank" rel="noopener noreferrer">
                          Saweria
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="https://paypal.me/yourusername" target="_blank" rel="noopener noreferrer">
                          PayPal
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto py-8 px-4 md:px-6">{children}</main>
          <footer className="border-t">
            <div className="container mx-auto py-4 px-4 md:px-6 text-center text-sm text-muted-foreground">
              © 2025 ZK VastCraft. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'