export enum ButtonStyleType {
  primary = 'primary',
  secondary = 'secondary',
  invert = 'invert'
}

export enum ButtonSizeType {
  small = 'small',
  normal = 'normal',
  large = 'large'
}

export interface IButtonProps {
  active?: boolean;
  text?: string;
  iconPath?: string;
  href?: string;
  type?: string;
  link?: string | any[] | null | undefined;
  darkMode?: boolean;
  style?: ButtonStyleType;
  size?: ButtonSizeType;
  fill?: boolean;
}
