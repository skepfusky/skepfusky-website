import { useRef } from "react"
import { useSpring, animated } from "react-spring"
import ReactMarkdown from "react-markdown"
import { LinkUnderline } from "../Links"
import LazyImg from "../LazyImg"
import { cloudinary } from "@/utils/global"

export interface PortfolioItemProps {
  category: "website" | "school project" | "discography" | "others" | "dev project"
  link?: string
  title?: string
  description?: string
  img?: string
}

const calc = (x: number, y: number, rect: any) => [
  (y - rect.top - rect.height / 2) / 50,
  -(x - rect.left - rect.width / 2) / 50
]

const trans = (x: number, y: number) =>
  `perspective(850px) rotateX(${x}deg) rotateY(${y}deg)`

export default function PortfolioItem(props: PortfolioItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  const config = {
    mass: 1,
    tension: 250,
    friction: 35
  }

  const [springProps, set] = useSpring(() => ({ xy: [0, 0], config }))

  return (
    <animated.div
      ref={ref}
      role="listitem"
      className="group relative bg-gradient-to-br from-sona-borahaealt-900 to-borahae-dark rounded-lg
			before:content-[''] before:rounded-lg before:block before:absolute before:inset-0 before:-z-1 before:bg-gradient-to-tr
			before:from-sona-borahae-800 before:to-sona-royalblue-800
			before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500"
      style={{ transform: springProps.xy.to(trans) }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect()
        set({ xy: calc(e.clientX, e.clientY, rect) })
      }}
      onMouseLeave={() => set({ xy: [0, 0] })}
    >
      <div className="relative w-full h-[14.5rem] overflow-hidden rounded-tl-lg rounded-tr-lg">
        <LazyImg
          src={props.img ?? cloudinary("/v1665156812/sample.jpg")}
          objectFit="cover"
          lazy
        />
      </div>
      <article className="px-6 py-5 cursor-default flex flex-col gap-y-1.5">
        <span className="font-jetbrains-mono text-xs bg-black bg-opacity-40 py-0.5 px-2 rounded-md uppercase mr-auto select-none">
          {props.category}
        </span>
        <h2
          data-text={props.title}
          className="relative before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:right-0
				before:bg-gradient-to-r before:from-sona-borahae-500 before:to-sona-skycyan-600 before:bg-clip-text before:z-5 before:text-transparent
				before:group-hover:opacity-0 before:transition-opacity before:duration-500"
        >
          {props.title}
        </h2>
        <ReactMarkdown>{props.description ?? ""}</ReactMarkdown>
        <LinkUnderline
          link={props.link ?? ""}
          name="View project"
          className="text-sm"
        />
      </article>
    </animated.div>
  )
}