import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { Parallax } from "react-scroll-parallax"
import styles from "@/styles/Home.module.scss"

import { ParallaxDisable } from "@/models/Context"

export default function HeroHeader() {
	const skills = [
		"Experienced video editor",
		"Indie musician",
		"Filmmaker",
		"Amateur photographer",
		"Full-stack web developer",
		"Web and UI/UX designer",
		"Novice VFX artist"
	]

	const [removeCringe, isRemovedCringe] = useState("")

	useEffect(() => {
		window.addEventListener("scroll", removeDatCringe)
		return () => window.removeEventListener("scroll", removeDatCringe)
	}, [])

	const removeDatCringe = () => {
		if (window !== undefined) {
			if (window.scrollY > 200) {
				isRemovedCringe("opacity-0 pointer-events-none")
				// add aria-hidden to the navbar to prevent screen readers from reading the navbar
				const appendHidden: any = document.getElementById(
					`${styles["scroll-down"]}`
				)
				appendHidden.setAttribute("aria-hidden", "true")
			}
		}
	}

	const { disableParallax } = useContext(ParallaxDisable)

	return (
		<div className={styles["hero-header"]}>
			<div className={styles["hero-contents"]}>
				<span className="text-[2.5rem] lg:text-6xl md:text-4xl flex items-center font-ubuntu-mono">
					<span>&lt;</span>
					<span id="highlight">skepfusky</span>
					<span>&#47;&gt;</span>
				</span>
				<div className="w-[60%] flex flex-wrap gap-2 uppercase">
					{skills.map((skill, index) => (
						<span key={index} id={styles["skill-item"]}>
							{skill}
						</span>
					))}
				</div>
				<div>
					<Link href="/about" passHref>
						More About Meh
					</Link>
					<Link href="/#projects" passHref>
						Projects
					</Link>
					<Link href="/#videos" passHref>
						Videos
					</Link>
					<Link href="/#music" passHref>
						Music
					</Link>
				</div>
			</div>
			<div className={styles["artwork-container"]}>
				<div className={styles["hero-parallax-container"]}>
					<Parallax
						speed={-35}
						disabled={disableParallax}
						className={styles["hero-parallax-avatar"]}
					>
						<Image
							src="/static/avatars/FormalAvatar-SVG.svg"
							alt="Skepfusky"
							objectFit="contain"
							layout="fill"
							priority={true}
							className="pointer-events-none"
						/>
						<span className={styles["artwork-sublabel"]}>
							Art by{" "}
							<Link href="https://twitter.com/skepfuskyjs">
								<a className="gradient-link">
									<FaIcon icon={faTwitter} className="mx-1" size="sm" />
									@skepfuskyjs
								</a>
							</Link>
						</span>
					</Parallax>
				</div>
				<Parallax
					speed={-30}
					disabled={disableParallax}
					className={styles["hero-parallax-bg"]}
				></Parallax>
			</div>
			<div id={styles["scroll-down"]} className={removeCringe}>
				<span>Scroll down for cringe</span>
				<FaIcon icon={faAngleDown} size="lg" />
			</div>
		</div>
	)
}