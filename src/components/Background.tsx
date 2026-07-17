import Ferrofluid from "./Ferrofluid"

export function Background() {
    return (
        <div className="fixed h-screen inset-0 -z-10">
            <Ferrofluid
                colors={["#4a0260", "#350074", "#19069a"]}
                speed={0.1}
                scale={1.6}
                turbulence={1}
                fluidity={0.1}
                rimWidth={0.2}
                sharpness={2.5}
                shimmer={1.5}
                glow={2}
                flowDirection="down"
                opacity={1}
                mouseInteraction
                mouseStrength={1}
                mouseRadius={0.35}
            />
        </div>
    )
}