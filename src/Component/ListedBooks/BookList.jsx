import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faFile, faLocationDot, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './Tab.css';

export default function BookList() {
  return (
    <>
      <section className="w-[1170px] mx-auto mt-[50px]">
        <div className="bg-[#1313130d] rounded-lg py-[33px] text-center">
          <h2 className="text-[#131313] font-workSans font-bold capitalize text-[28px]">
            Books
          </h2>
        </div>
        <div className="text-center mt-8">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="capitalize font-workSans text-lg font-semibold py-[15px] px-5 bg-[#23BE0A] text-white rounded-xl"
            >
              sort by <FontAwesomeIcon icon={faAngleDown} className="ml-4" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-[1170px] mx-auto mt-[56px]">
        <Tabs>
          <TabList>
            <Tab>read books</Tab>
            <Tab>wishlist books</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-row">
                <div className="h-[229px] w-[230px] rounded-xl bg-[#1313130d] flex justify-center items-center">
                    <div className="h-[172px] w-[129px] py-7">
                        <img src="https://i.postimg.cc/MHBFpN4B/banner-Image.png" alt="bookImage" className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="w-[867px] ml-6">
                    <h2 className="capitalize text-[#131313] font-playFair text-2xl font-bold">
                        the catcher in the rye
                    </h2>
                    <p className="text-[#131313cc] capitalize text-base font-medium font-workSans my-4">
                        by : awlad hossain
                    </p>
                    <div className="flex flex-row capitalize">
                        <div>
                            <h5 className="text-[#131313] font-workSans text-base font-bold">tag</h5>
                        </div>
                        <div className="mx-4 text-[#23BE0A] font-workSans text-base font-medium flex flex-row">
                            <h5 className="mr-3">#young adult</h5>
                            <h5>#identity</h5>
                        </div>
                        <div className="text-[#131313cc] text-base font-normal capitalize font-workSans">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2"/>
                            year of publishing: 1924
                        </div>
                    </div>
                    <div className="flex flex-row text-[#13131399] capitalize text-base font-normal font-workSans my-4">
                    <div className="mr-4">
                        <p>
                        <FontAwesomeIcon icon={faUsers} className="mr-3"/>
                            publisher: scribner
                        </p>
                    </div>
                    <div>
                        <p>
                        <FontAwesomeIcon icon={faFile} className="mr-3"/>
                            page 192
                        </p>
                    </div>
                </div>
                <div className="flex flex-row ">
                    <div className="bg-[#328eff26] rounded-full px-5 py-[11px]">
                        <h4 className="text-[#328EFF] text-base font-normal capitalize font-workSans">
                            category: classic
                        </h4>
                    </div>
                    <div className="bg-[#ffac3326] rounded-full px-5 py-[11px] mx-3">
                        <h4 className="text-[#FFAC33] text-base font-normal capitalize font-workSans">
                            rating: 4.5
                        </h4>
                    </div>
                        <button className="bg-[#23BE0A] rounded-full px-5 py-[11px] text-white capitalize">
                            view details
                        </button>
                </div>
                </div>
                
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}
