import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import searchData from '../searchData';
import ReactMap from '../components/ReactMap';
const search = () => {
  // console.log(searchResult);
  console.log(searchData);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), 'yyyy-MM-dd');
  const formattedEndDate = format(new Date(endDate), 'yyyy-MM-dd');

  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ statys -{range}- for {noOfGuests} guest
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">{location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filter</p>
          </div>

          <div className="flex flex-col">
            {searchData.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden sm:inline-flex sm:min-w-[600px]">
          <ReactMap searchResult={searchData} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default search;

//server side rendering;
// export async function getServerSideProps() {
//   const searchResult = await fetch('https://links.papareact.com/isz').then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       searchResult,
//     },
//   };
// }
