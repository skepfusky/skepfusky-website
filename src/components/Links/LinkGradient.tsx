import Link from "next/link"
import { SharedBtnProps } from "@/utils/SharedBtnProps"

interface LinkGradientProps extends SharedBtnProps {}

export function LinkGradient(props: LinkGradientProps) {
  return (
    <Link href={props.link ?? ""}>
      <a className="relative uppercase bg-clip-text font-bold hover:text-transparent bg-gradient-to-tr from-sona-royalblue-500 to-sona-borahaealt-400">
        {props.name}
      </a>
    </Link>
  )
}