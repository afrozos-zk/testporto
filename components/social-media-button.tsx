import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface SocialMediaButtonProps {
  name: string
  iconSrc: string
  url: string
}

export function SocialMediaButton({ name, iconSrc, url }: SocialMediaButtonProps) {
  return (
    <Button asChild variant="outline" className="w-full">
      <Link href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <Image src={iconSrc || "/placeholder.svg"} alt={`${name} icon`} width={40} height={40} className="mr-2" />
        {name}
      </Link>
    </Button>
  )
}

