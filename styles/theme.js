import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  components: { Button: { baseStyle: { _focus: { boxShadow: "none" } } } },
});

export default theme;
