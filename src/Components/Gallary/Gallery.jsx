import React from "react";

const Gallery = ({ images }) => {
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
        }

        .gallery-scroll {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          animation: marquee 100s linear infinite;
        }

        .gallery-scroll > div {
          flex: 0 0 auto;
        }

        /* Ensuring all images are wrapped with the same loop effect */
        .gallery-scroll::after {
          content: '';
          flex: 0 0 max-content;
        }
      `}</style>

      {/* Marquee effect wrapper */}
      <div className="gallery-scroll-wrapper">
        <div className="gallery-scroll">
          {/* Create two identical sequences of images */}
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
        </div>
      </div>
    </div>
  );
};

export default Gallery;
