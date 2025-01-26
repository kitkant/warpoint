import { useEffect, useState } from 'react';

type Breakpoints =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '1200px'
  | { customMediaQuery: string };

// Convert breakpoints to actual CSS media query string
const getMediaQuery = (breakpoint: Breakpoints): string => {
  if (typeof breakpoint === 'string') {
    switch (breakpoint) {
      case 'sm':
        return '(max-width: 767px)';
      case 'md':
        return '(max-width: 768px)';
      case 'lg':
        return '(max-width: 1024px)';
      case '1200px':
        return '(max-width: 1200px)';
      case 'xl':
        return '(max-width: 1280px)';
      case '2xl':
        return '(max-width: 1440px)';
      case '3xl':
        return '(max-width: 1920px)';
      case '4xl':
        return '(max-width: 2560px)';
      default:
        throw new Error(`Unknown breakpoint: ${breakpoint}`);
    }
  } else {
    return breakpoint.customMediaQuery;
  }
};

export const useMediaQueryMatch = (breakpoint: Breakpoints): boolean => {
  const [isMediaMatch, setIsMediaMatch] = useState<boolean>(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia(getMediaQuery(breakpoint)).matches
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const mediaQueryList = window.matchMedia(getMediaQuery(breakpoint));
    const handleMediaQueryChange = (e: MediaQueryListEvent): void => {
      setIsMediaMatch(e.matches);
    };

    setIsMediaMatch(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
  }, [breakpoint]);

  return isMediaMatch;
};