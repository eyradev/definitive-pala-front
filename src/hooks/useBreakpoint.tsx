import breakpoints from '../constants/breakpoints';
import { Breakpoints } from '../models/breakpoints';
import { useMediaQuery } from './useMediaQuery';

export const useBreakpoint = (breakpoint: keyof Breakpoints): boolean => {
  switch (breakpoint) {
    case 'xs':
      return useMediaQuery(`(max-width: ${breakpoints.sm}px)`);
    case 'sm':
      return useMediaQuery(
        `(max-width: ${breakpoints.md}px) and (min-width: ${breakpoints.sm}px)`
      );
    case 'md':
      return useMediaQuery(
        `(max-width: ${breakpoints.lg}px) and (min-width: ${breakpoints.md}px)`
      );
    case 'lg':
      return useMediaQuery(
        `(max-width: ${breakpoints.xl}px) and (min-width: ${breakpoints.lg}px)`
      );
    case 'xl':
      return useMediaQuery(`(min-width: ${breakpoints.xl}px)`);
    default:
      return false;
  }
};
