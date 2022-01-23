import React, {RefObject} from 'react';

export interface RefProps {
    refObject: RefObject<HTMLDivElement>;
    handleScroll?: (target:string) => void
}

export interface SocialIconBoxProps {
    children: JSX.Element|JSX.Element[];
    link? : string;
}