import ElectricBorder from "./ElectricBorder"

export function About() {
    return (
        <section id="about" className="flex flex-col gap-4 relative z-10 px-5 py-3">
            <ElectricBorder
                color="#7C3AED"
                speed={1}
                chaos={0.02}
                className="size-fit"
            >
                <img src="/me_picture.JPG" className="rounded-2xl w-md h-md" alt="Gian Raphael" />
            </ElectricBorder>
            <h1 className="syne font-bold text-3xl">About Me</h1>
            <p className="dm-sans font-regular">Hey, I'm Gian, 19, based in Bulacan, Philippines, and fully committed to building a career in tech.</p>
            <p className="syne font-bold">What am I focused on? </p>
            <p className="dm-sans font-regular">I'm currently open to internships and freelance work. Outside of that I'm building real projects, sharpening my DSA skills, and learning in public.</p>
            <p className="syne font-bold">What drives me?</p>
            <p className="dm-sans font-regular">I'm drawn to tech because it never stops evolving. The complexity doesn't intimidate me, it's actually what keeps me hooked. I've always been someone who enjoys breaking down hard problems and figuring things out.</p>
        </section>
    )
}