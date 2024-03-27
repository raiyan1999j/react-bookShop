import { useNavigate } from "react-router-dom"

export default function Error(){
    const navigate = useNavigate();

    const goBack=()=>{
        navigate(-1)
    }
    return(
        <>
            <section className="w-[1170px] mx-auto">
                <div className="w-[50%] rounded-xl flex flex-col justify-center items-center bg-gradient-to-tr from-sky-400/90 to-sky-300/20 py-6 px-6 absolute left-[25%] top-[25%]">
                    <h2 className="text-3xl text-center font-playFair capitalize text-red-600/80">
                        The page you are searching is not available at this moment
                    </h2>
                    <button className="py-[18px] px-7 rounded-xl bg-green-500 text-white font-workSans capitalize text-xl mt-4" onClick={goBack}>
                        Go Back
                    </button>
                </div>
            </section>
        </>
    )
}