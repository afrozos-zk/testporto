import { SocialMediaButton } from "@/components/social-media-button"

const socialLinks = [
  {
    name: "Afrozos",
    iconSrc: "/instagram.png",
    url: "https://instagram.com/afrozos",
  },
  {
    name: "Zk VastCraft",
    iconSrc: "/instagram.png",
    url: "https://instagram.com/zkvastcraft",
  },
  {
    name: "YouTube",
    iconSrc: "/youtube.png",
    url: "https://youtube.com/@afrozos",
  },
  {
    name: "X",
    iconSrc: "/xlogo.png",
    url: "https://x.com/afrozos",
  },
]

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Connect With Me</h1>
      <p className="text-center mb-8">Feel free to reach out or follow me on any of these platforms:</p>
      <div className="grid gap-8">
        {socialLinks.map((link, index) => (
          <SocialMediaButton key={index} {...link} />
        ))}
      </div>
    </div>
  )
}

