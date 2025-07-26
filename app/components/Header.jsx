import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

function Header() {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-auto flex flex-col items-center justify-center gap-4 pt-30">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.user_image}
          alt="profile-image"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-family-Ovo"
      >
        Hi! I'm Mohd Adnaan Azam
        <Image src={assets.hand_icon} alt="profile-image" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-family-Ovo"
      >
        Software Engineer based in Mumbai, Maharashtra
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-family-Ovo"
      >
        Accomplished software developer with {currentYear - 2021} years of
        experience in development of web and mobile applications. Excels in
        every stage of the life cycle of software development, including design
        creation, coding, debugging, testing, and maintenance.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="contact-btn"
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/adnaan_resume.pdf"
          download
          className="px-10 py-3 border  rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="resume-download"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
