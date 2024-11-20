import React, { useEffect, useRef } from "react";

const Gallery = ({ images }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const handleAnimation = () => {
      if (gallery) {
        gallery.style.animation = "none";
        gallery.offsetHeight; // trigger reflow to restart animation
        gallery.style.animation = "marquee 50s linear infinite";
      }
    };

    // Reset animation when page reloads or images are updated
    window.addEventListener("resize", handleAnimation);
    return () => {
      window.removeEventListener("resize", handleAnimation);
    };
  }, []);

  return (
    <div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .gallery-scroll-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .gallery-scroll {
          display: flex;
          animation: marquee 10s linear infinite; /* Adjust the speed as needed */
        }

        .gallery-scroll > div {
          flex: 0 0 auto;
        }

        .gallery-scroll img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .gallery-scroll-wrapper {
          position: relative;
        }
      `}</style>

      <div className="gallery-scroll-wrapper">
        <div className="gallery-scroll" ref={galleryRef}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={index} className="px-5">
              <div className="grid grid-cols-6 gap-4">
                {images.slice(index * 8, index * 8 + 4).map((image, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg overflow-hidden ${
                      idx === 1 || idx === 3 ? "col-span-2" : ""
                    }`}
                    style={{
                      gridColumn: idx === 1 || idx === 3 ? "span 2" : "span 1",
                    }}
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={image}
                      alt={`gallery-photo-${index}`}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 mt-5">
                {images
                  .slice(index * 8 + 4, index * 8 + 8)
                  .map((image, idx) => (
                    <div
                      key={idx}
                      className={`rounded-lg overflow-hidden ${
                        idx !== 1 && idx !== 3 ? "col-span-2" : ""
                      }`}
                      style={{
                        gridColumn:
                          idx !== 1 && idx !== 3 ? "span 2" : "span 1",
                      }}
                    >
                      <img
                        className="w-full h-48 object-cover"
                        src={image}
                        alt={`gallery-photo-${index}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {/* Second set of images (for seamless scrolling) */}
          {images.map((image, index) => (
            <div key={index + images.length} className="px-5">
              <div className="grid grid-cols-6 gap-4">
                {images.slice(index * 8, index * 8 + 4).map((image, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg overflow-hidden ${
                      idx === 1 || idx === 3 ? "col-span-2" : ""
                    }`}
                    style={{
                      gridColumn: idx === 1 || idx === 3 ? "span 2" : "span 1",
                    }}
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={image}
                      alt={`gallery-photo-${index}`}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-6 gap-4 mt-5">
                {images
                  .slice(index * 8 + 4, index * 8 + 8)
                  .map((image, idx) => (
                    <div
                      key={idx}
                      className={`rounded-lg overflow-hidden ${
                        idx !== 1 && idx !== 3 ? "col-span-2" : ""
                      }`}
                      style={{
                        gridColumn:
                          idx !== 1 && idx !== 3 ? "span 2" : "span 1",
                      }}
                    >
                      <img
                        className="w-full h-48 object-cover"
                        src={image}
                        alt={`gallery-photo-${index}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
