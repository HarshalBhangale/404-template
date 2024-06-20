'use client';

import { Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import useLocale from '~/lib/components/hooks/useLocale';
import LanguageSwitcher from '~/lib/components/LanguageSwitcher';
import CTASection from '~/lib/components/samples/CTASection';
import SomeImage from '~/lib/components/samples/SomeImage';
import SomeText from '~/lib/components/samples/SomeText';

const Home = () => {
  const router = useRouter();
  const locale = useLocale();
  const handleClick = () => {
    router.push(`/${locale}/404`); // Navigate to 404 route with locale
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <LanguageSwitcher />
      <SomeText />
      <SomeImage />
      <CTASection />
      <Button onClick={handleClick}>404</Button>
    </Flex>
  );
};

export default Home;
