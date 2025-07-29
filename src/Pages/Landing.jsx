import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-scroll";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";

export default function Landing() {
  const [activeForm, setActiveForm] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark class to root element
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  const handleNavClick = (formType = null) => {
    setActiveForm(formType);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between px-8 md:px-20 py-4">
          {/* Logo */}
          <Link to="/" onClick={() => handleNavClick(null)}>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">TaskPro</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              onClick={() => handleNavClick(null)}
              to="about"
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link
              onClick={() => handleNavClick(null)}
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact Us
            </Link>
            <button
              onClick={() => handleNavClick("login")}
              className="px-4 py-1 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900"
            >
              Login
            </button>
            <button
              onClick={() => handleNavClick("signup")}
              className="px-4 py-1 bg-blue-600 text-white dark:bg-blue-500 dark:text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              Sign Up
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl text-blue-600 dark:text-yellow-300 ml-4"
              title="Toggle theme"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl text-blue-600 dark:text-yellow-300"
              title="Toggle theme"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-blue-600 dark:text-blue-400">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden px-8 pb-4 space-y-4 bg-white dark:bg-gray-800 shadow">
            <Link
              onClick={() => handleNavClick(null)}
              to="about"
              smooth
              duration={500}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>
            <Link
              onClick={() => handleNavClick(null)}
              to="contact"
              smooth
              duration={500}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact Us
            </Link>
            <button
              onClick={() => handleNavClick("login")}
              className="block w-full text-left text-blue-600 dark:text-blue-400 border px-4 py-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900"
            >
              Login
            </button>
            <button
              onClick={() => handleNavClick("signup")}
              className="block w-full text-left bg-blue-600 text-white dark:bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        )}
      </header>

      {/* Main */}
      <main>
        {activeForm === "login" && (
          <div className="flex justify-center items-center py-12">
            <Login onSwitch={() => handleNavClick("signup")} />
          </div>
        )}
        {activeForm === "signup" && (
          <div className="flex justify-center items-center py-12">
            <Signup onSwitch={() => handleNavClick("login")} />
          </div>
        )}
        {!activeForm && (
          <>
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                  Organize your tasks <span className="text-blue-600 dark:text-blue-400">effortlessly</span>.
                </h1>
                <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">
                  Boost your productivity by planning, tracking, and managing your tasks all in one place.
                </p>
                <button
                  onClick={() => handleNavClick("signup")}
                  className="mt-8 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                >
                  Get Started
                </button>
              </div>
              <div className="mt-12 md:mt-0 md:ml-12 rounded-md">
                <img
                  src="https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536955.jpg"
                  alt="Task Management"
                  className="w-full max-w-md object-contain rounded-md"
                />
              </div>
            </section>

            {/* Features Section */}
            <section id="about" className="px-8 md:px-24 py-16 bg-gray-50 dark:bg-gray-800">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
                Why TaskPro?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">📝</div>
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-white">Smart Tasking</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Create, update, and manage tasks with a user-friendly interface.
                  </p>
                </div>
                <div>
                  <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">🔔</div>
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-white">Reminders</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Stay on schedule with customizable deadline alerts.
                  </p>
                </div>
                <div>
                  <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">📈</div>
                  <h3 className="font-semibold text-xl text-gray-800 dark:text-white">Productivity Insights</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Visualize progress and analyze completed tasks.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-8 md:px-24 py-12 bg-white dark:bg-gray-900">
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                Contact Us
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                Have questions or feedback? Reach out to us at{" "}
                <a href="mailto:support@taskpro.com" className="text-blue-600 dark:text-blue-400">
                  support@taskpro.com
                </a>
              </p>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
