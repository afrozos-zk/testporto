import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const categories = [
  {
    title: "3D Model Projects",
    description: "Explore my 3D modeling work, including character designs, environments, and more.",
    slug: "3d-model",
  },
  {
    title: "Arduino Projects",
    description: "Discover my Arduino-based creations, from smart home devices to interactive installations.",
    slug: "arduino",
  },
  {
    title: "DIY Projects",
    description: "Check out my hands-on DIY projects, ranging from upcycled furniture to custom electronics.",
    slug: "diy",
  },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.slug}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <Link
              href={`/projects/${category.slug}`}
              className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-block mt-4 rounded-md"
            >
              View Projects
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

