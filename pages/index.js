import Head from "next/head";
import Banner from "../components/Banner";
import DiscoverCard from "../components/DiscoverCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HostingLargeCard from "../components/HostingLargeCard";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData, discoverData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
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
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">
            Discover things to do{" "}
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {discoverData?.map(({ img, title, description }) => (
              <DiscoverCard
                key={img}
                img={img}
                title={title}
                description={description}
              />
            ))}
          </div>
        </section>
        <HostingLargeCard
          img="/bigcards/tryhosting.webp"
          title="Try hosting"
          description="Earn extra income and unlock new oppurtunities by sharing your space"
          buttonText="Learn More"
        />
        <LargeCard
          img="/bigcards/greatoutdoors.webp"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // const exploreData = await fetch(
  //   "https://api.npoint.io/8808349b8185b7ef0758"
  // ).then((res) => res.json());

  const exploreData = [
    {
      img: "/explorenearby/kl_img.webp",
      location: "Kuala Lumpur",
      distance: "4.5-hour drive",
    },
    {
      img: "/explorenearby/pj_img.webp",
      location: "Petaling Jaya",
      distance: "4.5-hour drive",
    },
    {
      img: "/explorenearby/shahalam_img.webp",
      location: "Shah Alam",
      distance: "4.5-hour drive",
    },
    {
      img: "/explorenearby/klang_img.webp",
      location: "Klang",
      distance: "4.5-hour drive",
    },
    {
      img: "/explorenearby/kajang_img.webp",
      location: "Kajang",
      distance: "5-hour drive",
    },
    {
      img: "/explorenearby/georgetown_img.webp",
      location: "George Town",
      distance: "30-minute drive",
    },
    {
      img: "/explorenearby/melaka_img.webp",
      location: "Malacca",
      distance: "6-hour drive",
    },
    {
      img: "/explorenearby/puchong_img.webp",
      location: "Puchong",
      distance: "4.5-hour drive",
    },
  ];

  // const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
  //   res.json()
  // );

  const cardsData = [
    {
      img: "/liveanywhere/img1.webp",
      title: "Outdoor getaways",
    },
    {
      img: "/liveanywhere/img2.webp",
      title: "Unique stays",
    },
    {
      img: "/liveanywhere/img3.webp",
      title: "Entire homes",
    },
    {
      img: "/liveanywhere/img4.webp",
      title: "Pet allowed",
    },
  ];

  const discoverData = [
    {
      img: "/discover/img1.webp",
      title: "Featured collection: Wanderlust",
      description: "Travel from home with Online Experience.",
    },
    {
      img: "/discover/img2.webp",
      title: "Online Experiences",
      description: "Live, interactive activities led by Hosts.",
    },
    {
      img: "/discover/img3.webp",
      title: "Experiences",
      description: "Find unforgettable activities near you.",
    },
  ];

  return {
    props: {
      exploreData,
      cardsData,
      discoverData,
    },
  };
}
