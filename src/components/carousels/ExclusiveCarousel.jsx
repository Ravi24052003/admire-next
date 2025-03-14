"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import conf from "../../../conf/conf";

const TrendingDestination = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch API Data
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const { data } = await axios.get(`${conf.laravelBaseUrl}/public-itineraries-trending`);
        console.log("TrendingDestination.jsx", data);
        setDestinations(data);
      } catch (err) {
        setError("Failed to fetch data.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, []);

  // KeenSlider Initialization
  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current && destinations.length > 0) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: { origin: "center", perView: 1, spacing: 8 },
        breakpoints: {
          "(min-width: 288px)": { slides: { perView: 1, spacing: 8 } },
          "(min-width: 768px)": { slides: { perView: 2, spacing: 8 } },
          "(min-width: 1024px)": { slides: { perView: 3, spacing: 12 } },
        },
      });

      autoSlideInterval.current = setInterval(() => {
        if (keenSlider.current) {
          keenSlider.current.next();
        }
      }, 10000);
    }

    return () => {
      if (keenSlider.current) {
        keenSlider.current.destroy();
        keenSlider.current = null;
      }
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [destinations]);

  return (
    <section className="mb-6 py-10">
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8">
        <h2 className="text-center text-[#261F43] md:text-5xl text-3xl font-bold mb-4">
        Exclusive Packages
        </h2>

        {loading ? (
          <p className="text-lg text-gray-600 text-center">Loading destinations...</p>
        ) : error ? (
          <p className="text-lg text-red-600 text-center">{error}</p>
        ) : (
          <div className="relative lg:col-span-2 lg:mx-0">
            <div ref={sliderContainer} className="keen-slider">
              {destinations.map((destination, i) => (
                <div className="keen-slider__slide" key={destination.id || i}>
                  <div className="max-w-sm rounded-lg shadow-lg border border-gray-200 bg-gray-50 p-2 min-h-[220px] relative">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden">
                      <Image
                        src={`${conf.laravelBaseUrl.replace(/\/$/, "")}/${destination.destination_thumbnail.replace(/^\//, "")}`}
                        alt={destination.title || "Destination"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 bg-white rounded-lg shadow-lg border-2"
                    >
                      <motion.h2
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg font-bold text-[#4D456B]"
                      >
                        {destination.title}
                      </motion.h2>
                      <p className="text-[13px] font-semibold text-[#CF1E27]">
                        {destination.feedback}
                      </p>
                      <p>{destination.days}</p>

                      <div className="flex gap-4 items-center mt-4">
                        {destination.link ? (
                          <Link className="w-full" href={destination.link}>
                            <motion.button
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              className="w-full md:px-8 py-2 text-white rounded-lg transition-all"
                              initial={{ scale: 1 }}
                              animate={{
                                backgroundColor: isHovered ? "#CF1E27" : "#E69233",
                                scale: isHovered ? 1.05 : 1,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              Know More
                            </motion.button>
                          </Link>
                        ) : (
                          <button
                            disabled
                            className="w-full md:px-8 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed"
                          >
                            No Link Available
                          </button>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingDestination;
