import React, { useState } from "react";
import data from "./data.json"

const Dataserve = () => {

    const [students, setStudents] = useState(data);
    const [addStudentData, setAddStudentData ] = useState({
        studentId:'',
        studentName:'',
        address:'',
        courseName:'',
    })

    const handleAddStudentChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newStudentData = { ...addStudentData};
        newStudentData[fieldName] = fieldValue;

        setAddStudentData(newStudentData);

    }

    const handleAddStudentSubmit = (event) => {
        event.preventDefault();

        const newStudent = {
            studentId : addStudentData.studentId,
            studentName : addStudentData.studentName,
            address : addStudentData.address,
            courseName : addStudentData.courseName,

            
        };

        const newStudents = [ ...students, newStudent];
        setStudents(newStudents);

    };

    return (<div className="class-container">
        <table>
            <thead>
                <tr>
                    <th>Student-Id</th>
                    <th>Student-Name</th>
                    <th>Address</th>
                    <th>Course-Name</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr>
                    <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.address}</td>
                    <td>{student.courseName}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
        <h2>New student details</h2>
        <form onSubmit={handleAddStudentSubmit}>
            <input 
             type="number" 
             name="studentId" 
             required="required" 
             placeholder="Enter the Id"
             onChange={handleAddStudentChange} 
            />
            <input 
             type="text" 
             name="studentName" 
             required="required" 
             placeholder="Enter the Studentname"
             onChange={handleAddStudentChange}  
            />
            <input 
             type="text" 
             name="address" 
             required="required" 
             placeholder="Enter the address"
             onChange={handleAddStudentChange}
             />
             <input 
             type="text" 
             name="courseName" 
             required="required" 
             placeholder="Enter the coursename"
             onChange={handleAddStudentChange} 
            />
            <button type="submit">Add</button>
        </form>
    </div>
    );
};

export default Dataserve;



































































// import { useState } from "react";

// function Student(){
//  const [sstudentid, setstudentid] = useState("1000");
//   const [sstudentname, setstudentname] = useState("Binsu");
//   const [saddress, setaddress] = useState("Elappumpattu, Mumbai");
//   const [scoursename, setcoursename] = useState("Computer Science");
//   return (
//       <>
//       <table className='table'>
//           <thead className='table-header'>
//               <tr>
//                   <th colSpan="4"><h1>Student Details</h1></th>
//               </tr>
//               <tr>
//               <th>StudentID</th>
//               <th>StudentName</th>
//               <th>Address</th>
//               <th>CourseName</th>
//               </tr>
//           </thead>
//           <tr className="table-body">
//               <td>{sstudentid}</td>
//               <td>{sstudentname}</td>
//               <td>{saddress}</td>
//               <td>{scoursename}</td>
//           </tr>
//           <tr className="table-body">
//           <td><input id="sstudentid" type="text"></input></td>
//           <td><input id="sstudentname" type="text"></input></td>
//           <td><input id="saddress" type="text"></input></td>
//           <td><input id="scoursename" type="text"></input></td>
//           </tr>
//           <tr className="table-body">
//               <td colSpan="4">
//                   <button onClick={()=> {
//                       setstudentid(document.getElementById("sstudentid").value);
//                       setstudentname(document.getElementById("sstudentname").value);
//                   setaddress(document.getElementById("saddress").value);
//                 setcoursename(document.getElementById("scoursename").value);
//                   }}
//                   type="button" className="cust">Update</button>
//                   </td>
//                    </tr>
//       </table>
//       </>

//   )}
     
//   export default Student;