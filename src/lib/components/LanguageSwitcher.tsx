// components/LanguageSwitcher.tsx

'use client';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = Array.isArray(params?.locale)
    ? params?.locale[0]
    : params?.locale || 'en'; // Get locale from params or default to 'en'

  const [selectedLocale, setSelectedLocale] = useState(locale);

  useEffect(() => {
    setSelectedLocale(locale); // Sync state with current locale from params
  }, [locale]);

  const changeLanguage = (lng: string) => {
    setSelectedLocale(lng);
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${lng}`);
    router.push(newPathname);
  };

  const getFlagIcon = (lng: string) => {
    switch (lng) {
      case 'en':
        return '🇬🇧'; // Use emoji flag for UK
      case 'de':
        return '🇩🇪'; // Use emoji flag for Germany
      default:
        return '🌐'; // Default globe icon
    }
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="cream" // Define 'cream' color in your Chakra UI theme or use a suitable color
        color="black" // Text color
        border="2px solid black" // Border
        borderBottomWidth="8px" // Denser border at the bottom
        borderRadius="lg" // Rounded corners
        position="relative" // Ensure the border doesn't overflow
        overflow="hidden" // Ensure the border doesn't overflow
        _hover={{
          borderBottomColor: 'black', // Adjust hover color if needed
        }}
        _active={{
          borderBottomColor: 'black', // Adjust active color if needed
        }}
        height="44px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight={700}
      >
        <span
          style={{
            color: 'white',
            textShadow: '0px 0px 2px black',
            WebkitTextStroke: '1px black', // Add border-like effect to the text
          }}
        >
          {typeof selectedLocale === 'string' && selectedLocale.toUpperCase()}
        </span>
      </MenuButton>
      <MenuList border="2px solid black" minWidth="85px" p={0}>
        {['en', 'de'].map((lng) => (
          <MenuItem
            key={lng}
            onClick={() => changeLanguage(lng)}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            _hover={{ bg: 'gray.200' }} // Hover background color
            _focus={{ bg: 'gray.200' }} // Focus background color
            p={2} // Adjust padding for the MenuItem if needed
          >
            <span style={{ marginRight: '2px' }}>{getFlagIcon(lng)}</span>
            <span>{lng.toUpperCase()}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
