import { Button, buttonVariants } from "@/components/ui/button"
import SplitText from "./SplitText";
import { BriefcaseIcon, EnvelopeIcon, FacebookLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";

export function Hero() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <section id="hero" className="h-screen flex flex-col justify-center gap-5 relative z-10 px-5">
            <p className="syne font-semibold text-lg self-start rounded-lg text-purple-400/75 bg-purple-800/25 border border-purple-950 py-1 px-3">Open to Opportunities</p>
            <SplitText
                tag="h1"
                text="Gian Raphael Baldovino"
                className="syne font-bold text-5xl"
                delay={50}
                duration={0.7}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
            />
            <p className="dm-sans text-3xl text-purple-200 font-semibold">Fullstack Developer</p>
            <p className="dm-sans font-bold">I build things that solve problems.</p>
            <p>Information Technology student based in the Philippines, focused on building web applications</p>
            <div className="flex gap-2">
                <a href="https://www.facebook.com/Gian.Raphael.Baldovino" target="_blank"><FacebookLogoIcon size={32} /></a>
                <a href="https://www.linkedin.com/in/gian-raphael-654516318/" target="_blank"><LinkedinLogoIcon size={32} /></a>
                <a href="https://github.com/ralph-16" target="_blank"><GithubLogoIcon size={32} /></a>
            </div>
            <div className="flex flex-col gap-2">
                <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className={buttonVariants({ variant: "default", size: "lg" })}><BriefcaseIcon />View Projects</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className={buttonVariants({ variant: "outline", size: "lg" })}><EnvelopeIcon />Contact Me</a>
            </div>
        </section>
    )
}