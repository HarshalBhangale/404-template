import { Grid, Heading, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

const SomeText = () => {
  const t = useTranslations('Index');
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        {t('title')}
      </Heading>

      <Text fontSize="xs">
        This is a Next.js app with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};

export default SomeText;
