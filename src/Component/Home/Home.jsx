import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <section className="w-[1170px] mx-auto bg-[#1313130d] rounded-lg mt-[52px]">
        <div className="grid grid-cols-[526px_318px] gap-x-[86px] py-20 px-[120px]">
          <div>
            <h1 className="font-bold font-playFair text-[56px] text-[#131313] capitalize">Revive your shelf with captivating books</h1>
            <button className="font-bold font-workSans text-xl capitalize bg-[#23BE0A] rounded-xl py-[21px] px-7 text-white">visit the list</button>
          </div>
          <div>
            <div className="h-[394px] w-[318px]">
                <img src="https://i.postimg.cc/MHBFpN4B/banner-Image.png" alt="bookList" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-[1170px] mx-auto mt-[100px]">
        <h2 className="text-center text-[#131313] font-playFair text-[40px] font-bold">
            Books
        </h2>
      </section>

      <section className="w-[1170px] mx-auto mt-10">
        <div className="w-full grid grid-cols-3 gap-x-6 gap-y-6">
            <div className="border rounded-lg flex flex-col items-center py-6">
                <div className="w-[326px] py-8 flex justify-center items-center bg-[#F3F3F3] rounded-lg">
                    <div className="h-[166px] w-[134px]">
                        <img src="https://i.postimg.cc/MHBFpN4B/banner-Image.png" alt="bookImage" className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="w-[326px] py-6">
                    <ul className="flex flex-row capitalize text-[#23BE0A] text-base font-medium font-workSans">
                        <li className="mr-7">young adult</li>
                        <li>identity</li>
                    </ul>
                    <div className="after:h-[1px] after:border after:border-dashed after:my-5 flex flex-col">
                    <h3 className="capitalize text-[#131313] text-2xl font-bold font-playFair mt-[23px] mb-4">
                        the catcher in the ray
                    </h3>
                    <p className="text-base font-workSans font-medium capitalize text-[#131313cc] ">
                        by: awlad hossain
                    </p>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h5 className="text-[#131313cc] capitalize font-workSans text-base font-medium">fiction</h5>
                        </div>
                        <div>
                            <p className="text-[#131313cc] capitalize font-workSans text-base font-medium">
                                5.00
                                <FontAwesomeIcon icon={faStar} className='ml-2'/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded-lg flex flex-col items-center py-6">
                <div className="w-[326px] py-8 flex justify-center items-center bg-[#F3F3F3] rounded-lg">
                    <div className="h-[166px] w-[134px]">
                        <img src="https://i.postimg.cc/MHBFpN4B/banner-Image.png" alt="bookImage" className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="w-[326px] py-6">
                    <ul className="flex flex-row capitalize text-[#23BE0A] text-base font-medium font-workSans">
                        <li className="mr-7">young adult</li>
                        <li>identity</li>
                    </ul>
                    <div className="after:h-[1px] after:border after:border-dashed after:my-5 flex flex-col">
                    <h3 className="capitalize text-[#131313] text-2xl font-bold font-playFair mt-[23px] mb-4">
                        the catcher in the ray
                    </h3>
                    <p className="text-base font-workSans font-medium capitalize text-[#131313cc] ">
                        by: awlad hossain
                    </p>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h5 className="text-[#131313cc] capitalize font-workSans text-base font-medium">fiction</h5>
                        </div>
                        <div>
                            <p className="text-[#131313cc] capitalize font-workSans text-base font-medium">
                                5.00
                                <FontAwesomeIcon icon={faStar} className='ml-2'/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded-lg flex flex-col items-center py-6">
                <div className="w-[326px] py-8 flex justify-center items-center bg-[#F3F3F3] rounded-lg">
                    <div className="h-[166px] w-[134px]">
                        <img src="https://i.postimg.cc/MHBFpN4B/banner-Image.png" alt="bookImage" className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="w-[326px] py-6">
                    <ul className="flex flex-row capitalize text-[#23BE0A] text-base font-medium font-workSans">
                        <li className="mr-7">young adult</li>
                        <li>identity</li>
                    </ul>
                    <div className="after:h-[1px] after:border after:border-dashed after:my-5 flex flex-col">
                    <h3 className="capitalize text-[#131313] text-2xl font-bold font-playFair mt-[23px] mb-4">
                        the catcher in the ray
                    </h3>
                    <p className="text-base font-workSans font-medium capitalize text-[#131313cc] ">
                        by: awlad hossain
                    </p>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h5 className="text-[#131313cc] capitalize font-workSans text-base font-medium">fiction</h5>
                        </div>
                        <div>
                            <p className="text-[#131313cc] capitalize font-workSans text-base font-medium">
                                5.00
                                <FontAwesomeIcon icon={faStar} className='ml-2'/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded-lg flex flex-col items-center py-6">
                <div className="w-[326px] py-8 flex justify-center items-center bg-[#F3F3F3] rounded-lg">
                    <div className="h-[166px] w-[134px]">
                        <img src="https://i.postimg.cc/MHBFpN4B/banner-Image.png" alt="bookImage" className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="w-[326px] py-6">
                    <ul className="flex flex-row capitalize text-[#23BE0A] text-base font-medium font-workSans">
                        <li className="mr-7">young adult</li>
                        <li>identity</li>
                    </ul>
                    <div className="after:h-[1px] after:border after:border-dashed after:my-5 flex flex-col">
                    <h3 className="capitalize text-[#131313] text-2xl font-bold font-playFair mt-[23px] mb-4">
                        the catcher in the ray
                    </h3>
                    <p className="text-base font-workSans font-medium capitalize text-[#131313cc] ">
                        by: awlad hossain
                    </p>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h5 className="text-[#131313cc] capitalize font-workSans text-base font-medium">fiction</h5>
                        </div>
                        <div>
                            <p className="text-[#131313cc] capitalize font-workSans text-base font-medium">
                                5.00
                                <FontAwesomeIcon icon={faStar} className='ml-2'/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded-lg flex flex-col items-center py-6">
                <div className="w-[326px] py-8 flex justify-center items-center bg-[#F3F3F3] rounded-lg">
                    <div className="h-[166px] w-[134px]">
                        <img src="https://i.postimg.cc/MHBFpN4B/banner-Image.png" alt="bookImage" className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="w-[326px] py-6">
                    <ul className="flex flex-row capitalize text-[#23BE0A] text-base font-medium font-workSans">
                        <li className="mr-7">young adult</li>
                        <li>identity</li>
                    </ul>
                    <div className="after:h-[1px] after:border after:border-dashed after:my-5 flex flex-col">
                    <h3 className="capitalize text-[#131313] text-2xl font-bold font-playFair mt-[23px] mb-4">
                        the catcher in the ray
                    </h3>
                    <p className="text-base font-workSans font-medium capitalize text-[#131313cc] ">
                        by: awlad hossain
                    </p>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h5 className="text-[#131313cc] capitalize font-workSans text-base font-medium">fiction</h5>
                        </div>
                        <div>
                            <p className="text-[#131313cc] capitalize font-workSans text-base font-medium">
                                5.00
                                <FontAwesomeIcon icon={faStar} className='ml-2'/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded-lg flex flex-col items-center py-6">
                <div className="w-[326px] py-8 flex justify-center items-center bg-[#F3F3F3] rounded-lg">
                    <div className="h-[166px] w-[134px]">
                        <img src="https://i.postimg.cc/MHBFpN4B/banner-Image.png" alt="bookImage" className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="w-[326px] py-6">
                    <ul className="flex flex-row capitalize text-[#23BE0A] text-base font-medium font-workSans">
                        <li className="mr-7">young adult</li>
                        <li>identity</li>
                    </ul>
                    <div className="after:h-[1px] after:border after:border-dashed after:my-5 flex flex-col">
                    <h3 className="capitalize text-[#131313] text-2xl font-bold font-playFair mt-[23px] mb-4">
                        the catcher in the ray
                    </h3>
                    <p className="text-base font-workSans font-medium capitalize text-[#131313cc] ">
                        by: awlad hossain
                    </p>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h5 className="text-[#131313cc] capitalize font-workSans text-base font-medium">fiction</h5>
                        </div>
                        <div>
                            <p className="text-[#131313cc] capitalize font-workSans text-base font-medium">
                                5.00
                                <FontAwesomeIcon icon={faStar} className='ml-2'/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
