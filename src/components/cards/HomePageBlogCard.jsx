"use client";
import Link from "next/link";
import Image from "next/image"; // Use next/image for optimization
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomePageBlogCard = ({ imageUrl, title, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="flex shadow-lg rounded-xl flex-col gap-1 border border-gray-200 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-56 sm:h-72">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill" // Ensures responsiveness
          objectFit="cover" // Maintains aspect ratio
          className={`rounded-xl transition-transform duration-1000 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 flex flex-col items-start justify-end p-5 transition-opacity duration-1000 ${
            isHovered ? "bg-black bg-opacity-60 opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            <p className="sm:text-xl text-lg font-medium text-white">{title}</p>
            {link && ( // Ensure link exists before rendering
              <Link className="flex items-center gap-5 text-white" href={link}>
                Read More <FaLongArrowAltRight size={30} color="white" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlogCard;
