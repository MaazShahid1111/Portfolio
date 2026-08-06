import { useState } from "react";
import { motion } from "motion/react";
import { useLightbox } from "./Lightbox";

export function VideoFrame({
  src,
  label,
  className = "",
}: {
  src: string | null;
  label: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(!src);

  return (
    <div
      className={`scanlines relative overflow-hidden rounded-2xl nm-inset ${className}`}
    >
      {src && !failed ? (
        <video
          className="aspect-video w-full object-cover"
          src={src}
          controls
          preload="metadata"
          playsInline
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">demo slot</span>
          <span className="text-sm text-muted-foreground">
            drop <span className="text-foreground">{src ?? "your clip"}</span> into{" "}
            <span className="text-foreground">/public/videos</span>
          </span>
          <span className="text-xs text-muted-foreground/70">{label}</span>
        </div>
      )}
    </div>
  );
}

export function ImageFrame({
  src,
  alt,
  caption,
  className = "",
  ratio = "aspect-[4/3]",
  fit = "contain",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  ratio?: string;
  fit?: "cover" | "contain";
}) {
  const [failed, setFailed] = useState(false);
  const open = useLightbox();

  if (failed) {
    return (
      <div className={`relative overflow-hidden rounded-xl nm-inset ${ratio} ${className}`}>
        <div className="flex h-full w-full flex-col items-center justify-center px-4 text-center text-[11px] leading-relaxed text-muted-foreground">
          {src.replace("/images/", "")}
          <span className="text-muted-foreground/60">add to /public/images</span>
        </div>
      </div>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={() => open({ src, alt, caption: caption ?? alt })}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      aria-label={`Enlarge ${alt}`}
      className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-xl nm-inset p-2 ${ratio} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full rounded-lg ${
          fit === "contain" ? "object-contain" : "object-cover"
        }`}
      />
      <span className="pointer-events-none absolute inset-x-2 bottom-2 rounded-lg bg-background/70 py-1 text-center text-[10px] text-primary opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        click to zoom
      </span>
    </motion.button>
  );
}
