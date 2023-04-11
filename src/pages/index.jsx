import Head from "next/head";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import Separator from "@/components/common/separator/Separator";
import { About } from "@/components/About";
import { BootCamps } from "@/components/BootCamps";
import {
  CalltoActionOne,
  CalltoActionTwo,
} from "@/components/common/calltoactions";
import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestions";
import { TeamTwo } from "@/components/Team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Empowering Disadvantaged Children | Emmanuel Eze Foundation
        </title>
        <meta
          name="description"
          content="The Emmanuel Eze Foundation empowers and transforms the lives of disadvantaged children and teens through quality education and skill acquisition training. Our free bootcamps prepare children for the demands of tomorrow's workplace."
        />
        <meta
          name="keywords"
          content="Emmanuel Eze Foundation, education, skill acquisition, disadvantaged children, bootcamps, coding, design, math, teens, workplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://emmanuelezefoundation.org/" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <BootCamps />
      <CalltoActionOne />
      <FrequentlyAskedQuestions />
      <Separator />
      <TeamTwo column="col-lg-3 col-md-6 col-12" teamStyle="team-style-two" />
      <Separator />
      <CalltoActionTwo />
    </>
  );
}
