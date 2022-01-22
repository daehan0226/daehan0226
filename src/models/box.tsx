export interface BoxWrapperProps {
    children?: JSX.Element|JSX.Element[];
    height?: number | string;
    minHeight?: number | string;
    backgroundColor?: string;
    backgroundHoverColor?: string;
    hover?: boolean;
}

export interface BoxHeaderProps {
    title: string
  }
