import { buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
    return (
        <section id="projects" className="z-10 flex flex-col gap-5 px-5 py-3">
            <h1 className="syne font-bold text-3xl lg:text-5xl lg:text-center">Projects</h1>
            <div className="flex flex-col gap-5 md:flex-row md:flex-wrap lg:justify-center lg:gap-8">
                <Card className="md:w-sm md:h-sm lg:w-md">
                    <img className="h-fit" src="daloy-project-draft.png" />
                    <CardHeader>
                        <CardTitle>
                            <p className="syne font-bold">Daloy</p>
                            <Badge variant="secondary" className="mr-1">Personal Project</Badge>
                            <Badge className="bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300 mx-1">In Progress</Badge>
                        </CardTitle>
                        <CardDescription>
                            <p className="dm-sans font-regular">An all-in-one productivity app currently being built with Next.js and Firebase (Pomodoro timer, habit tracker, and to-do list) unified in a single clean workspace.</p>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex gap-3">
                        <a href="https://github.com/ralph-16/daloy-project" target="_blank" className={buttonVariants({ variant: "outline", size: "icon" })}>
                            <img className="size-6 invert brightness-0" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                        </a>
                        <a href="https://daloy-project.vercel.app/" target="_blank" className={buttonVariants({ variant: "default", size: "lg" })}>Check Live Site</a>
                    </CardFooter>
                </Card>

                <Card className="md:w-sm md:h-sm lg:w-md">
                    <img className="h-fit" src="responsive_web_cert.png" />
                    <CardHeader>
                        <CardTitle>
                            <p className="syne font-bold">Responsive Web Design</p>
                            <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">freeCodeCamp Certification</Badge>
                        </CardTitle>
                        <CardDescription>
                            <p className="dm-sans font-regular">Projects built while learning HTML, CSS, Flexbox, and responsive design fundamentals.</p>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <a href="https://www.freecodecamp.org/certification/ralphhh/responsive-web-design" target="_blank" className={buttonVariants({ variant: "default", size: "lg" })}>View Certification</a>
                    </CardFooter>
                </Card>

                <Card className="md:w-sm md:h-sm lg:w-md">
                    <img className="h-fit" src="js_dsa_cert.png" />
                    <CardHeader>
                        <CardTitle>
                            <p className="syne font-bold">JavaScript Algorithms and Data Structures</p>
                            <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">freeCodeCamp Certification</Badge>
                        </CardTitle>
                        <CardDescription>
                            <p className="dm-sans font-regular">Projects built while learning core JavaScript, algorithms, and data structures.</p>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <a href="https://www.freecodecamp.org/certification/ralphhh/javascript-algorithms-and-data-structures-v8" target="_blank" className={buttonVariants({ variant: "default", size: "lg" })}>View Certification</a>
                    </CardFooter>
                </Card>

                <Card className="md:w-sm md:h-sm lg:w-md">
                    <img className="h-fit" src="fd_dev_cert.png" />
                    <CardHeader>
                        <CardTitle>
                            <p className="syne font-bold">Front-End Development Libraries</p>
                            <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">freeCodeCamp Certification</Badge>
                        </CardTitle>
                        <CardDescription>
                            <p className="dm-sans font-regular">Projects built with React, along with Redux, SASS, Bootstrap, and jQuery.</p>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <a href="https://www.freecodecamp.org/certification/ralphhh/front-end-development-libraries" target="_blank" className={buttonVariants({ variant: "default", size: "lg" })}>View Certification</a>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}