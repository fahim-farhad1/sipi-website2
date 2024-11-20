const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="200"
        height="200"
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "rgb(255, 255, 255)",
        }}
      >
        <g>
          {[...Array(12)].map((_, i) => {
            const angle = i * 30; // Calculate angle for each rect
            const delay = -((i + 1) / 12); // Animation delay for each rect
            return (
              <g key={i} transform={`rotate(${angle} 50 50)`}>
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin={`${delay}s`}
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default Loader;
