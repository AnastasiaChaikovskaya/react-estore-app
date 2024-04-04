import { MENU_LABELS, PUBLIC_ROUTS } from '@/contstants/routs';

export type TMenuLink = (typeof PUBLIC_ROUTS)[keyof typeof PUBLIC_ROUTS];
export type TMenuLabel = (typeof MENU_LABELS)[keyof typeof MENU_LABELS];

export interface IMenuLink {
  label: TMenuLabel;
  link: TMenuLink;
}

export const MENU_LINKS: IMenuLink[] = [
  { label: 'Home', link: PUBLIC_ROUTS.HOME },
  { label: 'Phones', link: PUBLIC_ROUTS.PHONES },
  { label: 'Tablets', link: PUBLIC_ROUTS.TABLETS },
  { label: 'Accessories', link: PUBLIC_ROUTS.ACCESSORIES },
];
