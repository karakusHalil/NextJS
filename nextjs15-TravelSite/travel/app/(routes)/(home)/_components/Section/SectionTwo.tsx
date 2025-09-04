"use client";

import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import React from "react";

const SectionTwo = () => {
  return (
    <>
      <div className="bg-orange-100 mt-12">
        <div className="mx-auto container text-center py-16 lg:px-28">
          <div className="mb-4">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "WELCOME TO TRAVEL",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "SEYAHATE HOŞ GELDİNİZ",
                2000,
                "WILLKOMMEN BEI TRAVEL",
                2000,
                "BIENVENUE A TRAVEL",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl lg:text-4xl font-bold text-blue-600"
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-center items-center mb-6">
            <hr className="border-gray-300 w-1/5" />
            <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
            <hr className="border-gray-300 w-1/5" />
          </div>

          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            veritatis amet exercitationem suscipit optio deserunt eligendi quos
            quisquam harum fugiat est aut debitis iusto, nostrum dicta provident
            sunt reiciendis consectetur animi. Veritatis vel ducimus odit!
            Dignissimos, quod! Aliquam esse laboriosam, dolor delectus
            dignissimos ad praesentium eos at, in, ratione deleniti.
          </p>
          <div className="flex justify-center gap-4">
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              <Button className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition">
                Details
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              <Button className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition">
                Browser
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
