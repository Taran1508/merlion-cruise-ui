import { styled } from "@mui/material/styles";
import { Stack, Box, Chip, Typography, Paper } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

/**
 * Wrapper with rounded corners, dark body like the mock, no fixed sizing.
 * Uses maxWidth only to keep it comfortable in wide containers.
 */
export const Root = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  borderRadius: "20px",
  overflow: "hidden",
  width: "100%",
  maxWidth: "1320px",
  maxHeight: "224px",
  marginInline: "auto",
  [theme.breakpoints.down("md")]: {
    maxHeight: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: "unset",
    borderRadius: "12px",
  },
}));

/** Top header bar */
export const HeaderBar = styled(Stack)(({ theme }) => ({
  backgroundColor: "#848484",
  color: theme.palette.grey[900],
  alignItems: "center",
  justifyContent: "center",
  paddingBlock: theme.spacing(1.25),
  paddingInline: theme.spacing(2),
}));

/** Main content area */
export const ContentWrap = styled(Stack)(({ theme }) => ({
  alignItems: "stretch",
  justifyContent: "center",
  padding: theme.spacing(2.5, 3),
  gap: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3, 4),
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    gap: theme.spacing(2),
  },
}));

/** Left/Right columns */
export const SideCol = styled(Stack)(({ theme }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  "&.right": {
    alignItems: "flex-end",
  },
}));

/** Secondary text rows for date/location */
export const LabelText = styled(Typography)(() => ({
  color: "#848484",
}));

// For locations under date
export const MetaLine = styled(Typography)(() => ({
  color: "#848484",
  fontWeight: 400,
  fontSize: "16px",
}));

// For dates
export const DateLine = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontWeight: 400,
  fontSize: "16px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

// For locations
export const LocationLine = styled(Typography)(({ theme }) => ({
  color: "#848484",
  fontWeight: 400,
  fontSize: "14px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));

/** Middle timeline area */
export const TimelineWrap = styled(Stack)(({ theme }) => ({
  flex: "2 1 0",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.75),
  paddingTop: theme.spacing(2.5),
  marginLeft: "0px",
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}));

/**
 * The dashed line with dots and the duration pill centered.
 * No fixed width/height; it grows with available space.
 */
export const LineTrack = styled(Box)(({ theme }) => ({
  position: "relative",
  inlineSize: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingInline: theme.spacing(1),
  "&::before": {
    content: '""',
    position: "absolute",
    insetInline: theme.spacing(3),
    insetBlockStart: "50%",
    transform: "translateY(-50%)",
    borderTop: `2px dotted ${theme.palette.grey[300]}`,
  },
  [theme.breakpoints.down("sm")]: {
    "&::before": {
      display: "none", // hide the dotted line
    },
    "& .MuiSvgIcon-root": {
      display: "none", // hide DotIconLeft & DotIconRight
    },
  },
}));

/** Start/End dots as icons (avoids fixed width/height) */
export const DotIconLeft = styled(FiberManualRecordIcon)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "0.9rem",
}));

export const DotIconRight = styled(FiberManualRecordIcon)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "0.9rem",
}));

/** Duration pill centered on the track */
export const DurationPill = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  backgroundImage: "linear-gradient(90deg, #838383, #C9C9C9)",
  color: "#000",
  fontWeight: 600,
  fontSize: "16px",
  borderRadius: "20px",
  paddingInline: theme.spacing(1.5),
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

/** Stops text under the timeline */
export const StopsText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  fontSize: "14px",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));
