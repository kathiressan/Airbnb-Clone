import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import { Menu } from "@headlessui/react";
import { useState } from "react";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  // const [flexibilityButton, setFlexibilityButton] = useState(false);
  // const changeFlexibilityButton = () => {
  //   if (flexibilityButton === false) {
  //     setFlexibilityButton(true);
  //   } else {
  //     setFlexibilityButton(false);
  //   }
  // };
  const [selectFlexibility, setSelectFlexibility] = useState(false);
  const changeFlexibility = () => {
    if (selectFlexibility === false) {
      setSelectFlexibility(true);
    } else {
      setSelectFlexibility(false);
    }
  };

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <Menu>
              {({ open }) => (
                <>
                  {/* <p className="button">Cancellation Flexibility</p> */}
                  <Menu.Button
                    as="button"
                    className={`button relative ${
                      open && "bg-[#FF5A60] text-white border-[#FF5A60]"
                    }`}
                  >
                    {/* <div onClick={changeFlexibilityButton}></div> */}
                    Cancellation Flexibility
                  </Menu.Button>
                  <Menu.Items className="absolute mt-12 z-40 bg-white border p-4 rounded-xl shadow-2xl max-w-xs flex">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="flex space-x-3">
                          <p className="text-gray-500" href="/account-settings">
                            Only show stays that offer <br /> cancellation
                            flexibility
                          </p>
                          <div
                            onClick={changeFlexibility}
                            className={`mt-5 h-5 w-5 bg-white border-2 border-[#FF5A60] cursor-pointer hover:scale-110 ${
                              selectFlexibility && "bg-[#FF5A60]"
                            }`}
                          />
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </>
              )}
            </Menu>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {selectFlexibility
              ? searchResults.map(
                  ({
                    img,
                    location,
                    title,
                    description,
                    star,
                    price,
                    total,
                    flexible,
                  }) =>
                    flexible && (
                      <InfoCard
                        key={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}
                        flexible={flexible}
                      />
                    )
                )
              : searchResults.map(
                  ({
                    img,
                    location,
                    title,
                    description,
                    star,
                    price,
                    total,
                    flexible,
                  }) => (
                    <InfoCard
                      key={img}
                      img={img}
                      location={location}
                      title={title}
                      description={description}
                      star={star}
                      price={price}
                      total={total}
                      flexible={flexible}
                    />
                  )
                )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  // const searchResults = await fetch("https://links.papareact.com/isz").then(
  //   (res) => res.json()
  // );

  const searchResults = [
    {
      img: "/searchImages/img1.webp",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "£30 / night",
      total: "£117 total",
      long: -0.0022275,
      lat: 51.5421655,
      flexible: true,
    },
    {
      img: "/searchImages/img2.jpg",
      location: "Private room in center of London",
      title: "Independant luxury studio apartment",
      description:
        "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
      star: 4.3,
      price: "£40 / night",
      total: "£157 total",
      long: -0.095091,
      lat: 51.48695,
      flexible: false,
    },
    {
      img: "/searchImages/img3.jpg",
      location: "Private room in center of London",
      title: "London Studio Apartments",
      description:
        "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
      star: 3.8,
      price: "£35 / night",
      total: "£207 total",
      long: -0.135638,
      lat: 51.521916,
      flexible: false,
    },
    {
      img: "/searchImages/img4.jpg",
      location: "Private room in center of London",
      title: "30 mins to Oxford Street, Excel London",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.1,
      price: "£55 / night",
      total: "£320 total",
      long: -0.069961,
      lat: 51.472618,
      flexible: false,
    },
    {
      img: "/searchImages/img5.webp",
      location: "Private room in center of London",
      title: "Spacious Peaceful Modern Bedroom",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
      star: 5,
      price: "£60 / night",
      total: "£450 total",
      long: -0.08472,
      lat: 51.510794,
      flexible: true,
    },
    {
      img: "/searchImages/img6.jpg",
      location: "Private room in center of London",
      title: "The Blue Room In London",
      description:
        "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
      star: 4.23,
      price: "£65 / night",
      total: "£480 total",
      long: -0.094116,
      lat: 51.51401,
      flexible: true,
    },
    {
      img: "/searchImages/img7.webp",
      location: "Private room in center of London",
      title: "5 Star Luxury Apartment",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      price: "£90 / night",
      total: "£650 total",
      long: -0.109889,
      lat: 51.521245,
      flexible: false,
    },
  ];

  return {
    props: {
      searchResults,
    },
  };
}
