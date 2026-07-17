import { buttonVariants } from "@/components/ui/button"
import { BriefcaseIcon, EnvelopeIcon, FacebookLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

export function Hero() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <section id="hero" className="h-screen flex flex-col justify-center md:items-center gap-5 relative z-10 px-5">
            <p className="syne md:text-2xl font-semibold text-lg self-start md:self-center rounded-lg text-purple-400/75 bg-purple-800/25 border border-purple-950 py-1 px-3">Open to Opportunities</p>
            <h1 className="syne font-bold md:text-center text-5xl md:text-7xl lg:text-9xl">Gian Raphael Baldovino</h1>
            <p className="dm-sans text-3xl md:text-4xl text-purple-200 font-semibold">Fullstack Developer</p>
            <p className="dm-sans font-bold md:text-2xl">I build things that solve problems.</p>
            <p className="md:text-center md:px-3 md:text-2xl">Information Technology student based in the Philippines, focused on building web applications</p>
            <div className="flex gap-2">
                <a href="https://www.facebook.com/Gian.Raphael.Baldovino" target="_blank"><FacebookLogoIcon size={32} /></a>
                <a href="https://www.linkedin.com/in/gian-raphael-654516318/" target="_blank"><LinkedinLogoIcon size={32} /></a>
                <a href="https://github.com/ralph-16" target="_blank"><GithubLogoIcon size={32} /></a>
            </div>
            <div className="flex gap-2 flex-col md:flex-row">
                <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className={cn(buttonVariants({ variant: "default", size: "lg" }), "dm-sans md:text-md")}><BriefcaseIcon />View Projects</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "dm-sans md:text-md")}><EnvelopeIcon />Contact Me</a>
            </div>
        </section>
    )
}