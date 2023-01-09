import Head from "next/head";
import { Inter } from "@next/font/google";
import { Heading } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const ABOUT = () => {
  return (
    <>
      <Head>
        <title>About Felco</title>
        <meta name="description" content="About Felco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading>About Page</Heading>
      </main>
    </>
  );
};

export default ABOUT;
