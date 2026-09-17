import type Project from "./_models/Project";

const projects: Project[] = [
    {
        id: 1,
        title: "Metatah Invitation",
        description: "A website I made for the invitation to my own Metatah Ceremony (Balinese Traditional Tooth-Filing Ceremony).",
        thumbnailLink: "/images/metatah-invitation.jpg",
        repositoryLink: "https://github.com/aryawidiap/metatah-arya-public",
        videoDemoLink: "https://www.youtube.com/watch?v=yBMCV8MaWGg",
        liveWebsiteLink: "https://aryawidiap.github.io/metatah-arya-public",
        techStack: 'HTML, Javascript, CSS',
    },
    {
        id: 2,
        title: "Ghostbumps: Ghost House Management System",
        description: "Ghostbumps is a web-based booking system, specialized for ghost houses, made for Web Based System Programming class during my time at Asia University.",
        thumbnailLink: "/images/ghostbumps-frontpage-preview.jpeg",
        repositoryLink: "https://github.com/aryawidiap/ghostbumps-final",
        videoDemoLink: null,
        liveWebsiteLink: null,
        techStack: 'Laravel, Vue',
    },
    {
        id: 3,
        title: "Virtual Gendèr",
        description: "A PC application made with Python TKinter library that simulates the Balinese traditional instrument, Gendèr. This was a team project for a Windows Programming class.",
        thumbnailLink: "/images/virtual-gender-casual-play-window.png",
        repositoryLink: "https://github.com/aryawidiap/final_project_windows_programming",
        videoDemoLink: "https://www.youtube.com/watch?v=7qKxyhkbtnw",
        liveWebsiteLink: null,
        techStack: 'Python, TKinter',
    },
    {
        id: 4,
        title: "Sambung Judul",
        description: "A web-based game about connecting one song title to another.",
        thumbnailLink: "/images/sambung-judul.jpeg",
        repositoryLink: "https://github.com/aryawidiap/sambung-judul/",
        videoDemoLink: null,
        liveWebsiteLink: "https://aryawidiap.github.io/sambung-judul/",
        techStack: 'Next.js, MusicBrainz DB',
    },
]

export { projects };