import { FOOTER_LABELS, FOOTER_ROUTS } from '@/contstants/routs';

export type TFooterLink = (typeof FOOTER_ROUTS)[keyof typeof FOOTER_ROUTS];
export type TFooterLabel = (typeof FOOTER_LABELS)[keyof typeof FOOTER_LABELS];

export interface IFooterLink {
  label: TFooterLabel;
  link: TFooterLink;
}
export const FOOTER__LINKS: IFooterLink[] = [
  { label: 'Github', link: 'https://github.com/AnastasiaChaikovskaya' },
  { label: 'Contacts', link: '/' },
  { label: 'Rights', link: '/' },
];
