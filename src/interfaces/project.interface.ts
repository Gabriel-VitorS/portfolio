export interface Project {    
    title: string,
    category: "Programação" | "Design",
    year: string,
    imageThumb: "https://picsum.photos/seed/aura/1200/800" | string,
    imagesProject: string[]
    description: string,
    challenge?: string,
    tags?: string[]
    links: { project?: string, demo?: string }

}
