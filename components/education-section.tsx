"use client"

import { motion } from "framer-motion"
import { Calendar, Award, MapPin } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Kongu Engineering College",
      duration: "2023 - 2026",
      grade: "CGPA: 6.68",
      status: "Currently Pursuing",
      icon: "🎓",
      color: "from-blue-500 to-purple-500",
    },
    {
      degree: "Diploma in Computer Technology",
      field: "Computer Technology",
      institution: "Kongu Polytechnic College",
      duration: "2020 - 2023",
      grade: "Percentage: 91.23%",
      status: "Completed",
      icon: "💻",
      color: "from-green-500 to-teal-500",
    },
    {
      degree: "Secondary School",
      field: "Higher Secondary Education",
      institution: "Sri Sathya Sai Matric Hr. Sec School",
      duration: "2019 - 2020",
      grade: "Percentage: 90.1%",
      status: "Completed",
      icon: "📚",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Educational{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A strong academic foundation in technology and computer science with consistent excellence
          </p>
        </motion.div>

        {/* Education timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10 hidden lg:block" />

                {/* Education card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center text-2xl`}
                        >
                          {edu.icon}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</span>
                          </div>
                          <div
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              edu.status === "Currently Pursuing"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            }`}
                          >
                            {edu.status}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.field}</p>
                      <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{edu.grade}</span>
                      </div>
                    </div>

                    {/* Progress indicator for current education */}
                    {edu.status === "Currently Pursuing" && (
                      <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">In Progress</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">91.23%</div>
            <div className="text-gray-600 dark:text-gray-400">Diploma Grade</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">90.1%</div>
            <div className="text-gray-600 dark:text-gray-400">Secondary School</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">6.68</div>
            <div className="text-gray-600 dark:text-gray-400">Current CGPA</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
