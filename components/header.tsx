import { Logo } from "./logo";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 shadow-md z-50 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </nav>
    </header>
  );
};
