import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Input,
  Button,
  Icon,
} from "@chakra-ui/react";

import PasswordInput from "./Components/PasswordInput";
import EmailInput from "./Components/EmailInput";

function App() {
  return (
    <ChakraProvider align="center">
      <Container>
        <Box bg="white" w="100%" p={4} align="center">
          <Text as="b" color="#e44232" fontSize="2xl">
            todolist
          </Text>
          <Box mt="25%">
            <Text as="b" fontSize="4xl">
              Sign up
            </Text>
            <EmailInput />
            <br></br>
            <PasswordInput m="" />
            <Button
              mt="4"
              variant="solid"
              width="100%"
              justifyContent="flex-start"
              size="lg"
              height="52px"
              border="2px"
              color="red"
              colorScheme="red"
              textColor="white"
              borderRadius="9"
            >
              Sing up with Email
            </Button>
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
