// hooks/useLocale.ts

import { useParams } from 'next/navigation';

const useLocale = () => {
  const params = useParams();
  return Array.isArray(params?.locale)
    ? params?.locale[0]
    : params?.locale || 'en';
};

export default useLocale;
