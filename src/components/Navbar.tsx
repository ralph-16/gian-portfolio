import { useState } from "react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ListIcon, UserIcon, CodeIcon, BriefcaseIcon, EnvelopeIcon } from "@phosphor-icons/react"



export function Navbar() {
    const [open, setOpen] = useState(false)

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
        setOpen(false)
    }

    return (
        <nav className="fixed top-4 left-4 z-20">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button>
                        <ListIcon weight="bold" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader>
                        <SheetTitle>
                            <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="syne font-bold text-2xl">gian-dev</a>
                        </SheetTitle>
                        <Separator />
                    </SheetHeader>
                    <div className="flex flex-col h-full gap-5 px-4">
                        <a href="#about" onClick={(e) => scrollToSection(e, "about")} className={buttonVariants({ variant: "ghost", size: "lg" })}><UserIcon weight="bold" /><span className="text-lg">About</span></a>
                        <a href="#skills" onClick={(e) => scrollToSection(e, "skills")} className={buttonVariants({ variant: "ghost", size: "lg" })}><CodeIcon weight="bold" /><span className="text-lg">Skills</span></a>
                        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className={buttonVariants({ variant: "ghost", size: "lg" })}><BriefcaseIcon weight="bold" /><span className="text-lg">Projects</span></a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className={buttonVariants({ variant: "ghost", size: "lg" })}><EnvelopeIcon weight="bold" /><span className="text-lg">Contact</span></a>
                    </div>
                    <SheetFooter>
                        <Separator />
                        <p className="dm-sans font-regular text-center">© 2026 Gian Raphael Baldovino</p>
                        <p className="dm-sans font-regular text-center">Built with React.js & Tailwind CSS</p>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </nav>
    )
}