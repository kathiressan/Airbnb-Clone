import { GlobeAltIcon } from "@heroicons/react/solid";
import { CurrencyDollarIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 pt-14 pb-4 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800 border-b border-gray-400 pb-4 ">
          <h5 className="font-bold">ABOUT</h5>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            How Airbnb works
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Newsroom
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Airbnb 2021
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Investors
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Airbnb Plus
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Airbnb Luxe
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            HotelTonight
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Airbnb for Work
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Made possible by Hosts
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Careers
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Founders' Letter
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 border-b border-gray-400 pb-4">
          <h5 className="font-bold">COMMUNITY</h5>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Diversity & Belonging
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Against Discrimination
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Accessibility
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Airbnb Associates
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Frontline Stays
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Guest Referrals
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Gift cards
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Airbnb.org
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 border-b border-gray-400 pb-4">
          <h5 className="font-bold">HOST</h5>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Host your home
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Host an Online Experience
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Host an Experience
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Responsible hosting
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Resource Center
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Community Center
          </p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 border-b border-gray-400 pb-4">
          <h5 className="font-bold">Support</h5>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Our COVID-19 Response
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Help Center
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Cancellation options
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Neighbourhood Support
          </p>
          <p className=" cursor-pointer hover:underline hover:opacity-80">
            Trust & Safety
          </p>
        </div>
      </div>
      <div className="px-32 -py-10 bg-gray-100 text-gray-800 text-xs pb-14">
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
