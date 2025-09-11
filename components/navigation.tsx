"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Code2 } from "lucide-react"

interface NavigationProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Navigation({ darkMode, toggleDarkMode }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      const sections = navItems.map((item) => item.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-lg sm:text-xl font-bold text-gray-900 dark:text-white"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="hidden sm:block">Pradeep V</span>
              <span className="sm:hidden">PV</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1 backdrop-blur-sm">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white dark:bg-gray-700 rounded-full shadow-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.button
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Dark mode toggle (always visible on desktop) */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </motion.button>

              {/* Contact button - hidden on mobile */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="hidden sm:flex items-center px-3 sm:px-4 lg:px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-200 text-xs sm:text-sm lg:text-base"
              >
                <span className="hidden lg:inline">Let's Connect</span>
                <span className="lg:hidden">Connect</span>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-14 sm:top-16 left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-between w-full text-left px-6 py-4 transition-all duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-500"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span className="font-medium text-base">{item.name}</span>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-blue-500 rounded-full"
                      />
                    )}
                  </motion.button>
                ))}

                {/* Dark mode toggle inside mobile menu */}
                <div className="px-6 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleDarkMode}
                    className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {darkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                    <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
