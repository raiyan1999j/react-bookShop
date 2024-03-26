import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function BookCard({track,docs}){
    const {bookName,author,image,publisher,rating,tags} = docs;
    const navigate = useNavigate();

    const detailsPage=()=>{
        navigate(`/details/${track}`)
    }
    return(
        <>
            <div className="border rounded-lg flex flex-col items-center py-6" onClick={detailsPage}>
                <div className="w-[326px] py-8 flex justify-center items-center bg-[#F3F3F3] rounded-lg">
                    <div className="h-[166px] w-[134px]">
                        <img src={image} alt="bookImage" className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="w-[326px] py-6">
                    <ul className="flex flex-row justify-between capitalize text-[#23BE0A] text-base font-medium font-workSans">
                        {tags.map((value,id)=>{
                            return(
                                <li key={id} className=''>
                                    {value}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="after:h-[1px] after:border after:border-dashed after:my-5 flex flex-col">
                    <h3 className="capitalize text-[#131313] text-2xl font-bold font-playFair mt-[23px] mb-4">
                        {bookName}
                    </h3>
                    <p className="text-base font-workSans font-medium capitalize text-[#131313cc] ">
                        by: {author}
                    </p>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h5 className="text-[#131313cc] capitalize font-workSans text-base font-medium">{publisher}</h5>
                        </div>
                        <div>
                            <p className="text-[#131313cc] capitalize font-workSans text-base font-medium">
                                {rating}
                                <FontAwesomeIcon icon={faStar} className='ml-2'/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}