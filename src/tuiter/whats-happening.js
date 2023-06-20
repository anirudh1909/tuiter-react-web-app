import React, {useState} from "react";
import {createTuitThunk} from "./services/tuits-thunks";
import {useDispatch} from "react-redux";
import {BsFillImageFill, BsFiletypeGif, BsBarChart, BsEmojiSmile, BsGeoAlt} from "react-icons/bs"
const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
    const newTuit = {
        tuit: whatsHappening
      }
      dispatch(createTuitThunk(newTuit));
      setWhatsHappening("");
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img alt = "imgn" src="/images/nasa.png" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
            <BsFillImageFill className="me-3"/>
            <BsFiletypeGif className="me-3"/>
            <BsBarChart className="me-3"/>
            <BsEmojiSmile className="me-3"/>
            <BsGeoAlt className="me-3"/>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;