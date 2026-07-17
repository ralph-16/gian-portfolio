import { buttonVariants } from "@/components/ui/button"
import { EnvelopeIcon } from "@phosphor-icons/react";

export function Contact() {
    return (
        <section id="contact" className="flex flex-col justify-center gap-4 relative z-10 px-5 py-3">
            <h1 className="syne font-bold text-3xl">Let's Work Together</h1>
            <p className="dm-sans font-regular">I'm currently open to internships, freelance work, and interesting projects. Feel free to reach out.</p>
            <a href="mailto:gianraphaelbaldovino@gmail.com" className={buttonVariants({ variant: "default", size: "lg" })}><EnvelopeIcon />Send me an email</a>
        </section>
    )
}