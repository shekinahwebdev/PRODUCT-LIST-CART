import { useEffect, useState } from "react";

const useDevicetype = () => {
  const [device, setDevice] = useState(getDeviceType());

  function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 600) return "mobile";
    else if (width >= 601 && width < 1024) return "tablet";
    else return "desktop";
  }

  useEffect(() => {
    const handleResize = () => setDevice(getDeviceType());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useDevicetype;
