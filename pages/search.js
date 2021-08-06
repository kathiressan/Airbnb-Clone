import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import { InfoCardMemo } from "../components/InfoCard";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import Slider from "react-input-slider";
import { Popover } from "@headlessui/react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const [filterExists, setFilterExists] = useState(false);

  const [selectFlexibility, setSelectFlexibility] = useState(false);
  const changeFlexibility = () => {
    setFilterExists(false);
    if (selectFlexibility === false) {
      setSelectFlexibility(true);
    } else {
      setSelectFlexibility(false);
    }
  };

  const [placeType1, setPlaceType1] = useState(false);
  const changePlaceType1 = () => {
    setFilterExists(false);
    setPlaceType2(false);
    setPlaceType3(false);
    setPlaceType4(false);
    if (placeType1 === false) {
      setPlaceType1(true);
    } else {
      setPlaceType1(false);
    }
  };
  const [placeType2, setPlaceType2] = useState(false);
  const changePlaceType2 = () => {
    setFilterExists(false);
    setPlaceType1(false);
    setPlaceType3(false);
    setPlaceType4(false);
    if (placeType2 === false) {
      setPlaceType2(true);
    } else {
      setPlaceType2(false);
    }
  };
  const [placeType3, setPlaceType3] = useState(false);
  const changePlaceType3 = () => {
    setFilterExists(false);
    setPlaceType1(false);
    setPlaceType2(false);
    setPlaceType4(false);
    if (placeType3 === false) {
      setPlaceType3(true);
    } else {
      setPlaceType3(false);
    }
  };
  const [placeType4, setPlaceType4] = useState(false);
  const changePlaceType4 = () => {
    setFilterExists(false);
    setPlaceType1(false);
    setPlaceType2(false);
    setPlaceType3(false);
    if (placeType4 === false) {
      setPlaceType4(true);
    } else {
      setPlaceType4(false);
    }
  };

  const [selectPrice, setSelectPrice] = useState({ x: 100 });

  const RenderInfoCard = ({
    img,
    location,
    title,
    description,
    roomType,
    star,
    price,
    pricepernight,
    total,
    flexible,
  }) => {
    if (
      selectFlexibility ||
      placeType1 ||
      placeType2 ||
      placeType3 ||
      placeType4
    ) {
      let allTrue = true;
      if (selectFlexibility) {
        if (flexible) {
          true;
        } else {
          allTrue = false;
        }
      }

      if (placeType1) {
        if (roomType == "Entire Place") {
          true;
        } else {
          allTrue = false;
        }
      }
      if (placeType2) {
        if (roomType == "Private Room") {
          true;
        } else {
          allTrue = false;
        }
      }
      if (placeType3) {
        if (roomType == "Hotel Room") {
          true;
        } else {
          allTrue = false;
        }
      }
      if (placeType4) {
        if (roomType == "Shared Room") {
          true;
        } else {
          allTrue = false;
        }
      }
      if (parseInt(pricepernight) <= parseInt(selectPrice.x)) {
        true;
      } else {
        allTrue = false;
      }
      if (allTrue) {
        setFilterExists(true);
        return (
          <InfoCardMemo
            key={img}
            img={img}
            location={location}
            title={title}
            description={description}
            roomType={roomType}
            star={star}
            price={price}
            total={total}
            flexible={flexible}
          />
        );
      } else {
        return false;
      }
    } else {
      let allTrue = true;
      if (parseInt(pricepernight) <= parseInt(selectPrice.x)) {
        true;
      } else {
        allTrue = false;
      }
      if (allTrue) {
        setFilterExists(true);
        return (
          <InfoCardMemo
            key={img}
            img={img}
            location={location}
            title={title}
            description={description}
            roomType={roomType}
            star={star}
            price={price}
            total={total}
            flexible={flexible}
          />
        );
      } else {
        return false;
      }
    }
  };

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <Bounce>
            <p className="text-xs">
              300+ Stays - {range} - for {noOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>
          </Bounce>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/* FLEXIBILITY BUTTON */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`button hover:bg-[#FF5A60] hover:border-[#FF5A60] hover:text-white ${
                      open && "bg-[#FF5A60] border-[#FF5A60] text-white"
                    }`}
                  >
                    Cancellation Flexibility
                  </Popover.Button>
                  <Popover.Panel className="absolute z-10 bg-white rounded-xl mt-2 border p-4 shadow-lg">
                    <div>
                      <div>
                        <p>Only show stays that offer</p>
                        <p>cancellation flexibility</p>
                      </div>
                      <div>
                        <Switch
                          checked={selectFlexibility}
                          onChange={changeFlexibility}
                          className={`${
                            selectFlexibility ? "bg-[#FF5A60]" : "bg-gray-200"
                          } relative inline-flex items-center h-6 rounded-full w-11`}
                        >
                          <span className="sr-only">Enable notifications</span>
                          <span
                            className={`${
                              selectFlexibility
                                ? "translate-x-6"
                                : "translate-x-1"
                            } inline-block w-4 h-4 bg-white rounded-full transform transition ease-in-out duration-200`}
                          />
                        </Switch>
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>

            {/* TYPE OF PLACE BUTTON */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`button hover:bg-[#FF5A60] hover:border-[#FF5A60] hover:text-white ${
                      open && "bg-[#FF5A60] border-[#FF5A60] text-white"
                    }`}
                  >
                    Type of Place
                  </Popover.Button>
                  <Popover.Panel className="absolute z-10 bg-white rounded-xl mt-2 border p-4 shadow-lg">
                    <div>
                      <div className="flex flex-col space-y-4">
                        <div className="flex space-x-3">
                          <div
                            onClick={changePlaceType1}
                            className={`${
                              placeType1 ? "bg-[#FF5A60]" : "bg-white"
                            } placeCheckbox`}
                          />
                          <div className="flex flex-col">
                            <p className="placeMainText">Entire Place</p>
                            <p className="placeSubText">
                              Have a place to yourself
                            </p>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <div
                            onClick={changePlaceType2}
                            className={`${
                              placeType2 ? "bg-[#FF5A60]" : "bg-white"
                            } placeCheckbox`}
                          />
                          <div className="flex flex-col">
                            <p className="placeMainText">Private Room</p>
                            <p className="placeSubText">
                              Have your own room and share
                            </p>
                            <p className="placeSubText">some common spaces</p>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <div
                            onClick={changePlaceType3}
                            className={`${
                              placeType3 ? "bg-[#FF5A60]" : "bg-white"
                            } placeCheckbox`}
                          />
                          <div className="flex flex-col">
                            <p className="placeMainText">Hotel Room</p>
                            <p className="placeSubText">
                              Have a private or shared room in a boutique
                            </p>
                            <p className="placeSubText">
                              hotel, hostel, and more
                            </p>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <div
                            onClick={changePlaceType4}
                            className={`${
                              placeType4 ? "bg-[#FF5A60]" : "bg-white"
                            } placeCheckbox`}
                          />
                          <div className="flex flex-col">
                            <p className="placeMainText">Shared Room</p>
                            <p className="placeSubText">
                              Stay in a shared space, like a common room
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>

            {/* PRICE BUTTON */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`button hover:bg-[#FF5A60] hover:border-[#FF5A60] hover:text-white ${
                      open && "bg-[#FF5A60] border-[#FF5A60] text-white"
                    }`}
                  >
                    Price
                  </Popover.Button>
                  <Popover.Panel className="absolute z-10 bg-white rounded-xl mt-2 border p-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-between">
                        <div>$10</div>
                        <div className="text-[#FF5A60]">${selectPrice.x}</div>
                        <div>$100</div>
                      </div>
                      <Slider
                        styles={{
                          track: {
                            backgroundColor: "#FCA5A5",
                          },
                          active: {
                            backgroundColor: "#FF5A60",
                          },
                        }}
                        xstep={10}
                        xmin={10}
                        xmax={100}
                        x={selectPrice.x}
                        onChange={({ x }) => {
                          setSelectPrice({ x: parseFloat(x) });
                          setFilterExists(false);
                        }}
                      />
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>

            {/* ROOMS AND BEDS BUTTON */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`button hover:bg-[#FF5A60] hover:border-[#FF5A60] hover:text-white ${
                      open && "bg-[#FF5A60] border-[#FF5A60] text-white"
                    }`}
                  >
                    Rooms and Beds
                  </Popover.Button>
                  <Popover.Panel className="absolute z-10 bg-white rounded-xl mt-2 border p-4 shadow-lg">
                    <div>
                      <div>
                        <p>Yet to be built, </p>
                        <p>Sonny!</p>
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>

            {/* MORE FILTERS BUTTON */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`button hover:bg-[#FF5A60] hover:border-[#FF5A60] hover:text-white ${
                      open && "bg-[#FF5A60] border-[#FF5A60] text-white"
                    }`}
                  >
                    More Filters
                  </Popover.Button>
                  <Popover.Panel className="absolute z-10 bg-white rounded-xl mt-2 border p-4 shadow-lg">
                    <div>
                      <div>
                        <p>Yet to be built, </p>
                        <p>Sonny!</p>
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                roomType,
                star,
                price,
                pricepernight,
                total,
                flexible,
              }) => (
                <RenderInfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  roomType={roomType}
                  star={star}
                  price={price}
                  pricepernight={pricepernight}
                  total={total}
                  flexible={flexible}
                />
              )
            )}
          </div>
          {!filterExists && (
            <div className="text-2xl pb-20 pt-5 flex">
              <div className="border border-[#FF5A60] text-white bg-[#FF5A60] p-4 rounded-xl">
                <p>No Matches Found!</p>
                <p>Try a different filter.</p>
              </div>
            </div>
          )}
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
      roomType: "Private Room",
      star: 4.73,
      price: "£30 / night",
      pricepernight: 30,
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
      roomType: "Shared Room",
      star: 4.3,
      price: "£40 / night",
      pricepernight: 40,
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
      roomType: "Entire Place",
      star: 3.8,
      price: "£35 / night",
      pricepernight: 35,
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
      roomType: "Private Room",
      star: 4.1,
      price: "£55 / night",
      pricepernight: 55,
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
      roomType: "Shared Room",
      star: 5,
      price: "£60 / night",
      pricepernight: 60,
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
      roomType: "Private Room",
      star: 4.23,
      price: "£65 / night",
      pricepernight: 65,
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
      roomType: "Hotel Room",
      star: 3.85,
      price: "£90 / night",
      pricepernight: 90,
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
