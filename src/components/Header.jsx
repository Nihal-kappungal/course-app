import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.avif";

const navigation = ["Home", "About", "Features"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-10 w-full px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto flex max-w-7xl items-center gap-4 rounded-lg bg-black px-4 py-2.5 sm:px-5 sm:py-2">
        <a
          href="/"
          className="flex min-w-0 flex-1 items-center text-white"
          aria-label="Go to homepage"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto max-w-32 object-contain sm:h-12"
          />
        </a>

        <nav
          className="hidden items-center gap-1  py-1.5 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="rounded-full px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          {/* <a
            href="#login"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#686363] sm:px-6 sm:text-base"
          >
            Login
          </a> */}
          <motion.a
            href="#join"
            className="rounded-md bg-[#9cff57] px-5 py-2.5 text-sm font-medium text-[#151515] transition-colors hover:bg-[#b1ff78] sm:px-6 sm:text-base"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Join
          </motion.a>
          <button
            type="button"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="flex w-5 flex-col gap-1" aria-hidden="true">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <nav
            className="absolute left-4 right-4 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-lg bg-[#211f1f] p-2 shadow-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="rounded-md px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
