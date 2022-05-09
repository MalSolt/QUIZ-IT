import Head from 'next/head';
import { AppProps } from 'next/app';
import { Layout } from './ui/layout';
import { Header } from './ui/header';
import { setUp } from './lib/setUp';
import { ReactQueryProvider } from './providers/ReactQueryProvider';

const links = [
  { href: '/', text: 'Главная' },
  { href: 'about-game', text: 'Об игре' },
  { href: 'game-mechanics', text: 'Механика игры' },
];

setUp();

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Head>
        <title>Quiz-it</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout header={<Header links={links} />}>
        <Component {...pageProps} />
      </Layout>
    </ReactQueryProvider>
  );
}
