import { ProjectCard } from "@/components/project-card"
import { notFound } from "next/navigation"

const projects = {
  "3d-model": [
    {
      id: "futuristic-city",
      title: "Futuristic City",
      description: "A detailed 3D model of a futuristic cityscape with flying cars and towering skyscrapers.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Blender", "3D Modeling", "Sci-Fi"],
    },
    {
      id: "character-design",
      title: "Character Design",
      description: "A collection of 3D character models for an animated short film.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Maya", "Character Design", "Animation"],
    },
  ],
  arduino: [
    {
      id: "smart-home",
      title: "Smart Home System",
      description: "An Arduino-based smart home system that controls lighting, temperature, and security.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Arduino", "IoT", "C++"],
    },
    {
      id: "weather-station",
      title: "Weather Station",
      description: "A DIY weather station that measures temperature, humidity, and air pressure.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Arduino", "Sensors", "Data Logging"],
    },
  ],
  diy: [
    {
      id: "upcycled-furniture",
      title: "Upcycled Furniture",
      description: "A series of furniture pieces created from reclaimed materials and old electronics.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Upcycling", "Woodworking", "Electronics"],
    },
    {
      id: "vertical-garden",
      title: "Vertical Garden",
      description: "An automated vertical garden system for urban spaces with limited room for traditional gardens.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Gardening", "Automation", "Sustainable Living"],
    },
  ],
}

export default function ProjectCategory({ params }: { params: { category: string } }) {
  const category = params.category
  const categoryProjects = projects[category as keyof typeof projects]

  if (!categoryProjects) {
    notFound()
  }

  const categoryTitles = {
    "3d-model": "3D Model Projects",
    arduino: "Arduino Projects",
    diy: "DIY Projects",
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{categoryTitles[category as keyof typeof categoryTitles]}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoryProjects.map((project) => (
          <ProjectCard key={project.id} {...project} category={category} />
        ))}
      </div>
    </div>
  )
}

