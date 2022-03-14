import {
  Box,
  ChakraProvider, theme
} from "@chakra-ui/react"
import * as React from "react"
import { Demo } from "./components/Demo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box w={"100%"}>
      <Demo />
    </Box>
  </ChakraProvider>
)
