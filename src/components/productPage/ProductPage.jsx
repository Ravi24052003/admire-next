"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import ProductRightPricing from "../product/ProductRightPricing";
import ProductDetailLeft from "../product/ProductDetailLeft";
import ProductBottomCarousel from "../carousels/ProductBottomCarousel";
import FormModal from "../FormModal";
import SwiperProductCarousel from "../carousels/productCarousels/SwiperProductCarousel";
import SocialMediaShare from "../SocialMediaShare";
import PageBanner from "../PageBanner";
import { motion } from "framer-motion";
const ProductPage = ({ singleProductData, params }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModalFunc = () => {
    setOpenModal(false);
  };
  const openModalFunc = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div>
        <PageBanner heading={"Admire Holidays"} text={""} />
        {openModal && (
          <FormModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            closeModalFunc={closeModalFunc}
            openModalFunc={openModalFunc}
          />
        )}

        <div>
          <section
            className="bg-[rgb(248,248,248)]"
            key={singleProductData._id}
          >
            <div className="mt-20 px-5 py-16 bg-[#F2FBFA]">
              {/* <SwiperProductCarousel
                carouselImageUrl={singleProductData.carouselImageUrl}
              /> */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-10xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-10 p-6"
              >
                <div>
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-auto rounded-lg"
                  >
                    <source src="/Admire1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="flex sm:justify-between gap-5 justify-start sm:flex-row flex-col sm:items-center px-5 bg-white shadow-lg rounded-lg p-6 border-l-8 border-[#C72025]">
                  <div className="flex flex-col gap-5">
                    <h1 className="md:text-4xl text-2xl font-semibold text-[#C72025]">
                      {singleProductData.heading}
                    </h1>
                    <div className="flex justify-between lg:flex-row flex-col gap-3">
                      <div className="flex gap-2 items-center">
                        <CiLocationOn size={25} color="#E59934" />
                        <p className="text-gray-700">
                          {singleProductData.subHeading}
                        </p>
                        <CiHeart size={25} color="#fd4c5c" />
                      </div>
                      <SocialMediaShare
                        params={params}
                        singleProductData={singleProductData}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className=" px-5 mx-auto">
              {/* <div className="flex max-w-7xl lg:flex-row flex-col-reverse gap-10"></div> */}
              <ProductDetailLeft
                overview={singleProductData.overview}
                overView={singleProductData.overView}
                mapSrc={singleProductData.mapSrc}
                reviewHeading={singleProductData.reviewHeading}
                reviews={singleProductData.reviews}
                itinerary={singleProductData.itinerary}
                exclusions={singleProductData.exclusions}
                inclusions={singleProductData.inclusions}
                packageOptions={singleProductData.packageOptions}
              />
              <ProductRightPricing
                price={singleProductData.price}
                previousPrice={singleProductData.previousPrice}
                openModalFunc={openModalFunc}
                visaPolicy={singleProductData.visaPolicy}
              />
            </div>
            <ProductBottomCarousel />
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
