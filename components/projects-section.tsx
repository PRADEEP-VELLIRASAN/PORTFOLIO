"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Code, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ImageCarouselProps {
  images: string[]
  title: string
}

const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 1) {
    return (
      <Image
        src={images[0] || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
      />
    )
  }

  return (
    <div className="relative">
      <Image
        src={images[currentImage] || "/placeholder.svg"}
        alt={`${title} - Image ${currentImage + 1}`}
        width={400}
        height={300}
        className="w-full h-64 object-cover transition-all duration-300"
      />

      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Image indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImage ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
        {currentImage + 1} / {images.length}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Air Pollution Monitoring System",
      year: "2025",
      description:
        "An innovative IoT-based air pollution monitoring system that provides real-time air quality data with smart sensors, data analytics, and mobile alerts. Winner of First Prize in inter-college competition for its practical implementation and environmental impact.",
      technologies: ["IoT", "Arduino", "React", "Node.js", "MongoDB", "Sensor Integration"],
      github: "https://github.com/PRADEEP-VELLIRASAN/Air-Pollution-Monitor",
      images: ["https://blogger.googleusercontent.com/img/a/AVvXsEjJLXnW5BZO9zpBE_A3yx4PF2JNtRnsebhgc6u75K_401KZeMZ7TC1z4bJZrNTm4tb4W_9SxS-r0qzc1Yjg5I41pT5CwYPClSoCEgSyg6di9ltqpoTMIJMtSwETiAFYZL81aE3swML86M52gmBtLCpIt2HgGKy2uySde6mMJmpkUCwfZfK6yjIazVQurG4",
        "https://blogger.googleusercontent.com/img/a/AVvXsEhE9sXC7z4YL4JA2JKDDLkO8pOFVmaiYaqCGCMvw0Soup0hf0XzNvqKNpRooGKO8GWdk9ayCBGTeGozCfyKOtOMnQxny6BCk9v5Mtmo-Z9qA-SyNYmURoWps9pvAutucyDZPU-2aEhyHwtzvEi_8mt6828vqauxl1axEDyW8uDRRfHLe1JAkDLje0N52fc",
        "https://blogger.googleusercontent.com/img/a/AVvXsEi5F296DvdlyVY6HM1Mf5mgSKm0K-XjginXh6w0NQZCn-3fs6Sw6f_puLAy7NzcKaRVPqdNQIZdBdmxRVxsxGBzAYhM1JVWdFZQYUZc-fSkcaQkrnpfdEdom80Ehtvetj7mo1j4CMlQDZ5BqmGFglhriLwZTnVrQczaczrrl9j7v4uTT-P-783gtGZBeeY",
        "https://blogger.googleusercontent.com/img/a/AVvXsEiNjuoL0Z-0kbm6oD2Jig1mFo1FQFd5UUGhqlCizcWrB1CMRPgBnZw-imcYjL_6xohI5ukL-Lkh_gw4Il-AQrJjKih9A8au6zHrcWhx3AyM5zVafj77roY0oGxQJFojqRkrhhR4vxloXdj07PLVKZAFAqr6ISpBwrfBLRbzIAFjskCeu0SdKgBcdcQxQ08",
        "https://blogger.googleusercontent.com/img/a/AVvXsEi0Aq8Zdez14ePAbwqZr_d1AmTzQb3KhhPZGQ9ggHbbrHWBWpwJDOezQJRAlR9WtHjmcYPC98ur0rYjbT6-UeoScpgasSeJeq9GY--Ia7RQE_mD1EoLu6QeDP8n13oVNhG-A-g_fbGr_efVIUdBflZKg9EOY4H-INuYcPYf6HyZf0oz7sjnqXQmb1_9MQY",
        
      ],
      featured: true,
      category: "IoT Project",
      award: "🏆 Second Prize Winner",
    },
    {
      title: "Sports Connect",
      year: "2025",
      description:
        "Creating a unique platform for sports persons and associations to connect together, fostering community and collaboration in the sports industry.",
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB"],
      github: "https://github.com/PRADEEP-VELLIRASAN/Sports-Connect",
      images: [
       "https://blogger.googleusercontent.com/img/a/AVvXsEgAX6XP39F8GzyFp5eqrrksjZQ7YOX2Ug1lWaEEsAdmR5X7OC1QRAZ44kVfE9dK3-BnZ103OD9kGaFZ6CJB2ZOBzIBjQsLUSwmj5p_OKF4Mj-ZZVPnxvUO2lgjsywu4G5q0fpseeYz7XtfwpcRxV0Mf5RZBy9_W0kmBO3QIx2LiXExtiIwEde6jSZ4xmV0",
       "https://blogger.googleusercontent.com/img/a/AVvXsEiULUT2DyYwIOZSDpdYrwAodGzbkvhGjQ9jHzN1GL2DKzbfWQJrVMgAuDDlwegDF6TWDExdtBGDxn4dS-P95U3U9ZRG_vDL5osofo7ZXAGe9HUb60VLyr-ItfXXWuwSoZ_9SC1m7XyXMNtR2Z82cRVDyn_hsJ5csNaDe2T4SqcGzQJtyOZhZnHmVf1Ii0c",
       "https://blogger.googleusercontent.com/img/a/AVvXsEiNl55lpoH_3KD71ePXLVEICZuXoh2Q3Lm8X7Xox-HoeMTKWuxEDlzquNfUIpnjZ5wN_vL7zUDV5fiuRjjNgj-oED3WVgG9PGSFTvGmc0CxAFwimYBz_NAOX4K0rO3LcTdqfuknjcj5cl91a1cxKuneSwreAatALCPJQpQta4G7JrzZAvwE0eQN2_LRSU0",
       "https://blogger.googleusercontent.com/img/a/AVvXsEiQl29YPwEw7mbKGcgnpWuhf1PrrJu9ZVM2qNSTQjzrlAMXd5xlzyYalPdZnrwJdBEC9apQfesNE6SJbLc9xjCiIkjMryJrmgj57xnokAc0tUtB96skqkKDmNZq94CjZhqZ3MgikwJ0wORHl_CJx2wsJmnaTv_wXs3ysvPWXrGo9GLYpM43gTpUpjBfBVc",
       "https://blogger.googleusercontent.com/img/a/AVvXsEgH4RnkkIE77TIglhhao4EAaAiWupBeLGJzQr-SmnVYFGch8BH4gwnO7br8qrdj8J-RIF-tuY63MJfCnv1X9HVDZ0HxJ3pGE9UOJO9D60a1RGgTSeQ53RL5fU0L19OEIKWxEF94GV5wQtVoD5eDrfObHkk0sfONSrEiG_Ac9vDlXy5LrI4I_Vqu3SX8jm4",
       "https://blogger.googleusercontent.com/img/a/AVvXsEhB3kM74x6YfSt6x-IW4veCUmy3UbNQR9nopZ7FyzV6gtgNlxm1sJvG1SKaAfGjxBmgMB2F87EpUMuF_MCwPtVovmgBTxdYoZkxccyF09MdYglnM71fKbL98c4Wr0TGUruuSTwOaiCpB-MUw-uojZYbQERPjFJ_xyN1vqBxdkXVBHrpcS4HpHdaMP_4Fe8",
      ],
      featured: true,
      category: "Web Platform",
    },
    {
      title: "Crop Rotation Planner with AI",
      year: "2024",
      description:
        "An intelligent crop rotation planner that helps farmers and gardeners plan crop sequences to improve soil health, manage pests and diseases effectively.",
      technologies: ["React", "Python", "SupaBase", "AI/ML"],
      github: "https://github.com/PRADEEP-VELLIRASAN/Crop-Rotation-Planner-With-AI",
      images: [
        "https://blogger.googleusercontent.com/img/a/AVvXsEgxFeShK7ML_Qzzh0U6NmbcpXLvqtl8nqx333x3-7InHqljAwxeSH6Ea0cgM1NSsq6-3reGbEBuAEAl9nqJdLiBaIx_VgnyH78qquU1BhBlQ_hrNSYKvCaki1akjPqPUwRTNMOeJ9CgyyW_QbDymhpyXUykHcJRd9sPcN-WwbT-UgG_WyCjfUUeSxuL8hE",
        "https://blogger.googleusercontent.com/img/a/AVvXsEiqhaYoUitS9PaPd6ZxKX4yyvI_PooTKpDiIii8oeltG3eVAfLncyTTu6z_p-cNFwX8i2JHvxDm1Bgom716CmCeWPKXCKAhmW04XdJ_tSND14Of1HbFjpmcaiGh1DUp4kJBVqlBRszlcQPX_cp475u-YxtjwFmhEDmZwz47KHYdBHs79J4JusHeS6hM7rU",
        "https://blogger.googleusercontent.com/img/a/AVvXsEigBttITulVGeikijbgkL5aR0K3nzvDoTUMYZg23CIi7tsONqaZh30idZZA1dTRkXeqe4oMByuEWxGTaCgma9pCb294meUti1R7e8s9f9y6ezChRiwspFnM27twwQm2g5E0zYEHfkpGWB4QhlJ-Lj-HAfcldhDTkCmxjwXBWLJEwfJSY9zDxfim9vKYZ0s",
        "https://blogger.googleusercontent.com/img/a/AVvXsEgZ7n0rkWoyCRhC2P8KL3gZs78WeR-Z6fYc8zYmVDqLvFmkbgHtyI0qX0LSZ93d7upbkyvY4WBGdmtjXVpe0DnNrSXtCTERanYOgLDjPiMQwRehlwsoObKbDsq7EPMPfBhjJjD_T-NH61Bu9Qy0nHECoJDL-Mcap0dvacrO--I_ohSyyVFLjulWZBqRPcc",
        "https://blogger.googleusercontent.com/img/a/AVvXsEi88zzq4FRyTL1Mjlh_v6d6Jl5Of8GP5BVcDY5-w7fOIOGZc3VOKwMmNCjUv6SGiZqhAd3_QYZJij9AjG1e2jnTz-n1mpnx46Ccuzm8Ur9FkcwHNWQ8RB0msjZBZNlXmXhCA_y-afpgjMwuH_r8T7de_81FT2CMwqO2CREqjkbyzmaOGAQN6qkbOV6-FUY",
        "https://blogger.googleusercontent.com/img/a/AVvXsEhx_Uf-F4U8kvkaHyyJOKllbpNn_THHvMoHBBBxYPbRxbtKCVDsuyBc4VMyWjxIFm2Y-jvF2pnToB_ZhJmTvGQU_u252Eu3IG0wojlul_KyqV4N8rxUMkJ7JJgZQpgIA9TRjM8hU-kBiK5BJQYVxgHTLSeu4tW8M8nxlgcOrhNHgYS6VF-GtiDP813FxdE",
      ],
      featured: true,
      category: "AI Application",
    },
    {
      title: "Weather Forecasting",
      year: "2024",
      description:
        "A comprehensive weather forecasting application that predicts atmospheric conditions at future times and specific locations with high accuracy.",
      technologies: ["React", "MongoDB", "Weather API"],
      github: "https://github.com/PRADEEP-VELLIRASAN/Weather-Forecasting",
      images: ["https://blogger.googleusercontent.com/img/a/AVvXsEjZLsBXcvRgttF79ybY4o3A_TX9bArqi5oIVP9HwwMFZcz8SVsDC5lJAw7GraxOdBsSEG635IEjzLHOYTOAMGGc8wjjboJHyd4miIh7zrOOcCWzfpo-GzfrjnmiVsbQzDg0FyHw11C5__396mhSttOEoUZ_Et3UkOaET6FC-CdgsPaJ7XzjI3gPiR_aGWc",
        "https://blogger.googleusercontent.com/img/a/AVvXsEiRIJoMvWDqbHzVFo9CuQC1WgHWySaP75TWwD9iS3cYzOVKIQ6E7Eo_7sx00HNfIkGx2jjB80hWNx5ip6eEF5pbC4nDyBXdNQdo0z5fULONU3-pv67zo9pjj5netrzcqszeXSN1qkAF_zVYiW6U61HfrP-eJ3xryGX_-sodqJVqGB7EWV_N8yZHhb0qp3M",
        "https://blogger.googleusercontent.com/img/a/AVvXsEjVDUUDdX0RaaDzkTyhkzWW6EAGwRqGE9RCAZXtRIelavkpri2x6Q_8rIi9CWa30MPRN1TzlP-WI8gkrlPHFESVlzYJ0yCuYuKY8C0iMbFAaAOjhoFvAUB4yMI4b1lTZFY36-Knm6i29Rqjfa3LhN9uprkPf-IdRF0VQY_k37TR1f7tp_q0L-v2TyuoSYI",
        "https://blogger.googleusercontent.com/img/a/AVvXsEhG3W7OwvkQxA24CTyRJBoS2j5RiwMa5I78lWweNm6JHQHdwjbjEzjceRWkiXvVcOn0uRI8PNAcGSuHa5vLHk_mX8TY100a1i1PI63Zd-UuTbcx-X_MOyGBmj4EsHl-4mzRVuY-_Cz8Fr_EvAGJ1ehE3J_z8sW4Gltohkhuj_3VYl81i6K_fAUsrFT0sUs",
      ],
      featured: false,
      category: "Web Application",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions and applications that showcase my technical skills and problem-solving abilities
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl ${
                project.featured
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
                  : "bg-white dark:bg-gray-800"
              } shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500`}
            >
              <div className={`grid ${index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"} gap-8 p-8`}>
                {/* Project image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} relative`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl"
                  >
                    <ImageCarousel images={project.images} title={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Project category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-sm font-medium text-gray-900 dark:text-white z-20">
                      {project.category}
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium z-20">
                      {project.year}
                    </div>

                    {/* Award badge for winning projects */}
                    {project.award && (
                      <div className="absolute bottom-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg z-20">
                        {project.award}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Project content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} flex flex-col justify-center space-y-6`}>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Code className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technologies Used</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Featured project indicator */}
              {project.featured && (
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-yellow-400">
                  <span className="absolute -top-12 -right-1 text-white text-xs font-bold transform rotate-45">★</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/PRADEEP-VELLIRASAN"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
