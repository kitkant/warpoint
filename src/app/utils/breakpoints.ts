import stripUnit from "polished/lib/helpers/stripUnit";

export type Breakpoint =
  | "base"
  | "xs"
  | "xm"
  | "sm"
  | "md"
  | "lg"
  | "xlg"
  | "xl"
  | "2k"
  | "4k"
  | "5k"
  | "px1200";

export const breakpoints: Record<Breakpoint, string> = {
  base: "320px",
  xs: "350px",
  xm: "414px",
  sm: "600px",
  md: "900px",
  lg: "1280px",
  xlg: "1440px",
  xl: "1920px",
  "2k": "2560px",
  "4k": "3840px",
  "5k": "5120px",
  px1200: '1200px'
};

export const breakpointsArray = Object.entries(breakpoints).sort((a, b) => {
  const aVal = stripUnit(a[1]) as number;
  const bVal: number = stripUnit(b[1]) as number;
  return aVal - bVal;
}) as [Breakpoint, string][];

export const breakpointsIndexesMap = breakpointsArray.reduce(
  (acc, curr, index) => {
    acc[curr[0]] = index;
    return acc;
  },
  {} as Record<Breakpoint, number>
);

type Orientation = "portrait" | "landscape";

function resolveOrientation(orientation?: Orientation) {
  let orientationQuery = "";
  if (typeof orientation !== "undefined") {
    orientationQuery = `and (orientation: ${orientation})`;
  }
  return orientationQuery;
}

export function up(bp: Breakpoint, orientation?: Orientation) {
  return `@media (min-width: ${breakpoints[bp]}) ${resolveOrientation(
    orientation
  )}`;
}

export function resolveDownBp(bp: Breakpoint) {
  return `${(stripUnit(breakpoints[bp]) as number) - 0.02}px`;
}

export function down(bp: Breakpoint, orientation?: Orientation) {
  return `@media (max-width: ${resolveDownBp(bp)}) ${resolveOrientation(
    orientation
  )}`;
}

// export function downHeight(bp: Breakpoint, orientation?: Orientation) {
//   return `@media (max-height: ${resolveDownBp(bp)}) ${resolveOrientation(
//     orientation
//   )}`;
// }

export function only(bp: Breakpoint, orientation?: Orientation) {
  const bpIndex = breakpointsIndexesMap[bp];
  const nextBp = breakpointsArray[bpIndex + 1];
  const down = nextBp ? `and (max-width: ${resolveDownBp(nextBp[0])})` : "";
  return `@media (min-width: ${breakpoints[bp]}) ${down} ${resolveOrientation(
    orientation
  )}`;
}

export function between(
  bp1: Breakpoint,
  bp2: Breakpoint,
  orientation?: Orientation
) {
  return `@media (min-width: ${
    breakpoints[bp1]
  }) and (max-width: ${resolveDownBp(bp2)}) ${resolveOrientation(orientation)}`;
}

export function sortValuesByBp<T>(values: [Breakpoint, T][]) {
  return values.sort((a, b) => {
    const aBp = a[0];
    const bBp = b[0];
    return breakpointsIndexesMap[aBp] - breakpointsIndexesMap[bBp];
  });
}

export type BreakpointsAliases =
  | "xs"
  | "sl"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "default"
  | "2k"
  | "4k"
  | "5k";

export type Breakpoints = Record<BreakpointsAliases, string>;

export const breakpointsTheme = {};
