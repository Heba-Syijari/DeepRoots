import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen relative overflow-hidden">
        <Navbar />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
