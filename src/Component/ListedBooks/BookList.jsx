import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faFile, faLocationDot, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './Tab.css';
import { useLoaderData } from "react-router-dom";
import ReadList from "./ReadList";
import WishList from "./WishList";

export default function BookList() {
  const {readList,wishList} = useLoaderData();
  
  const readBook = JSON.parse(readList);
  const wishBook = JSON.parse(wishList);

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
            {
              readBook?.map((value,id)=>{
                return <ReadList
                  key={id}
                  info={value}
                />
              })
            }
          </TabPanel>
          <TabPanel>
            {
              wishBook?.map((value,id)=>{
                return <WishList key={id} info={value}/>
              })
            }
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}
