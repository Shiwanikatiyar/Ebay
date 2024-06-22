import React from 'react';
import { Flex, Box, Link, useBreakpointValue } from '@chakra-ui/react';

export const DownNavbar = () => {
  // Determine if the layout should be stacked vertically based on the screen size
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const alignItems = useBreakpointValue({ base: 'flex-start', md: 'center' });

  return (
    <Flex
      border="1px solid"
      px={10}
      py={1}
      alignItems={alignItems}
      justifyContent="space-between"
      direction={flexDirection}
    >
      <Box
        display="flex"
        alignItems={alignItems}
        justifyContent="space-between"
        wrap="wrap" // Allow wrapping on smaller screens
        gap={4}
      >
        <Link>Saved</Link>
        <Link>Electronics</Link>
        <Link>Motors</Link>
        <Link>Fashion</Link>
        <Link>Collectibles and Art</Link>
        <Link>Sports</Link>
        <Link>Health & Beauty</Link>
        <Link>Industrial Equipment</Link>
        <Link>Home & Garden</Link>
        <Link>Deals</Link>
        <Link>Sell</Link>
      </Box>
    </Flex>
  );
}
