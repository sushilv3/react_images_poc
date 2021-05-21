import React, { useState } from "react";
import "../MOCK_DATA.json";
import data from "../MOCK_DATA.json";

const Student = () => {
  console.log(data);
  const [students, setStudents] = useState(data);

  const filterItem = (item) =>{
      console.log(item);
    const updatedItems = students.filter((currElem)=>{
        return currElem.university === item;
    });
    setStudents(updatedItems);
  }
  return (
    <>
      <div className="menu-tabs">
        <div className="menu-tab">
          <button className="btn">All</button>
          <button className="btn" onClick={()=>filterItem('University of Gezira')}>University of Gezira</button>
          <button className="btn">University of Gezira</button>
          <button className="btn">Trinity University</button>
          <button className="btn">Lahti Polytechnic</button>
        </div>
      </div>

      {/**my main item section */}
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {students.map((student) => {
                const {
                  id,
                  first_name,
                  last_name,
                  email,
                  gender,
                  profile_pic,
                  university,
                } = student;
                return(
                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="row item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img scr={profile_pic} alt={profile_pic} className="img-fluid" />
                      </div>
                      <div className="col-12 col-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h4>{id}First Name : {first_name} Last Name : {last_name}</h4>
                          <p>{email}</p>
                          <p>{gender}</p>
                          <h5>{university}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Student;
