import { useState } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/femaleProfile.jpg";

const Employee = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 3,
      fullName: "david mornore",
      designation: "JavaScript Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "jemmy jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 5,
      fullName: "alexandro anahita",
      designation: "JavaScript Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 6,
      fullName: "jeremy jones ",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 7,
      fullName: "ahmad ali ",
      designation: "JavaScript Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 8,
      fullName: "jamal abdullah ",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 9,
      fullName: "maryam kamal ",
      designation: "JavaScript Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 10,
      fullName: "alechandro mossolini ",
      designation: "Node.js Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 11,
      fullName: "Frank Jones",
      designation: "JavaScript Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 12,
      fullName: "Jerry Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
  ]);
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div class="card-collection">
            {employees.map((employee) => (
              <div
                id={employee.id}
                className="card m-2 "
                style={{ cursor: "pointer" }}
              >
                {employee.gender === "male" ? (
                  <img
                    alt="employee pictures"
                    src={femaleProfile}
                    className="card-img-top"
                  />
                ) : (
                  <img
                    alt="employee pictures"
                    src={maleProfile}
                    className="card-img-top"
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title"> full Name:{employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation:</b>
                    {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;
