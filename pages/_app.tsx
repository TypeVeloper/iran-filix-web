import "@styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

import "@styles/hero-swiper-slide.scss";
import "@styles/swiper-carousel.css";

interface NoopProps {
  children: React.ReactNode;
}

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const Noop: React.FC<NoopProps> = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  const router = useRouter();

  const Layout = (Component as any).Layout || Noop;

  return (
    <AnimatePresence mode='wait' onExitComplete={handleExitComplete}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.DehydratedState}>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </AnimatePresence>
  );
}
