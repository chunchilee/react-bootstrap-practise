import React from "react";

const ShowCase = () => {
  return (
    <section className="bg-white text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Become a <span className="text-primary">Web Developer</span>
            </h1>
            <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <button
              className="btn btn-primary btn-lg mb-lg-5"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Start The Enrollment
            </button>
          </div>
          <img
            src="img/showcase.svg"
            className="img-fluid w-50 d-none d-lg-block"
            alt="showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
