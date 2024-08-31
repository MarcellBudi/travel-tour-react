import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="pb-20">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.007837322442!2d115.22373107589831!3d-8.690803388525953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2410294415595%3A0xb9b6c94ad0c08b24!2sInstitut%20Bisnis%20dan%20Teknologi%20Indonesia%20(INSTIKI)!5e0!3m2!1sid!2sid!4v1725070727465!5m2!1sid!2sid" width="100%" height="360" style={{ borderRadius: "20px" }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
