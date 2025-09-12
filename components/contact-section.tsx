"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, CheckCircle } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xrbkngzn")

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "9344790803",
      href: "tel:9344790803",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      value: "geethapradeep243@gmail.com",
      href: "mailto:geethapradeep243@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Krishnagiri, Tamil Nadu",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "PRADEEP-VELLIRASAN",
      href: "https://github.com/PRADEEP-VELLIRASAN",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "pradeep-v",
      href: "https://linkedin.com/in/pradeep-v",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: ExternalLink,
      title: "LeetCode",
      value: "Pradeep_vellirasan",
      href: "https://leetcode.com/u/Pradeep_vellirasan/",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's connect and create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.title}</div>
                      <div className="text-gray-900 dark:text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Social Links</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center`}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{social.title}</div>
                      <div className="text-gray-900 dark:text-white font-medium">{social.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send your Message Here</h3>

            {/* Success Message */}
            {state.succeeded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
              >
                <div className="flex items-center space-x-2 text-green-800 dark:text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Message sent successfully!</span>
                </div>
                <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={state.submitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Type your message here..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className={`w-5 h-5 ${state.submitting ? "animate-pulse" : ""}`} />
                <span>{state.submitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
