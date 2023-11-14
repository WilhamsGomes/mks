import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/app/styles/GlobalStyles";
import theme from "@/app/styles/theme";
import Layout from "@/components/Layout/Layout";

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/app/queries/queryClient";

import { ContextProviders } from "@/app/context";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContextProviders>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            transition={Slide}
            theme={"colored"}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ContextProviders>
    </ThemeProvider>
  );
}
