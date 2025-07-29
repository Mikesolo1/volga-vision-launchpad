import { Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 group hover:opacity-90 transition-opacity"
    >
      <span className="relative flex items-center justify-center h-9 w-9 rounded-full bg-gradient-primary shadow-glow">
        <Camera className="h-5 w-5 text-background" />
      </span>
      <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-slide-up">
        VisionGuard&nbsp;34
      </span>
    </Link>
  );
};

export default Logo;