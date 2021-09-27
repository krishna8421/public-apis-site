import {
  Flex,
  Box,
  HStack,
  Icon,
  Button,
  Img,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";

export default function NavBar() {
  const publicApisRepo = "https://github.com/public-apis/public-apis";
  const publicApisApiRepo = "https://github.com/davemachado/public-api";
  const publicApisSiteRepo = "https://github.com/krishna8421/public-apis-site";
  const twitterUrl = "https://twitter.com/krishnaa8421";
  const linkedinUrl = "https://linkedin.com/in/krishnaa8421";
  return (
    <Box mt={2}>
      <Box borderBottomWidth="3px" borderColor="purple.600">
        <Flex
          justify="space-between"
          align="center"
          p="3"
        >
          <Box>
            <Link href="/">
              <a>
                <Img
                  ml={4}
                  h={["1.2rem","1.5rem","2rem","2rem"]}
                  src="/PublicAPIs.png"
                  alt="Public Apis"
                  objectFit="cover"
                />
              </a>
            </Link>
          </Box>
          <Box display="block">
            <HStack spacing={[0.5,2,4,4]} mr={[0,2,4,4]}>
              <a href={linkedinUrl}>
                <Button variant="ghost">
                  <Icon as={RiLinkedinLine} />
                </Button>
              </a>
              {/* <a href={twitterUrl}>
                <Button variant="ghost">
                  <Icon as={FiTwitter} />
                </Button>
              </a> */}
              <Menu>
                <MenuButton as={Button} variant="ghost">
                  <Icon as={FiGithub} />
                </MenuButton>

                <MenuList zIndex="popover">
                  <MenuItem>
                    <Icon as={DiGithubBadge} />
                    &nbsp;&nbsp;&nbsp;
                    <Link href={publicApisRepo}>
                      <a>Public APIs Project</a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Icon as={DiGithubBadge} />
                    &nbsp;&nbsp;&nbsp;
                    <Link href={publicApisSiteRepo}>
                      <a>Public APIs Site</a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Icon as={DiGithubBadge} />
                    &nbsp;&nbsp;&nbsp;
                    <Link href={publicApisApiRepo}>
                      <a>Public APIs API</a>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
