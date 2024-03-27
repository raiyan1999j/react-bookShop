import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faFile, faLocationDot, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function WishList({info}){
    const {bookId,
        author,
        bookName,
        category,
        image,
        publisher,
        rating,
        review,
        tags,
        totalPages,
        yearOfPublishing,} = info

    const navigate = useNavigate();

    const detailsPage=()=>{
        navigate(`/details/${bookId}`)
    }
    return(
        <>
        <div className="flex flex-row border rounded-xl mt-[25px] small:flex-col small:items-center small:py-6">
                <div className="h-[229px] w-[230px] rounded-xl bg-[#1313130d] flex justify-center items-center small:mb-6">
                    <div className="h-[172px] w-[129px] py-7">
                        <img src={image} alt={bookName} className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="w-[867px] ml-6 small:w-full small:ml-0 small:px-6">
                    <h2 className="capitalize text-[#131313] font-playFair text-2xl font-bold small:text-xl">
                        {bookName}
                    </h2>
                    <p className="text-[#131313cc] capitalize text-base font-medium font-workSans my-4">
                        by : {author}
                    </p>
                    <div className="flex flex-row capitalize">
                        <div>
                            <h5 className="text-[#131313] font-workSans text-base font-bold">tag</h5>
                        </div>
                        <div className="mx-4 text-[#23BE0A] font-workSans text-base font-medium flex flex-row">
                            {tags.map((value,id)=>{
                                return <h5 key={id} className="mr-5 small:mr-2">#{value}</h5>
                            })}
                        </div>
                        <div className="text-[#131313cc] text-base font-normal capitalize font-workSans">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2"/>
                            year of publishing: {yearOfPublishing}
                        </div>
                    </div>
                    <div className="flex flex-row text-[#13131399] capitalize text-base font-normal font-workSans my-4 small:justify-between">
                    <div className="mr-4">
                        <p>
                        <FontAwesomeIcon icon={faUsers} className="mr-3"/>
                            publisher: {publisher}
                        </p>
                    </div>
                    <div>
                        <p>
                        <FontAwesomeIcon icon={faFile} className="mr-3"/>
                            page {totalPages}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row ">
                    <div className="bg-[#328eff26] rounded-full px-5 py-[11px]">
                        <h4 className="text-[#328EFF] text-base font-normal capitalize font-workSans small:text-sm">
                            category: {category}
                        </h4>
                    </div>
                    <div className="bg-[#ffac3326] rounded-full px-5 py-[11px] mx-3">
                        <h4 className="text-[#FFAC33] text-base font-normal capitalize font-workSans small:text-sm">
                            rating: {rating}
                        </h4>
                    </div>
                        <button className="bg-[#23BE0A] rounded-full px-5 py-[11px] text-white capitalize small:text-sm" onClick={detailsPage}>
                            view details
                        </button>
                </div>
                </div>
                
            </div>
        </>
    )
}