
export default function CommentCard({info}){

    const additional ={
        background:`linear-gradient(to top right, ${info.color} 5%,rgb(149,165,166,0.3) 100%)`
    }
    return(
        <>
            <div className="rounded-xl w-[80%] py-6 px-6 text-white mb-5" style={additional}>
                <div className="flex flex-row items-center">
                    <h4 className="font-bold font-workSans capitalize text-lg">User Name:</h4>
                    <p className="capitalize pl-6 font-playFair text-base font-semibold">{info.name}</p>
                </div>
                <div className="flex flex-row items-center">
                    <h4 className="font-bold font-workSans capitalize text-lg">User Email:</h4>
                    <p className="capitalize pl-6 font-playFair text-base font-semibold">{info.email}</p>
                </div>
                <div className="flex flex-row items-center">
                    <h4 className="font-bold font-workSans capitalize text-lg">Book Name:</h4>
                    <p className="capitalize pl-6 font-playFair text-base font-semibold">{info.book}</p>
                </div>
                <div>
                    <h4 className="font-bold font-workSans capitalize text-lg">my opinion:</h4>
                    <div className="mt-4 border border-sky-300/60 rounded-xl p-3">
                        <p className="font-playFair capitalize">
                            {info.comment}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}