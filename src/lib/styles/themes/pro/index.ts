import { extendTheme } from '@chakra-ui/react';

import * as components from './components';
import * as foundations from './foundations';

export const overrides: Record<string, unknown> = {
  ...foundations,
  components: { ...components },
};

export const pro = extendTheme(overrides);
export default pro;
