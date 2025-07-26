import { assets, experianceData, serviceData } from "@/assets/assets";
import { Dialog } from "@headlessui/react";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

function Experiance() {
  const [openDialogIndex, setOpenDialogIndex] = useState(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experiance"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-family-Ovo"
      >
        What I do?
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-family-Ovo"
      >
        My Experiance
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-family-Ovo"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        aperiam odit minima! Eius, ut magnam repellat non labore neque nostrum
        aliquid exercitationem aperiam quam dolorem, impedit et, nobis obcaecati
        laborum?
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {experianceData.map(
          (
            {
              companyLogo,
              jobTitle,
              companyName,
              workingPeriod,
              description,
              link,
            },
            index
          ) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <Image src={companyLogo} alt={companyName} className="w-10" />
              <h3 className="text-lg font-bold my-4 text-gray-700 dark:text-white">
                {jobTitle}
              </h3>
              <p>{companyName}</p>
              <p>{workingPeriod}</p>
              <p className="text-sm mt-5 cursor-pointer">
                <span className="font-semibold">{description[0].title}</span>{" "}
                {description[0].subDescription}
              </p>
              <p
                onClick={() => setOpenDialogIndex(index)}
                className="flex items-center gap-2 text-sm mt-5 cursor-pointer"
              >
                Read more
                <Image
                  src={assets.right_arrow}
                  alt="click-me"
                  className="w-4"
                />
              </p>
            </motion.div>
          )
        )}

        <Dialog
          open={openDialogIndex !== null}
          onClose={() => setOpenDialogIndex(null)}
          className="fixed z-50 inset-0 flex items-center justify-center px-6"
        >
          <div
            className="fixed inset-0 bg-black opacity-50"
            aria-hidden="true"
          />

          {openDialogIndex !== null && (
            <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-lg w-full dark:bg-darkTheme dark:text-gray-400 p-x6">
              <h2 className="text-lg font-bold mb-4">Work Done</h2>
              <div className="space-y-4">
                {experianceData[openDialogIndex]?.description?.map(
                  (desc, i) => (
                    <p key={i} className="text-sm">
                      <span className="font-semibold">{desc.title}</span>{" "}
                      {desc.subDescription}
                    </p>
                  )
                )}
              </div>
              <button
                onClick={() => setOpenDialogIndex(null)}
                className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          )}
        </Dialog>
      </motion.div>
    </motion.div>
  );
}

export default Experiance;
