import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Details() {
  const {
    bookId,
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = useLoaderData();

  const addToRead = () => {
    let wrap = {
      bookId,
      author,
      bookName,
      category,
      image,
      publisher,
      rating,
      review,
      tags,
      totalPages,
      yearOfPublishing,
    };

    let readList = localStorage.getItem("readList");
    let wishList = localStorage.getItem("wishList");

    if (!readList) {
      localStorage.setItem("readList", JSON.stringify([wrap]));

      if (wishList) {
        if (JSON.parse(wishList).find((value) => value.bookId == bookId)) {
          let copy = JSON.parse(wishList);
          let newData = copy.filter((value) => value.bookId != bookId);

          localStorage.setItem("wishList", JSON.stringify(newData));
        }
      }
    } else {
      if (!JSON.parse(readList).find((value) => value.bookId == bookId)) {
        let newData = JSON.parse(readList);

        newData.push(wrap);

        localStorage.setItem("readList", JSON.stringify(newData));

        if (wishList) {
          if (JSON.parse(wishList).find((value) => value.bookId == bookId)) {
            let copy = JSON.parse(wishList);
            let newData = copy.filter((value) => value.bookId != bookId);

            localStorage.setItem("wishList", JSON.stringify(newData));
          }
        }
      } else {
        toast("Already read");
      }
    }
  };

  const addToWish = () => {
    let wrap = {
      bookId,
      author,
      bookName,
      category,
      image,
      publisher,
      rating,
      review,
      tags,
      totalPages,
      yearOfPublishing,
    };

    let readList = localStorage.getItem("readList");
    let wishList = localStorage.getItem("wishList");

    if (readList) {
      if (JSON.parse(readList).find((value) => value.bookId == bookId)) {
        toast("Book already read");
      } else {
        if (!wishList) {
          localStorage.setItem("wishList", JSON.stringify([wrap]));
        } else {
          let newData = JSON.parse(wishList);

          newData.push(wrap);

          localStorage.setItem("wishList", JSON.stringify(newData));
        }
      }
    } else {
      if (!wishList) {
        localStorage.setItem("wishList", JSON.stringify([wrap]));
      } else {
        if (!JSON.parse(wishList).find((value) => value.bookId == bookId)) {
          let newData = JSON.parse(wishList);

          newData.push(wrap);

          localStorage.setItem("wishList", JSON.stringify(newData));
        } else {
          console.log("already added to wishList");
          toast("Book already added to wishList");
        }
      }
    }
  };
  return (
    <>
      <section className="w-[1170px] mx-auto mt-[52px]">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
        <div className="w-full grid grid-cols-2 gap-x-12">
          <div className="h-[711px] w-[573px] bg-[#1313130d] rounded-xl flex justify-center items-center">
            <div className="h-[564px] w-[425px]">
              <img
                src={image}
                alt={bookName}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-[#131313] text-[40px] font-bold font-playFair">
              {bookName}
            </h2>
            <div className="mt-5 after:h-[1px] after:w-full after:border after:mt-5 after:table">
              <h5 className="capitalize text-[#131313cc] font-workSans text-xl font-medium">
                by : {author}
              </h5>
            </div>
            <div className="mt-5 after:h-[1px] after:w-full after:border after:mt-5 after:table">
              <h5 className="capitalize text-[#131313cc] font-workSans text-xl font-medium">
                {category}
              </h5>
            </div>
            <div className="mt-5">
              <p className="text-base font-workSans font-normal capitalize">
                <span className="font-bold">review: </span>
                {review}
              </p>
            </div>
            <div className="mt-[57px] after:h-[1px] after:w-full after:border after:mt-5 after:table">
              <ul className="flex flex-row justify-between ">
                <li className="text-[#131313] font-workSans text-base font-bold capitalize">
                  Tags
                </li>
                {tags.map((value, id) => {
                  return (
                    <li
                      key={id}
                      className="text-[#23BE0A] text-base font-medium font-workSans capitalize"
                    >
                      #{value}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-6">
              <table>
                <tbody>
                  <tr className="capitalize font-workSans text-base">
                    <td className="text-[#131313b3] font-normal pr-[65px]">
                      number of pages
                    </td>
                    <td className="font-semibold text-[#131313] pb-3">
                      {totalPages}
                    </td>
                  </tr>
                  <tr className="capitalize font-workSans text-base">
                    <td className="text-[#131313b3] font-normal pr-[65px]">
                      publisher
                    </td>
                    <td className="font-semibold text-[#131313] pb-3">
                      {publisher}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-[#131313b3] font-normal pr-[65px]">
                      year of publishing
                    </td>
                    <td className="font-semibold text-[#131313] pb-3">
                      {yearOfPublishing}
                    </td>
                  </tr>
                  <tr className="capitalize font-workSans text-base">
                    <td className="text-[#131313b3] font-normal pr-[65px]">
                      rating
                    </td>
                    <td className="font-semibold text-[#131313]">{rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-row mt-8">
              <button
                className="capitalize text-lg font-workSans text-[#131313] font-semibold py-[18px] px-7 rounded-xl border border-[#1313134d] mr-4"
                onClick={addToRead}
              >
                Read
              </button>
              <button
                className="capitalize text-lg font-workSans text-white font-semibold py-[18px] px-7 rounded-xl bg-[#50B1C9]"
                onClick={addToWish}
              >
                wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
