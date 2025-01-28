import bg from "../../public/bg.jpeg";
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen">
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1
          className={`text-center text-5xl sm:text-6xl font-bold ${
            theme === "dark" ? "text-white" : "text-violet-950"
          } mb-4`}
        >
          {t("home.title")}
        </h1>
        <p
          className={`text-center text-2xl ${
            theme === "dark" ? "text-gray-300" : "text-blue-900"
          } mb-12 lg:mx-52`}
        >
          {t("home.subtitle")}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
