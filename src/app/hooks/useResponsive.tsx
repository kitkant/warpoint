import { useEffect, useMemo, useState } from "react";
import { breakpoints } from "../utils/breakpoints.js";
import debounce from "../utils/debounce";

const useResponsive = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const screenSizes = useMemo(
    () => ({
      mobile: Number(breakpoints.sm.slice(0, -2)),
      desktop: Number(breakpoints.lg.slice(0, -2)),
    }),
    []
  );

  useEffect(() => {
    onResizeHandler();
    Setup();

    return () => {
      Cleanup();
    };
  }, []);

  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= screenSizes.mobile;
    const isTablet =
      window.innerWidth >= screenSizes.mobile &&
      window.innerWidth <= screenSizes.desktop;
    const isDesktop = window.innerWidth > screenSizes.desktop;

    setState({ isMobile, isTablet, isDesktop });
  };

  const debouncedCall = debounce(onResizeHandler, 100);

  const Setup = () => {
    window.addEventListener("resize", debouncedCall, false);
  };

  const Cleanup = () => {
    window.removeEventListener("resize", debouncedCall, false);
  };

  return state;
};

export default useResponsive;
