const CinemaLights = () => {
  const generateLights = () => {
    const lights = [];
    const topLightCount = 15;
    const sideLightCount = 8;

    for (let i = 0; i < topLightCount; i++) {
      lights.push(
        <div
          key={`top-${i}`}
          className="cinema-light"
          style={{
            top: 0,
            left: `calc(${(i / (topLightCount - 1)) * 98.5}% + 3px)`,
            animationDelay: `${i * 0.06}s`,
          }}
        />,
      );
    }

    for (let i = 0; i < topLightCount; i++) {
      lights.push(
        <div
          key={`bottom-${i}`}
          className="cinema-light"
          style={{
            bottom: 0,
            left: `calc(${(i / (topLightCount - 1)) * 98.5}% + 3px)`,
            animationDelay: `${-i * 0.06}s`,
          }}
        />,
      );
    }

    for (let i = 0; i < sideLightCount; i++) {
      lights.push(
        <div
          key={`left-${i}`}
          className="cinema-light"
          style={{
            left: 0,
            top: `${((i + 1) / (sideLightCount + 1)) * 100}%`,
            animationDelay: `${(-i + topLightCount) * 0.06}s`,
          }}
        />,
      );
    }

    for (let i = 0; i < sideLightCount; i++) {
      lights.push(
        <div
          key={`right-${i}`}
          className="cinema-light"
          style={{
            right: 0,
            top: `${((i + 1) / (sideLightCount + 1)) * 100}%`,
            animationDelay: `${(i + topLightCount + sideLightCount) * 0.06}s`,
          }}
        />,
      );
    }

    return lights;
  };

  return <div className="cinema-container">{generateLights()}</div>;
};

export default CinemaLights;
