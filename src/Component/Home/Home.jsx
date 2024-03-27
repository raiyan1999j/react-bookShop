import { useLoaderData, useNavigate } from 'react-router-dom';
import BookCard from './BookCard';

export default function Home() {
    const info = useLoaderData();
    const navigate = useNavigate();

    const visitPage=()=>{
      navigate('/bookList')
    }
  return (
    <>
      <section className="w-[1170px] mx-auto bg-[#1313130d] rounded-lg mt-[52px] small:w-[468px] medium:w-[624px]">
        <div className="grid grid-cols-[526px_318px] gap-x-[86px] py-20 px-[120px] small:grid-cols-1 small:gap-y-[86px] medium:grid-cols-1 medium:gap-y-[86px]">
          <div className='small:w-full small:flex small:flex-col small:justify-center small:items-center medium:flex-col medium:justify-center medium:items-center medium:flex'>
            <h1 className="font-bold font-playFair text-[56px] text-[#131313] capitalize small:text-[28px] small:text-center medium:text-[28px] medium:text-center">Revive your shelf with captivating books</h1>
            <button className="font-bold font-workSans text-xl capitalize bg-[#23BE0A] rounded-xl py-[21px] px-7 text-white mt-[48px]" onClick={visitPage}>visit the list</button>
          </div>
          <div className='small:w-full small:flex small:flex-col small:justify-center small:items-center medium:w-full medium:flex medium:flex-col medium:justify-center medium:items-center'>
            <div className="h-[394px] w-[318px] small:h-[230px] medium:h-[230px]">
                <img src="https://i.postimg.cc/MHBFpN4B/banner-Image.png" alt="bookList" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-[1170px] mx-auto mt-[100px] small:w-[468px] medium:w-[624px]">
        <h2 className="text-center text-[#131313] font-playFair text-[40px] font-bold">
            Books
        </h2>
      </section>

      <section className="w-[1170px] mx-auto mt-10 small:w-[468px] medium:w-[624px]">
        <div className="w-full grid grid-cols-3 gap-x-6 gap-y-6 small:grid-cols-1 medium:grid-cols-1">
            {info.map((value,id)=>{
                return <BookCard 
                key={id}
                track={value.bookId}
                docs={value}
                />
            })}
        </div>
      </section>
    </>
  );
}
