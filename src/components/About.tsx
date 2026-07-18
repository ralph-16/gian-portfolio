export function About() {
    return (
        <section id="about" className="flex flex-col gap-4 relative z-10 px-5 py-3 md:py-5 md:grid md:grid-cols-2 md:grid-rows-1 lg:px-8">
            <div className="w-full h-64 md:h-full lg:flex lg:justify-center">
                <img src="/me_picture.JPG" className="shadow-md shadow-purple-500/50 rounded-2xl w-full h-full lg:w-xl object-cover" alt="Gian Raphael" />
            </div>
            <div className="md:flex md:flex-col md:gap-2 lg:justify-center">
                <h1 className="syne font-bold text-3xl md:text-4xl lg:text-5xl">About Me</h1>
                <p className="dm-sans font-regular lg:text-lg">Hey, I'm Gian, 19, based in Bulacan, Philippines, and fully committed to building a career in tech.</p>
                <p className="syne font-bold md:text-xl lg:text-2xl">What am I focused on? </p>
                <p className="dm-sans font-regular lg:text-lg">I'm currently open to internships and freelance work. Outside of that I'm building real projects, sharpening my DSA skills, and learning in public.</p>
                <p className="syne font-bold md:text-xl lg:text-2xl">What drives me?</p>
                <p className="dm-sans font-regular lg:text-lg">I'm drawn to tech because it never stops evolving. The complexity doesn't intimidate me, it's actually what keeps me hooked. I've always been someone who enjoys breaking down hard problems and figuring things out.</p>
            </div>
        </section>
    )
}