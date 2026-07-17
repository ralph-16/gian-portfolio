export function Skills() {
    return (
        <section id="skills" className="relative z-10 px-5 py-3">
            <h1 className="syne font-bold text-3xl">Skills</h1>
            <p className="syne font-bold pt-1">Programming Languages</p>
            <div className="flex flex-col gap-3 py-3">
                <div className="flex justify-center gap-3">
                    <img className="size-18" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img className="size-18" alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <img className="size-18" alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <img className="size-18" alt="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                </div>
                <div className="flex justify-center gap-3">
                    <img className="size-18" alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    <img className="size-18" alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    <img className="size-18" alt="PHP" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                </div>
            </div>
            <p className="syne font-bold pt-1">Frameworks & Libraries</p>
            <div className="flex flex-col gap-3 py-3">
                <div className="flex justify-center gap-3">
                    <img className="size-18" alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    <img className="size-18" alt="Redux" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                    <img className="size-18" alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                </div>
                <div className="flex justify-center gap-3">
                    <img className="size-18" alt="Tailwind" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    <img className="size-18" alt="JQuery" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
                </div>
            </div>
            <p className="syne font-bold pt-1">Database & Backend</p>
            <div className="flex justify-center gap-3 py-3">
                <img className="size-18" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                <img className="size-18" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" />
                <img className="size-18" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" />
                <img className="size-18 invert brightness-0" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
            </div>
            <p className="syne font-bold pt-1">Tools</p>
            <div className="flex justify-center gap-3 py-3">
                <img className="size-18" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <img className="size-18 invert brightness-0" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                <img className="size-18" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                <img className="size-18 invert brightness-0" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />
            </div>
        </section>
    )
}