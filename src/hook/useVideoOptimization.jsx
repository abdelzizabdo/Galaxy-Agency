import { useEffect } from "react";

export default function useVideoOptimization() {
  useEffect(() => {
    const videos = document.querySelectorAll("video");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.preload = "auto";

            if (video.dataset.prefetched !== "true") {
              video.load();
              video.dataset.prefetched = "true";
            }

            observer.unobserve(video);
          }
        });
      },
      {
        rootMargin: "300px",
      }
    );

    videos.forEach((video) => {
      video.preload = "metadata";
      observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);
}