export default interface IBlog {
    title: string,
    image?: {
        component: "img",
        height: string,
        url: string,
        alt: string,
    },
    desc: string,
    link: string
}
  