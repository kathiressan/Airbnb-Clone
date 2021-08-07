import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import Slide from "react-reveal/Slide";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";
import { Popover, Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, setDarkMode, setLightMode } from "../slices/darkmodeSlice";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [darkModeSwitch, setDarkModeSwitch] = useState(false);
  const getMode = useSelector(selectMode);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (getMode) {
      setDarkModeSwitch(true);
    } else {
      setDarkModeSwitch(false);
    }
  }, []);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const changeDarkModeState = () => {
    if (darkModeSwitch === false) {
      setDarkModeSwitch(true);
      dispatch(setDarkMode());
    } else {
      setDarkModeSwitch(false);
      dispatch(setLightMode());
    }
  };

  const changeImage = () => {
    if (!scrolled && !searchInput) {
      return "/header/airbnblogo-1.png";
    }
    if (scrolled && !searchInput) {
      return "/header/airbnblogo-2.webp";
    }
    if (searchInput) {
      return "/header/airbnblogo-2.webp";
    }
  };

  return (
    <header
      className={`top-0 z-50 grid grid-cols-3 p-5 fixed w-full darkModeTransition ${
        searchInput && "bg-white dark:bg-[#121212] shadow-md"
      } ${scrolled && "bg-white shadow-md dark:bg-[#121212]"}`}
    >
      {/* Left */}

      <Slide top>
        <div
          onClick={() => router.push("/")}
          className="relative flex items-center h-10 cursor-pointer my-auto"
        >
          <Image
            src={changeImage()}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </Slide>

      {/* Middle - Search */}
      <Slide top>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={`flex-grow pl-5 bg-transparent outline-none text-sm ${
              searchInput && "text-black dark:text-white"
            } ${
              scrolled
                ? "text-gray-600 placeholder-gray-400 dark:text-white dark:placeholder-white darkModeTransition"
                : "text-white placeholder-white darkModeTransition"
            }`}
            type="text"
            placeholder={placeholder || "Start your search"}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>
      </Slide>

      {/* Right */}
      <Slide top>
        <Popover className="relative flex justify-end">
          <Popover.Button>
            <div
              className={`flex items-center space-x-4 justify-end ${
                searchInput && "text-black dark:text-white"
              } ${scrolled ? "text-gray-500 dark:text-white" : "text-white"}`}
            >
              <p className="hidden md:inline cursor-pointer">Become a host</p>
              <GlobeAltIcon className="h-6 cursor-pointer" />
              <div
                className={`flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:text-[#FF5A60] hover:border-[#FF5A60] ${
                  searchInput && "border-black dark:border-white"
                }`}
              >
                <MenuIcon className="h-6" />
                <UserCircleIcon className="h-6" />
              </div>
            </div>
          </Popover.Button>
          <Popover.Panel className="absolute z-50 bg-white dark:bg-[#626262] dark:text-white dark:border-[#626262] top-12 rounded-md p-3 border darkModeTransition">
            <div className="flex flex-col">
              <div className="flex space-x-3">
                <div>Dark Mode</div>
                <div>
                  <Switch
                    checked={darkModeSwitch}
                    onChange={changeDarkModeState}
                    className={`${
                      darkModeSwitch ? "bg-black" : "bg-gray-200"
                    } relative inline-flex items-center h-6 rounded-full w-11`}
                  >
                    <span
                      className={`${
                        darkModeSwitch ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </Slide>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto md:bg-white md:rounded-lg md:border">
          <div className="flex flex-col col-span-3 mx-auto md:p-2">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold pl-4 dark:bg-white">
                Number of Guests
              </h2>

              <UsersIcon className="h-5" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number"
                min={1}
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>
            <div className="flex">
              <button
                onClick={resetInput}
                className="flex-grow text-gray-500 rounded-lg hover:bg-black hover:text-white p-2"
              >
                Cancel
              </button>
              <button
                onClick={search}
                className="flex-grow text-red-500 border-lg p-2 rounded-lg hover:bg-[#FF5A60] hover:text-white"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
