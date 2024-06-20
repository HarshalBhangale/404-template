import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Providers from '~/app/[locale]/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

const APP_NAME = 'nextarter-chakra';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | nextarter-chakra' },
  description: 'Next.js + chakra-ui + TypeScript template',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://nextarter-chakra.sznm.dev',
    title: 'nextarter-chakra',
    description: 'Next.js + chakra-ui + TypeScript template',
    images: {
      url: 'https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
      alt: 'nextarter-chakra.sznm.dev og-image',
    },
  },
  twitter: {
    creator: '@sozonome',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
