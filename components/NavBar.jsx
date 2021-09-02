import {
  Flex,
  Box,
  HStack,
  Text,
  Icon,
  Button,
  SimpleGrid,
  Section,
  Img
} from "@chakra-ui/react";
import { FiTwitter, FiGithub } from "react-icons/fi";
import Link from 'next/link'

export default function NavBar() {
  const githubUrl = "https://github.com/krishna8421/public-apis-site";
  const twitterUrl = "https://twitter.com/krishnaa8421";
  return (
    <Box  borderBottomWidth="3px" borderColor="purple.600" >
      <Flex justify="space-between" align="center" p="3">
        <Box>
          <Link href='/'>
          <a>
            <Img ml={4} h='2rem' src='/PublicAPIs.png' alt='Public Apis' objectFit="cover" />
          </a>
          </Link>
        </Box>
        <Box>
          <HStack spacing={4} mr={4}>
            <a href={twitterUrl}>
              <Button variant="ghost">
                <Icon as={FiTwitter} />
              </Button>
            </a>
            <a href={githubUrl}>
            <Button variant="ghost">
              <Icon as={FiGithub} />
            </Button>
            </a>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
