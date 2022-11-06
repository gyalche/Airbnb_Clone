import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';
import styles from '../styles/Home.module.css';
// import axios from 'axios';
export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Gyalchen Airbnb</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <Header />
      {/*Banner*/}
      <Banner />

      <main className="max-w-7md mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/*pull some data from a server API-alreadymade*/}
          {exploreData?.map(({ img, distance, location }) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch('https://links.papareact.com/pyp');
  const exploreData = await result.json();
  return {
    props: {
      exploreData,
    },
  };
}
