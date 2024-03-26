import { useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

export default function Home() {
    const info = useLoaderData();
    
  return (
    <>
      <section className="w-[1170px] mx-auto bg-[#1313130d] rounded-lg mt-[52px]">
        <div className="grid grid-cols-[526px_318px] gap-x-[86px] py-20 px-[120px]">
          <div>
            <h1 className="font-bold font-playFair text-[56px] text-[#131313] capitalize">Revive your shelf with captivating books</h1>
            <button className="font-bold font-workSans text-xl capitalize bg-[#23BE0A] rounded-xl py-[21px] px-7 text-white mt-[48px]">visit the list</button>
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
