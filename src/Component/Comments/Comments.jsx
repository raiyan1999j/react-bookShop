import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function Comments() {
  const loadJson = useLoaderData();
  const loadData = JSON.parse(loadJson);
  const [selectedBook,setSelect] = useState("");
  const [collection,setCollection] = useState([]);
  const userName = useRef();
  const userEmail= useRef();
  const userBook = useRef(selectedBook);
  const userComment=useRef();

  const collectData=()=>{
    let customColor = "#" + Math.ceil(Math.random() * 16777215).toString(16);
    let copy = [...collection];

    let wrap = {
        name: userName.current.value,
        email: userEmail.current.value,
        book: userBook.current.value,
        comment: userComment.current.value,
        color:customColor
    }

    copy.push(wrap);

    setCollection(copy);
  }

  return (
    <>
      <section className="w-[1170px] mx-auto mt-[52px] small:w-[468px]">
        <div className="grid grid-cols-2 gap-x-6 small:grid-cols-1 small:gap-y-6">
          <div className="border border-t-0 border-l-0 border-b-0 small:border-r-0 small:border-b small:w-full small:flex small:justify-center small:items-center small:py-4">
            <div className="w-[80%] py-6 px-6 border rounded-xl">
              <label className="input input-bordered flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="w-4 h-4 opacity-70" />
                <input type="text" className="grow" placeholder="Your name" ref={userName} />
              </label>

              <label className="input input-bordered flex items-center gap-2 mt-6">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 h-4 opacity-70"
                />
                <input type="text" className="grow" placeholder="Email" ref={userEmail} />
              </label>

              <div className="flex flex-row justify-between items-center mt-3">
                <div>
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                      Select Your Book
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {loadData.map((value, id) => {
                        return (
                          <li
                            key={id}
                            className="flex flex-row justify-between  items-center border-2 border-t-0 border-r-0 border-l-0 rounded-xl" 
                            onClick={()=>{setSelect(value.bookName)}}
                          >
                            <span className="w-[60%]">{value.bookName}</span>
                            <span className="h-[60px] w-[60px] ml-2">
                              <img
                                src={value.image}
                                alt={value.bookName}
                                className="h-full w-full object-contain"
                              />
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      type="text"
                      className="input input-bordered w-full max-w-xs"
                      disabled
                      ref={userBook}
                      value={selectedBook}
                    />
                  </div>
                </div>
              </div>

              <label className="form-control">
                <div className="label"></div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Comment" ref={userComment}
                ></textarea>
                <div className="label"></div>
              </label>

              <div>
              <button className="btn btn-outline btn-primary" onClick={collectData}>Comment</button>
              </div>
            </div>
          </div>
          <div className="small:w-full small:flex small:justify-center small:items-center small:flex-col">
            {
                collection.map((value,id)=>{
                    return <CommentCard key={id} info={value}/>
                })
            }
          </div>
        </div>
      </section>
    </>
  );
}
