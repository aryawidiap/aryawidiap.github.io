import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type Project from "../_models/Project";

export default function ProjectCard(
    { project }: {project: Project}
) {
    return (
        <li
            className="flex flex-col outline p-3 rounded-xl max-w-96 md:w-auto bg-stone-800 hover:shadow-md hover:shadow-white hover:scale-115 transition">
            <Image src={project.thumbnailLink} width={1000} height={1000}
                alt="" className="rounded-xl h-48 w-96 object-cover mb-4 object-top" />
            <div className="mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
            </div>
            <div className="flex gap-4">
                <Link href={project.repositoryLink}
                    className="bg-white px-3 py-2 text-black rounded-full">Repository</Link>
                {project.videoDemoLink
                    ? <Link href={project.videoDemoLink}
                        className="bg-white px-3 py-2 text-black rounded-full">Video Demo</Link>
                    : null}
                {project.liveWebsiteLink
                    ? <Link href={project.liveWebsiteLink}
                    className="bg-white px-3 py-2 text-black rounded-full">Live Page <ExternalLink /></Link>
                    : null}
            </div>
        </li>
    )
}