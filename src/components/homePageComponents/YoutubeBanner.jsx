"use client";

import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    feedback:
      "Admire Holidays made my trip unforgettable! The planning was top-notch, and every detail was carefully considered. The hotels they arranged were luxurious with excellent service, ensuring a comfortable stay. Highly recommend Admire Holidays for a hassle-free and memorable travel experience!",
    rating: 5,
    imageUrl: "/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    feedback:
      "Booking my vacation with Admire Holidays was one of the best decisions I’ve made! The trip itself was extraordinary. The hotels were very comfortable and had amazing facilities that made the stay even more enjoyable. I can’t wait to travel with them again!",
    rating: 4,
    imageUrl: "/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Sandeep Singh",
    feedback:
      "I had the best holiday experience thanks to Admire Holidays. The hotel stays were exceptional, offering great amenities and comfort, which really helped me relax. Every leg of the journey was seamless, and I didn’t have to worry about any logistics.",
    rating: 5,
    imageUrl: "/testimonial3.jpg",
  },
  {
    id: 4,
    name: "Anjali Patel",
    feedback:
      "Admire Holidays took care of everything from start to finish, making our family vacation absolutely perfect. The trip was well-organized with a great mix of sightseeing and leisure. The whole experience was smooth, and I’ll definitely be booking with them again!",
    rating: 4,
    imageUrl: "/testimonial4.jpg",
  },
];

const galleryImages = [
  "/Goacllient1.jpeg",
  "/Goacllient2.jpeg",
  "/Goacllient3.jpeg",
  "/Sikkimclient1.jpeg",
  "/Sikkimclient2.jpeg",
  "/Sikkimclient3.jpeg",
  "/client1.jpeg",
  "/client2.jpeg",
  "/client3.jpeg",
  "/client4.jpeg",
];

export default function Testimonials() {
  return (
    <section className="px-6 min-h-screen mt-32">
      <h2 className="text-4xl font-semibold text-[#CF1E27] text-center">
        Client Testimonials for Admire Holidays
        <p className="text-xl text-[#E69233] mt-2">
          Your trusted partner in travel and tour experiences.
        </p>
      </h2>

      {/* Gallery Section */}
      <section className="py-12 px-4 md:px-16 lg:px-32 bg-gray-100">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#CF1E27] mb-8">
          Explore Our Gallery
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-32 md:h-40 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <div className=" justify-center gap-8 px-4 md:px-16">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg p-6  "
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {testimonial.name}
            </h4>
            <img
              src={testimonial.imageUrl}
              alt={`Testimonial from ${testimonial.name}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ${
                    index < testimonial.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
