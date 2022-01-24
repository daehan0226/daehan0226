export default interface IProject {
    name: string,
    images?: string[],
    desc: string,
    link: string,
    back?: {
        github: string;
        desc: string;
    },
    front?: {
        github: string;
        desc: string;
    },
    crawler?: {
        github: string;
        desc: string;
    },
}
  