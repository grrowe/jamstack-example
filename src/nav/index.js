import React from 'react';
import { Flex, Button, Box, Spacer, Icon } from '@chakra-ui/react';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

function Nav({ toggleColorMode, bgColor, secondaryTextColor }) {
  return (
    <Box bg={bgColor} w="full" p={2}>
      <Flex w="full" flexDirection="row">
        <Box flex="1"></Box>
        <Spacer />
        <Button onClick={() => toggleColorMode()} color={secondaryTextColor}>
          {bgColor === 'whiteAlpha.50' ? (
            <Icon as={BsMoonFill} />
          ) : (
            <Icon as={BsFillSunFill} />
          )}
        </Button>
      </Flex>
    </Box>
  );
}

export default Nav;
