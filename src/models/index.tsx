import React, {RefObject} from 'react';

import IBlog from "./blog"
import { SocialIconBoxProps, IconBoxProps } from './box';

export interface RefProps {
    refObject: RefObject<HTMLDivElement>;
    handleScroll?: (target:string) => void
}


export type {
    IBlog,
    SocialIconBoxProps,
    IconBoxProps
}