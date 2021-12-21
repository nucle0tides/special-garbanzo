import { Global, css, SerializedStyles } from "@emotion/react";
import { AppProps } from "next/app";

const globalStyles: SerializedStyles = css`
  body {
    margin: 0;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
