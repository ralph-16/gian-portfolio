import { buttonVariants } from "@/components/ui/button"
import { EnvelopeIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils"

export function Contact() {
    return (
        <section id="contact" className="md:h-56 lg:h-96 flex flex-col md:justify-center lg:justify-evenly gap-4 relative z-10 px-5 py-3">
            <h1 className="syne font-bold text-3xl md:text-center md:text-5xl lg:text-7xl">Let's Work Together</h1>
            <p className="dm-sans font-regular md:text-center md:text-lg md:px-8 lg:text-xl">I'm currently open to internships, freelance work, and interesting projects. Feel free to reach out.</p>
            <div className="flex gap-2 flex-col md:flex-row md:justify-center">
                <a href="mailto:gianraphaelbaldovino@gmail.com" className={cn(buttonVariants({ variant: "default", size: "lg" }), "dm-sans md:text-md lg:px-10 lg:py-6 lg:text-lg")}><EnvelopeIcon weight="regular" className="w-6 h-6 md:w-7 md:h-7" />Send me an email</a>
            </div>
        </section>
    )
}