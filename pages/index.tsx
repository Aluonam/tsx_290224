import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DeleteLastWord from "@/components/delLastWord/DeleteLastWord";
import ChangeSpaces from "@/components/changeSpaces/ChangeSpaces";
import ChangeFirstLetter from "@/components/changeFirstLetter/ChangeFirstLetter";

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
      <main className={`${styles.main} ${inter.className}`}>
        <DeleteLastWord></DeleteLastWord>
        <ChangeSpaces></ChangeSpaces>
        <ChangeFirstLetter></ChangeFirstLetter>
      </main>
    </>
  );
}
