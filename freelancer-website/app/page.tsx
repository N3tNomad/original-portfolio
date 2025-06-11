"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  HeadphonesIcon,
  Globe,
  Star,
  Mail,
  MapPin,
  Menu,
  ExternalLink,
  CheckCircle,
  Users,
  Award,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function FreelancerWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Add this style tag in the head or create custom CSS */}
      <style jsx global>{`
  html {
    scroll-behavior: smooth;
  }
  
  /* Offset for sticky header */
  section {
    scroll-margin-top: 80px;
  }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-10px) rotate(-12deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-15px) rotate(12deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-3d {
          transform: rotateX(5deg) rotateY(-5deg);
        }
      `}</style>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">Eric Mbugua</h1>
                <p className="text-sm text-gray-600">Creative Freelancer</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                  href="/Projects"
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Projects
              </Link>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
              >
                Testimonials
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
              >
                Contact
              </button>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Hire Me
              </Button>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Available for Projects</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Creative Solutions for Your
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {" "}
                    Digital Needs
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  I'm Eric Mbugua Waweru, a multi-skilled freelancer specializing in graphic design, virtual assistance,
                  and WordPress development. Let's bring your vision to life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Talk
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main 3D Scene Container */}
              <div className="relative z-10 h-[600px] flex items-center justify-center">
                {/* Floating Background Elements */}
                <div className="absolute inset-0">
                  {/* Gradient Orbs */}
                  <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-bounce"></div>
                  <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-25"></div>
                </div>

                {/* Main Monitor/Screen */}
                <div className="relative transform rotate-3d perspective-1000 hover:scale-105 transition-transform duration-500">
                  {/* Monitor Base */}
                  <div className="w-80 h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-4 border-gray-700 relative overflow-hidden">
                    {/* Screen Glow */}
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"></div>

                    {/* Screen Content - Design Tools Interface */}
                    <div className="absolute inset-4 bg-white rounded-lg shadow-inner overflow-hidden">
                      {/* Top Bar */}
                      <div className="h-8 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center px-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="ml-4 text-white text-xs font-medium">Design Studio Pro</div>
                      </div>

                      {/* Design Interface */}
                      <div className="p-3 space-y-2">
                        {/* Figma-style Toolbar */}
                        <div className="flex space-x-2">
                          <div className="w-6 h-6 bg-purple-100 rounded border border-purple-200 flex items-center justify-center">
                            <Palette className="w-3 h-3 text-purple-600" />
                          </div>
                          <div className="w-6 h-6 bg-blue-100 rounded border border-blue-200 flex items-center justify-center">
                            <Globe className="w-3 h-3 text-blue-600" />
                          </div>
                          <div className="w-6 h-6 bg-green-100 rounded border border-green-200"></div>
                        </div>

                        {/* Design Canvas */}
                        <div className="bg-gray-50 rounded p-2 h-32">
                          <div className="grid grid-cols-3 gap-1 h-full">
                            <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded"></div>
                            <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded"></div>
                            <div className="bg-gradient-to-br from-green-200 to-emerald-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Monitor Stand */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
                  </div>
                </div>

                {/* Floating Service Icons */}
                <div className="absolute top-10 left-20 transform -rotate-12 animate-float">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg flex items-center justify-center">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-20 left-10 transform rotate-12 animate-float-delayed">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center">
                    <HeadphonesIcon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="absolute top-32 right-10 transform rotate-6 animate-float">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Abstract Geometric Shapes */}
                <div className="absolute top-16 right-32 w-8 h-8 border-2 border-purple-400 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-32 right-16 w-6 h-6 bg-pink-400 transform rotate-45"></div>
                <div className="absolute bottom-16 left-32 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              </div>

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl transform rotate-6 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Services</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">What I Can Do For You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From stunning visual designs and engaging video content to seamless virtual assistance and powerful
              WordPress websites, I provide comprehensive digital solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Graphic Design</CardTitle>
                <CardDescription className="text-gray-600">
                  Creating visually stunning designs that capture your brand essence
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Logo & Brand Identity
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Marketing Materials
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Social Media Graphics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Print Design
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <HeadphonesIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Virtual Assistant</CardTitle>
                <CardDescription className="text-gray-600">
                  Professional support to streamline your business operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Administrative Tasks
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Email Management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Research & Data Entry
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Customer Support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">WordPress Development</CardTitle>
                <CardDescription className="text-gray-600">
                  Custom WordPress websites that drive results and engage users
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom Theme Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Plugin Integration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Maintenance & Support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Video Editing</CardTitle>
                <CardDescription className="text-gray-600">
                  Professional video editing that brings your stories to life
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Promotional Videos
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Social Media Content
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Event Highlights
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Motion Graphics
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-purple-100 text-purple-700 mb-4">About Me</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Passionate About Creating Digital Excellence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Hi, I'm Eric Mbugua Waweru, a dedicated freelancer with over 3 years of experience in graphic design,
                  virtual assistance, and WordPress development. I believe in the power of creative solutions to
                  transform businesses and help them achieve their goals.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My approach combines technical expertise with creative vision, ensuring that every project not only
                  meets but exceeds client expectations. I'm committed to delivering high-quality work that drives real
                  results for your business.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Icon-style illustration container */}
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 h-[500px] flex items-center justify-center">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-40"></div>
                  <div className="absolute top-1/2 left-5 w-12 h-12 bg-blue-200 rounded-full opacity-25"></div>
                </div>

                {/* Main icon grid */}
                <div className="relative z-10 grid grid-cols-2 gap-8">
                  {/* Design Icon - Pen Tool */}
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900">Design</h4>
                      <p className="text-sm text-gray-600">Creative Solutions</p>
                    </div>
                  </div>

                  {/* Code Icon - Computer */}
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                        />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900">Development</h4>
                      <p className="text-sm text-gray-600">Web Solutions</p>
                    </div>
                  </div>

                  {/* Support Icon - Headset */}
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <HeadphonesIcon className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900">Support</h4>
                      <p className="text-sm text-gray-600">Virtual Assistance</p>
                    </div>
                  </div>

                  {/* Video Icon - Video Camera */}
                  <div className="flex flex-col items-center space-y-4 group">
                    <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900">Video</h4>
                      <p className="text-sm text-gray-600">Content Creation</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements for visual interest */}
                <div className="absolute top-20 right-20 w-8 h-8 border-2 border-purple-300 rounded rotate-45 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-6 h-6 bg-pink-300 rounded-full animate-bounce"></div>
              </div>

              {/* Floating achievement card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <div>
                    <div className="font-bold text-gray-900">Quick Turnaround</div>
                    <div className="text-sm text-gray-600">24-48 hours response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Testimonials</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                company: "TechStart Inc.",
                content:
                  "Eric's graphic design work exceeded our expectations. His creativity and attention to detail helped us establish a strong brand identity that resonates with our target audience.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Small Business Owner",
                company: "Chen's Restaurant",
                content:
                  "The WordPress website Eric built for us has significantly increased our online orders. His technical skills and understanding of our business needs were impressive.",
                rating: 5,
              },
              {
                name: "Lisa Rodriguez",
                role: "Entrepreneur",
                company: "Rodriguez Consulting",
                content:
                  "Eric's virtual assistant services have been a game-changer for my business. He's reliable, efficient, and always delivers high-quality work on time.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Contact</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch and let's discuss how I can help bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">erictechske@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Nairobi, Kenya</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Quick Response Guarantee</h4>
                <p className="text-gray-600">
                  I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call directly.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Eric Mbugua</h3>
                  <p className="text-gray-400 text-sm">Creative Freelancer</p>
                </div>
              </div>
              <p className="text-gray-400">
                Transforming ideas into digital reality through creative design, efficient assistance, and powerful web
                solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Virtual Assistant
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    WordPress Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Brand Identity
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Let's Connect</h4>
              <p className="text-gray-400 mb-4">Ready to start your project?</p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Mail className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Eric Mbugua Waweru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
