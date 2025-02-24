import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8">
        I'm a passionate creator specializing in 3D modeling, Arduino projects, and DIY crafts. Explore my work and see
        how I bring ideas to life through technology and creativity.
      </p>
      <div className="flex justify-center space-x-4">
        <Button asChild>
          <Link href="/projects">Explore Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}

