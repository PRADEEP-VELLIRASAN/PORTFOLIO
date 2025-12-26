"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const socialLinks = [
    { icon: Github, href: "https://github.com/PRADEEP-VELLIRASAN", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/pradeep-v", label: "LinkedIn" },
    { icon: Mail, href: "mailto:geethapradeep243@gmail.com", label: "Email" },
  ];
  const contactInfo = [
    { icon: Phone, href: "tel:+919344790803", text: "+91 93447 90803" },
    { icon: Mail, href: "mailto:geethapradeep243@gmail.com", text: "geethapradeep243@gmail.com" },
    { icon: MapPin, href: "https://goo.gl/maps/2Qw8Qw8Qw8Qw8Qw8Q", text: "Erode, Tamil Nadu" },
  ];

  return (
  <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4"
            >
              <span className="block">Pradeep</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Vellirasan
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium"
            >
              Front-End Developer & Student
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-500 dark:text-gray-400 mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-base lg:text-lg"
            >
              Passionate about creating innovative web solutions and contributing to meaningful projects. Currently pursuing B.Tech in Information Technology at Kongu Engineering College.
            </motion.p>

            {/* Contact info - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-6 lg:mb-8"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <info.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm truncate">{info.text}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Action buttons - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-6 lg:mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 lg:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium flex items-center justify-center space-x-2 transition-all duration-200 text-sm lg:text-base shadow-lg"
                onClick={() => setShowResumeModal(true)}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#projects")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="px-6 lg:px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200 text-sm lg:text-base"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Projects</span>
              </motion.button>
            </motion.div>

            {/* Social media icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Animated background elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-500 rounded-full blur-xl opacity-30"
              />

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-lg"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full opacity-20 blur-lg"
              />

              {/* Profile image container - Clean without floating text */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10" />
                <Image
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEil7TaNT_7hhH4VmrjTf0aZfjnd1X5hPfETFjNmKMI_5Dq7_tZhMmx7DAPbZfmRYPPtGSAcopp1GE8EoOJhSGdP04ThGFnqFygSL_UgnRs3ZgK07qH2htOBCvgO_oOmk1jTevnvMEuTFoPQNWg-DPdziGWmaKvZHZu3iq1B7qojCweZ0MCGKoIQDkHrSD0"
                  alt="Pradeep Vellirasan"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=400&width=400"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Resume Modal Popup - placed just before section end */}
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative flex flex-col items-center">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
                onClick={() => setShowResumeModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <iframe
                src="/Professional Minimalist CV Resume (1).pdf"
                title="Resume Preview"
                className="w-full h-96 border rounded-xl mb-6"
              />
              <a
                href="/Professional Minimalist CV Resume (1).pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium flex items-center justify-center space-x-2 transition-all duration-200 text-base shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
