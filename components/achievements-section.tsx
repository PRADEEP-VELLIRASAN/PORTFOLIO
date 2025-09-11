"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Users, Code, Shield } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Air Pollution Monitoring System - Second Prize",
      description:
        "Won Second Prize for IoT-based Air Pollution Monitoring System in inter-college competition, recognized for innovation and environmental impact",
      year: "2025",
      category: "Competition Winner",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Trophy,
      title: "KEC Hackathon 2025",
      description: "Selected in KEC Hackathon 2025 (Inter-college) at Kongu Engineering College",
      year: "2025",
      category: "Competition",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Code,
      title: "Smart India Hackathon 2024",
      description: "Selected in Smart India Hackathon 2024 (Inter-college) at Kongu Engineering College",
      year: "2024",
      category: "National Competition",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "NCC Senior Division",
      description: "Completed 3 years of NCC (National Cadet Corps) as Cadet Senior Division",
      year: "2020-2022",
      category: "Leadership",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Best Cadet Award",
      description: "Best Cadet Award at Kongu Polytechnic College for Academic year 2022-2023",
      year: "2022-2023",
      category: "Academic Excellence",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Cadet Under Officer (CUO)",
      description: "Ranked as CUO (Cadet Under Officer) NCC Senior Division",
      year: "2022-2023",
      category: "Leadership Role",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Star,
      title: "NCC Certificates",
      description: "Completed NCC 'B' & 'C' Certificate Examinations successfully",
      year: "2022",
      category: "Certification",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  const stats = [
    { number: "1", label: "Second Prize Winner", icon: Trophy },
    { number: "3", label: "Hackathon Selections", icon: Trophy },
    { number: "3", label: "Years NCC Service", icon: Shield },
    { number: "2", label: "NCC Certificates", icon: Award },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
            Achievements &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recognition
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A track record of excellence in academics, competitions, and leadership roles
          </p>
        </motion.div>

        {/* Stats overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center`}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{achievement.year}</div>
                  <div
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-white`}
                  >
                    {achievement.category}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </div>

              {/* Hover effect indicator */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${achievement.color}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              With a proven track record of excellence and leadership, I'm excited to take on new challenges and
              contribute to innovative projects that make a meaningful impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium transition-all duration-200"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Let's Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
