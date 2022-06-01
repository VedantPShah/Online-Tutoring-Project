import React, {useState} from 'react';
import "./videos.css";


const Tutors = (props) => {
    const [flag, setCount] = useState(-1);
    return (
        <div>
        <h1 classNem = "top-title">Tutor List</h1>
        <hr></hr>

        <div class="topnav">
            <input className="top-input" type="text" name="search" size="large" value={props.search || ""} onChange={(e) => props.handleChange(e)} placeholder="Search for tutors" />
        </div>

        <div class="row pad">
         {props.tutorslist.length > 0 ? props.tutorslist.map( (tutors, id) => (
             (flag == -1?
             <div className="col-md-4 pad" key={ id }>
             <div className="card">
                 <div className="card-body">
                     <div className="row">
                         <div className="col-4">
                         <img class="card-img-top-1" src={tutors.image} alt="Card image cap"/>
                         </div>
                         <div className="col-8">
                         <div className="row">
                             <h5 className={"card-title-1"}>{ tutors.name }</h5>
                         </div>
                         <div className="row">
                            <h6 className="card-subtitle-1 mb-2 text-muted">Rating :{ tutors.rating } </h6>
                         </div>
                         <div className="row">
                            <h6 className="card-subtitle-1 mb-2 text-muted">{ tutors.location}</h6>
                         </div>
                         <div className="row">
                            <h6 className="card-subtitle-1 mb-2 text-muted">{ tutors.email } </h6>
                         </div>
                          
                         </div>
                     </div>
                     <div className="row">
                     </div>
           
                     <p className="card-text">{ tutors.aboutMe } </p>
                     <button type='button' onClick={() => (setCount(id))}>Expand</button>
                 </div>
           </div>
         </div>
         : 
         (id == flag)?<div className="card">
         <div className="card-body">
             <div className="row">
             <div className="col-3">
                <img class="card-img-top-2" src={tutors.image} alt="Card image cap"/>       
             </div>
             <div className="col-7">
             <div className="row-2">
                <h5 className={"card-title-2"}>{ tutors.name }</h5>
                <h6 className="card-subtitle-2 mb-2">Rating: { tutors.rating }</h6>
                <h6 className="card-subtitle-2 mb-2">{ tutors.email } </h6>
                <h6 className="card-subtitle-2 mb-2">{ tutors.location}</h6> 
             </div>
                   
             </div>
             </div>
             <hr></hr>
         
             <h5 className={"card-title"}>About Me:</h5>
             <p className="card-text">{ tutors.aboutMe } </p>  

             <hr></hr>

             <h5 className={"card-title"}>Education</h5>
             <div className="card-text">{ tutors.details.map((d, i) =>(
                <ul>
                    <li  key = {i}>{ d.name }</li>
                </ul>
             )) }
             </div>

             <hr></hr>

             <h5 className={"card-title"}>Courses</h5>
             <div className="card-text">{ tutors.course.map((c, i) =>(
                <div key = {i}>
                <ul>
                    <li>{ c.courseName }</li>
                    <ul>
                        <li>Description: { c.courseDesciption }</li>
                        <li>Course Rating: { c.rating }</li>
                    </ul>
                </ul>
                </div>
             )) }
             </div>
             
             <button type='button' onClick={() => (setCount(-1))}>Close</button>
         </div>
   </div>
   :<div></div>)
        )) 
        : <div className="card red" > The tutor you are searching for was not found!</div>
      }
      </div>
      </div>
    
      );

}

export default Tutors;


    
    