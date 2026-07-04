"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";

import ContactForm from "@/components/contact-form";

export default function ModernComingSoon() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactForm open={open} setOpen={setOpen} />
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-pink-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-[10%] right-[10%] w-72 h-72 rounded-full bg-indigo-400/20 blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-[45%] right-[25%] w-48 h-48 rounded-full bg-purple-400/20 blur-3xl animate-pulse [animation-delay:2s]" />
        </div>
        <div className="relative  w-full max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Coming Soon
            </h1>
            <p className="text-xl mb-12 text-gray-300">
              We&apos;re crafting something extraordinary. Stay tuned!
            </p>
            <Countdown
              date={Date.now() + 30 * 24 * 60 * 60 * 1000}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex justify-center space-x-4 mb-12">
                  {[
                    { label: "Days", value: days },
                    { label: "Hours", value: hours },
                    { label: "Minutes", value: minutes },
                    { label: "Seconds", value: seconds },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      className="text-center"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="text-4xl font-bold bg-white text-black bg-opacity-10 rounded-lg p-4 w-24 backdrop-blur-sm">
                        {item.value.toString().padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-sm text-gray-300">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            />
            {/* <motion.form
                            
                            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        > */}

            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
              onClick={() => setOpen(true)}
            >
              Notify Me
            </button>
            {/* </motion.form> */}
          </motion.div>
          <motion.div
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={`Follow us on ${social}`}
              >
                {social}
              </a>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-4 left-4 text-sm text-gray-400">
          © 2025 InternView All rights reserved.
        </div>
      </div>
    </>
  );
}
