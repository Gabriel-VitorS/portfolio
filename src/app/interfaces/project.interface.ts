export interface Project {    
    title: string,
    category: "Programação" | "Design",
    year: string,
    image: "https://picsum.photos/seed/aura/1200/800" | string,
    description: string,
    challenge?: string,
    links: { project?: string, demo?: string }

}

// export interface Categories {
//     category: 
// }