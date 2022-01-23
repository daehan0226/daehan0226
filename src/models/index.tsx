import React, {RefObject} from 'react';

export interface RefProps {
    refObject: RefObject<HTMLDivElement>;
    handleScroll?: (target:string) => void
}

type colorType = "primary" | "secondary" |  "grey";

export interface SocialIconBoxProps {
    children: JSX.Element|JSX.Element[];
    link? : string;
    backgroundColor?: string;
    color?: colorType;
}

export interface IconBoxProps {
    color?: colorType;
}