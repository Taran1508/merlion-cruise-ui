import { styled } from "@mui/material/styles";
import { Paper, Stack, Typography, Button } from "@mui/material";

export const Root = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  borderRadius: "24px",
  border: `1px solid #242424`,
  overflow: "visible",
  maxWidth: "797px",
  padding: theme.spacing(3),
  marginInline: "auto",
  position: "relative",
  backgroundImage:
    "radial-gradient(ellipse at bottom, #95CA50 -150%, #171717 60%)",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
    borderRadius: "16px",
  },
}));

// Responsive promo image
export const PromoImg = styled("img")(({ theme }) => ({
  height: 60,
  width: 60,
  objectFit: "contain",
  flexShrink: 0,

  [theme.breakpoints.down("sm")]: {
    height: 40,
    width: 40,
    alignSelf: "center", // center on mobile
  },
}));

export const Content = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: theme.spacing(2),
  flexWrap: "wrap",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(1.5),
  },
}));

export const TitleStack = styled(Stack)(({ theme }) => ({
  flex: "1 1 auto",
  minWidth: 0,
  justifyContent: "center",
  alignItems: "flex-start",
  gap: theme.spacing(0.25),

  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: 1.1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px", // ✅ smaller title on mobile
    whiteSpace: "normal",
  },
}));

export const SubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: theme.typography.pxToRem(12),
  textAlign: "left",

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    width: "100%",
  },
}));

export const RemoveButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "999px",
  border: `1px solid #4D4D4D`,
  color: theme.palette.common.white,
  textTransform: "none",
  backgroundColor: "transparent",
  fontWeight: 500,
  fontSize: "16px",
  width: "160px",
  padding: theme.spacing(1, 0),
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderColor: "rgba(255,255,255,0.24)",
  },
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    width: "120px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    width: "110px",
    fontSize: "14px",
  },
}));

export const ApplyButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "999px",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "16px",
  width: "160px",
  padding: theme.spacing(1, 0),
  backgroundImage: "linear-gradient(90deg, #838383, #C9C9C9)",
  color: "#000",
  border: "none",
  "&:hover": {
    backgroundImage: "linear-gradient(90deg, #6f6f6f, #b8b8b8)",
  },
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    width: "120px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    width: "110px",
    fontSize: "14px",
  },
}));
