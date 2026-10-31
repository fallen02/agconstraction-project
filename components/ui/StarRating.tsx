import { Star } from "lucide-react";

interface StarRatingProps {
  count?: number;
  total?: number;
  className?: string;
  size?: string;
}

export default function StarRating({
  count = 5,
  total = 5,
  className = "",
  size = "w-5 h-5",
}: StarRatingProps) {
  return (
    <div className={`flex items-center gap-1 text-primary ${className}`}>
      {[...Array(total)].map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < count
              ? "fill-primary text-primary"
              : "fill-transparent text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}
