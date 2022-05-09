import { Logout } from 'features/logout';
import NextLink from 'next/link';
import { ReactNode } from 'react';

export type HeaderLink = { href: string; text: string };
type Props = {
  links: HeaderLink[];
};

export const Header = ({ links }: Props) => {
  return (
    <HeaderBase>
      <Logo />
      <Links>
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
      </Links>
      <Logout />
    </HeaderBase>
  );
};

const HeaderBase = (props: { children: ReactNode }) => (
  <header className="z-50 bg-white">
    <div className="flex items-center justify-between px-10 py-8">
      {props.children}
    </div>
    <div className="h-px bg-gradient-to-r from-yellow to-pink"></div>
  </header>
);

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="text-2xl font-bold mr-[2px]">Quiz</div>
      <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-gradient-to-r from-yellow to-pink font-bold text-4xl text-white">
        it
      </div>
    </div>
  );
};

const Links = (props: { children: ReactNode }) => (
  <div className="flex flex-row w-auto space-x-20 items-center">
    {props.children}
  </div>
);

const Link = (props: { href: string; children: ReactNode }) => (
  <NextLink href={props.href}>
    <a className="text-xl">{props.children}</a>
  </NextLink>
);
