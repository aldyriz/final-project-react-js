import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Vacancy = () => {
  const [data, setData] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDetailClick = (jobId) => {
    setActiveCard(jobId);
  };

  return (
    <>
      <section className="p-10">
        <div className="container mx-auto mt-10 md:mt-40">
          <h1 className="text-2xl text-center font-bold md:text-5xl">
            Pilihan Lowongan Kerja
          </h1>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {data.map((job) => (
            <div
              key={job.id}
              className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={job.company_image_url}
                alt="img"
                className="mt-20 h-80 object-cover mt-1 "
              />
              <div className="p-4 flex flex-col flex-1">
                <h1 className="text-gray-900 font-bold text-xl">{job.title}</h1>
                <p className="mt-2 text-gray-600 text-sm">{job.company_name}</p>
                <p className="mt-2 text-gray-600 text-sm">{job.company_city}</p>
                <p className="mt-2 text-gray-600 text-sm">{job.job_type}</p>
                <div className="flex items-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-sm">
                    Salary: {job.salary_min}-{job.salary_max}
                  </h1>
                  <button
                    className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                    onClick={() => handleDetailClick(job.id)}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeCard !== null && (
        <div
          className="bg-black fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 flex justify-center items-center"
          onClick={() => setActiveCard(null)}
        >
          <div className="bg-white p-4 rounded-md">
            {data.map((job) => {
              if (job.id === activeCard) {
                return (
                  <div key={job.id} className="flex flex-col md:flex-row">
                    <img
                      src={job.company_image_url}
                      alt="img"
                      className="w-52 h-52 object-cover object-center md:w-1/4 md:h-auto md:mr-4"
                    />
                    <div className="mt-4 md:mt-0 md:w-3/4">
                      <h1 className="text-2xl font-bold">{job.title}</h1>
                      <p>({job.job_type})</p>
                      <p className="font-bold">
                        {job.company_name} - {job.company_city}
                      </p>
                      <p className="font-bold">{job.job_tenure}</p>
                      <p>
                        <span className="font-bold">Description: </span>
                        {job.job_description}
                      </p>
                      <p>
                        <span className="font-bold">Qualification: </span>
                        {job.job_qualification}
                      </p>
                      <p>
                        <span className="font-bold">Salary: </span>
                        {job.salary_min} - {job.salary_max}
                      </p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Vacancy;
