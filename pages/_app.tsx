import type { AppProps } from 'next/app'

import {
  Box,
  ChakraProvider,
  Container,
  Divider,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

import theme from '@/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box p={4}>
        <Container
          backgroundColor="white"
          borderRadius="sm"
          boxShadow="md"
          maxW="container.xl"
          py={4}
        >
          <VStack as="header" mb={6}>
            <Image
              alt="Logo de mi huerta familiar"
              borderRadius={9999}
              src="https://via.placeholder.com/128"
            />
            <Heading>Tu Huerta Familiar</Heading>
            <Text>Gestiona tu huerta familiar</Text>
          </VStack>
          <Divider my={6} />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  )
}
