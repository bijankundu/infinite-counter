import { useState, useEffect, useRef } from "react";
import CounterComponent from "./../components/Counter";

const Counter = () => {
  const timer = useRef(null);
  const [currentCount, setCurrentCount] = useState(0);
  const [ctaText, setCtaText] = useState("Stop");

  const increaseCounter = () => {
    setCurrentCount((prev) => prev + 1);
  };

  const stopCounter = () => {
    clearInterval(timer.current);
    setCtaText("Start");
  };

  const startCounter = () => {
    timer.current = setInterval(increaseCounter, 1000);
    setCtaText("Stop");
  };

  const handleOnClick = () => {
    if (ctaText === "Stop") stopCounter();
    else startCounter();
  };

  useEffect(() => {
    startCounter();

    return () => stopCounter();
  }, [timer]);

  return (
    <CounterComponent
      currentCount={currentCount}
      onClick={handleOnClick}
      ctaText={ctaText}
    />
  );
};

export default Counter;
