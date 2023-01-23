import { extendTheme, theme } from '@chakra-ui/react'

export default extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'primary.50',
      },
      main: {
        width: '100%',
      },
    },
  },
  colors: {
    primary: theme.colors.green,
    secondary: theme.colors.orange,
    error: theme.colors.red,
    warning: theme.colors.yellow,
    success: theme.colors.blue,
  },
})
