import { GlobeAltIcon } from "@heroicons/react/solid";
import { CurrencyDollarIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 pt-14 pb-4 bg-gray-100 text-gray-600 darkModeTransition dark:bg-[#626262]">
        <div className="space-y-4 text-xs text-gray-800 border-b border-gray-400 pb-4 ">
          <h5 className="footerMaintext">ABOUT</h5>
          <p className="footerSubText">How Airbnb works</p>
          <p className="footerSubText">Newsroom</p>
          <p className="footerSubText">Airbnb 2021</p>
          <p className="footerSubText">Investors</p>
          <p className="footerSubText">Airbnb Plus</p>
          <p className="footerSubText">Airbnb Luxe</p>
          <p className="footerSubText">HotelTonight</p>
          <p className="footerSubText">Airbnb for Work</p>
          <p className="footerSubText">Made possible by Hosts</p>
          <p className="footerSubText">Careers</p>
          <p className="footerSubText">Founders' Letter</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 border-b border-gray-400 pb-4">
          <h5 className="footerMaintext">COMMUNITY</h5>
          <p className="footerSubText">Diversity & Belonging</p>
          <p className="footerSubText">Against Discrimination</p>
          <p className="footerSubText">Accessibility</p>
          <p className="footerSubText">Airbnb Associates</p>
          <p className="footerSubText">Frontline Stays</p>
          <p className="footerSubText">Guest Referrals</p>
          <p className="footerSubText">Gift cards</p>
          <p className="footerSubText">Airbnb.org</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 border-b border-gray-400 pb-4">
          <h5 className="footerMaintext">HOST</h5>
          <p className="footerSubText">Host your home</p>
          <p className="footerSubText">Host an Online Experience</p>
          <p className="footerSubText">Host an Experience</p>
          <p className="footerSubText">Responsible hosting</p>
          <p className="footerSubText">Resource Center</p>
          <p className="footerSubText">Community Center</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 border-b border-gray-400 pb-4">
          <h5 className="footerMaintext">Support</h5>
          <p className="footerSubText">Our COVID-19 Response</p>
          <p className="footerSubText">Help Center</p>
          <p className="footerSubText">Cancellation options</p>
          <p className="footerSubText">Neighbourhood Support</p>
          <p className="footerSubText">Trust & Safety</p>
        </div>
      </div>
      <div className="px-32 -py-10 bg-gray-100 text-gray-800 text-xs pb-14 dark:bg-[#626262] dark:text-white darkModeTransition">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="pb-5 md:pb-0">
            &#169; 2021 Airbnb, Inc.{" "}
            <span>
              &bull;{" "}
              <span className=" cursor-pointer hover:underline hover:opacity-80">
                Privacy
              </span>{" "}
              &bull;{" "}
              <span className=" cursor-pointer hover:underline hover:opacity-80">
                Terms
              </span>{" "}
              &bull;{" "}
              <span className=" cursor-pointer hover:underline hover:opacity-80">
                Sitemap
              </span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-5">
              <span className="flex items-center">
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <span className="cursor-pointer hover:underline hover:opacity-80">
                  English (US)
                </span>
              </span>
              <span className="flex items-center">
                <CurrencyDollarIcon className="h-6 cursor-pointer" />
                <span className="cursor-pointer hover:underline hover:opacity-80">
                  USD
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
