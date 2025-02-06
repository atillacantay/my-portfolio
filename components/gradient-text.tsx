import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
}) => {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
        className
      )}
    >
      {children}
    </span>
  );
};
