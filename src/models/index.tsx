import React, {RefObject} from 'react';

export interface RefProps {
    refObject: RefObject<HTMLDivElement>;
}

export interface IconBoxProps {
    children?: JSX.Element|JSX.Element[];
}