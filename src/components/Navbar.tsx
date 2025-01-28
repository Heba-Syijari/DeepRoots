import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "@/components/theme-provider";
import { useEffect } from "react";

const Navbar = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <header className="relative top-0 left-0 w-full backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold"
            >
              <img
                src="/logo.jpeg"
                alt="Logo"
                className="w-9 h-9 object-contain"
              />
            </Link>

            <nav className="flex items-center gap-6">
              {["learn", "use", "build", "participate", "research"].map(
                (key) => (
                  <Link
                    key={key}
                    to={`/${key}`}
                    className={`text-base font-medium ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    } hover:text-violet-400 transition`}
                  >
                    {t(`navbar.${key}`)}
                  </Link>
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Input */}
            <Input
              type="text"
              placeholder={t("navbar.action")}
              className="w-64"
            />
            <ModeToggle />
            <Button
              variant="ghost"
              className={`border ${
                theme === "dark" ? "text-gray-300" : "text-violet-950"
              } text-sm`}
              onClick={toggleLanguage}
            >
              {t("navbar.language")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
