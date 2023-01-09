
import { Inter } from "@next/font/google";
import { Button, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TodoList from "../components/TodoList";
import Form from "../components/Form";

import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header
        title={"Homepage |  VERCEL"}
        desc={"This is a homepage for vercel"}
      />
      <main>
        <Hero />
        <Container>
          {/* <Form /> */}
          {/* <TodoList /> */}
        </Container>
      </main>
    </>
  );
}
