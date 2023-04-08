import Head from "next/head";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import Separator from "@/components/common/separator/Separator";
import { About } from "@/components/About";
import { BootCamps } from "@/components/BootCamps";
import CalltoActionEight from "@/elements/calltoaction/CalltoActionEight";
import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <BootCamps />
      <CalltoActionEight />
      <FrequentlyAskedQuestions />
      <Separator />
    </>
  );
}
