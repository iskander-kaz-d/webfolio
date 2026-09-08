export interface Panel {
  slug: string;
  label: string;
  href: string;
  image: string;
}

export const panels: Panel[] = [
  {
    slug: "write",
    label: "Write",
    href: "/writing",
    image: "/images/panels/write.png",
  },
  {
    slug: "build",
    label: "Build",
    href: "/projects",
    image: "/images/panels/build.png",
  },
  {
    slug: "talk",
    label: "Talk",
    href: "/talk",
    image: "/images/panels/talk.png",
  },
];
