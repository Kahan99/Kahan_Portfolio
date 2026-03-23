"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import self from '../../assets/images/self.svg'

export default function AboutUs() {
     return (
          <section className="w-full min-h-screen py-24 flex items-center justify-center px-4">
               <div className="max-w-6xl mx-auto w-full  flex flex-col-reverse items-center justify-between md:flex-row gap-12 mt-4">
                    <div className="w-full md:w-1/2">
                         <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                              <img
                                   src={self}
                                   alt="Developer portrait"
                                   className="w-full h-full object-cover object-center invert opacity-80 drop-shadow-lg"
                                   loading="lazy"
                              />
                         </div>
                    </div>
                    <div className="w-full md:w-1/2 grid gap-8 ">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className="space-y-2"
                         >
                              <p className="text-sm text-emerald-500 font-semibold tracking-wider uppercase">About Me</p>
                         </motion.div>

                         <motion.h1
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight lg:leading-[1.2] max-w-3xl text-gray-100"
                         >
                              B.Tech IT student passionate about Full-Stack Development & Backend Engineering.
                         </motion.h1>

                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="pt-6 space-y-6 text-gray-400"
                         >
                              <p className="text-lg md:text-xl leading-relaxed">
                                Interested in AI Applications and Automation. Currently learning FastAPI, Machine Learning integration & Agentic AI. Exploring AI + Web + Blockchain systems.
                              </p>
                              
                              <div className="space-y-4 pt-4 border-t border-gray-800">
                                <div className="flex flex-col">
                                  <span className="text-emerald-500 font-medium">Education</span>
                                  <span className="text-gray-200">B.Tech IT Student at Birla Vishvakarma Mahavidyalaya</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-emerald-500 font-medium">Achievement</span>
                                  <span className="text-gray-200">Reliance Foundation Scholar (2022)</span>
                                </div>
                              </div>
                         </motion.div>
                    </div>
               </div>
          </section>
     )
}