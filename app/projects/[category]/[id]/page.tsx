import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const projects = {
  "3d-model": [
    {
      id: "futuristic-city",
      title: "Futuristic City",
      description: "A detailed 3D model of a futuristic cityscape with flying cars and towering skyscrapers.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Blender", "3D Modeling", "Sci-Fi"],
      fullDescription:
        "This project showcases a vibrant and detailed futuristic cityscape. The model features intricate architectural designs, a network of flying cars, and a mix of natural and technological elements. Created using Blender, this project pushed the boundaries of my 3D modeling skills and allowed me to explore complex scene composition and lighting techniques.",
      challenges:
        "One of the main challenges was balancing detail with performance, ensuring the scene remained manageable while still looking impressive. I also spent considerable time on the lighting to create a believable day-to-night cycle within the city.",
      outcome:
        "The final result is a captivating 3D environment that tells a story of a possible future. This project has been well-received in online 3D modeling communities and has been used as a backdrop for a sci-fi short film.",
    },
    {
      id: "character-design",
      title: "Character Design",
      description: "A collection of 3D character models for an animated short film.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Maya", "Character Design", "Animation"],
      fullDescription:
        "This project involved creating a diverse cast of characters for an animated short film. Each character was carefully designed to have a unique personality and style, while still fitting cohesively within the film's universe.",
      challenges:
        "The biggest challenge was ensuring each character was distinct yet part of a cohesive whole. I also had to optimize the models for animation, which required careful consideration of topology and rigging.",
      outcome:
        "The characters were successfully used in the short film, which went on to win awards at several animation festivals. The project significantly improved my skills in character design and preparation for animation.",
    },
  ],
  arduino: [
    {
      id: "smart-home",
      title: "Smart Home System",
      description: "An Arduino-based smart home system that controls lighting, temperature, and security.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Arduino", "IoT", "C++"],
      fullDescription:
        "This smart home system uses Arduino to control various aspects of a home environment. It includes modules for automated lighting, temperature control, and a security system with motion sensors and camera integration.",
      challenges:
        "Integrating different types of sensors and actuators was complex, as was ensuring reliable wireless communication between components. Power management was also a significant consideration to make the system efficient.",
      outcome:
        "The system has been successfully implemented in my own home, significantly reducing energy consumption and improving security. It has also served as a great learning platform for IoT and home automation technologies.",
    },
    {
      id: "weather-station",
      title: "Weather Station",
      description: "A DIY weather station that measures temperature, humidity, and air pressure.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Arduino", "Sensors", "Data Logging"],
      fullDescription:
        "This project is a fully functional weather station built using Arduino. It collects data on temperature, humidity, air pressure, wind speed, and rainfall. The data is logged locally and can also be accessed remotely via a web interface.",
      challenges:
        "Ensuring accurate calibration of all sensors was crucial. Additionally, creating a weather-resistant housing for the outdoor components and managing power for continuous operation were significant challenges.",
      outcome:
        "The weather station has been operating reliably for over a year, providing valuable local weather data. The project has been replicated by several community members, and the data is now being used by a local farming cooperative to assist with crop management.",
    },
  ],
  diy: [
    {
      id: "upcycled-furniture",
      title: "Upcycled Furniture",
      description: "A series of furniture pieces created from reclaimed materials and old electronics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Upcycling", "Woodworking", "Electronics"],
      fullDescription:
        "This project involves creating functional and aesthetically pleasing furniture from reclaimed materials and discarded electronics. Each piece is unique, combining traditional woodworking techniques with modern technology to create conversation pieces that are both functional and artistic.",
      challenges:
        "Working with reclaimed materials often meant dealing with inconsistent qualities and sizes. Integrating electronic components into furniture while maintaining functionality and safety was also a significant challenge.",
      outcome:
        "The furniture series has gained attention in local art circles and has been featured in a sustainable living magazine. It has also inspired a workshop series teaching others about upcycling and integrating technology into traditional crafts.",
    },
    {
      id: "vertical-garden",
      title: "Vertical Garden",
      description: "An automated vertical garden system for urban spaces with limited room for traditional gardens.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Gardening", "Automation", "Sustainable Living"],
      fullDescription:
        "This vertical garden system is designed for urban environments with limited space. It features an automated watering system, optimal light management, and can be controlled and monitored via a smartphone app. The system is modular, allowing for easy expansion and customization.",
      challenges:
        "Balancing water distribution for plants at different heights was complex. Creating a user-friendly interface for monitoring and control required integrating several technologies. Ensuring the structure was lightweight yet sturdy enough to support fully grown plants was also challenging.",
      outcome:
        "The vertical garden has been successfully implemented in several urban homes and a local community center. It has sparked interest in urban gardening and has been used as a teaching tool for sustainable living practices in schools.",
    },
  ],
}

export default function Project({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params
  const project = projects[category as keyof typeof projects]?.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-auto mb-6 rounded-lg"
      />
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <Badge key={index} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <p className="text-lg mb-6">{project.fullDescription}</p>
      <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
      <p className="mb-6">{project.challenges}</p>
      <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
      <p>{project.outcome}</p>
    </div>
  )
}

