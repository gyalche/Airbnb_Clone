import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import styles from '../styles/Home.module.css';
// import axios from 'axios';
export default function Home({ exploreData, cardsData }) {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardsData?.map(({ id, title, url }) => (
              <MediumCard key={id} img={url} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greateds Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />

       
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch('https://jsonplaceholder.typicode.com/albums');
  const exploreData = await result.json();

  const cardsData = await fetch(
    'https://jsonplaceholder.typicode.com/photos'
  ).then((res) => res.json());

  return {
    props: {
      exploreData: exploreData.slice(0, 10),
      cardsData: cardsData.slice(0, 10),
    },
  };
}
