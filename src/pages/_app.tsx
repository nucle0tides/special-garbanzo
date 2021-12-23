import { Global, css, SerializedStyles } from "@emotion/react";
import { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Layout from "../components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      light: "#82a49f",
      main: "#557571",
      dark: "#2b4946",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffcab8",
      main: "#d39988",
      dark: "#a06b5b",
      contrastText: "#000",
    },
  },
});

const globalStyles: SerializedStyles = css`
  body {
    margin: 0;
  }
`;

const App = ({ Component, pageProps, router }: AppProps) => {
  if (router.pathname === "/") {
    return (
      <>
        <Global styles={globalStyles} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
