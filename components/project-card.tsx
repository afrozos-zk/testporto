import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
}

export function ProjectCard({ id, title, description, image, tags, category }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="object-cover w-full h-48"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild>
          <Link href={`/projects/${category}/${id}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

