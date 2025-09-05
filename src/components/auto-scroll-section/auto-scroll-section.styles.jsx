import { styled, keyframes } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

// 🔹 Animation for infinite horizontal scroll
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const BackBar = styled(Stack)(({ theme }) => ({
  position: "absolute", // 🔹 overlay on top of hero
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "rgba(23, 23, 23, 0.9)", // 🔹 semi-transparent
  color: theme.palette.common.white,
  padding: theme.spacing(1.5, 2),
  alignItems: "center",
  flexDirection: "row",
  gap: "8px",
  cursor: "pointer",
  paddingLeft: "300px",
  zIndex: 2, // keep above images
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(6),
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(3),
  },
}));

export const HeroRoot = styled(Stack)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1920px",
  height: "540px",
  overflow: "hidden",
  justifyContent: "center",
}));

export const HeroBackgroundWrapper = styled("div")(() => ({
  position: "absolute",
  inset: 0,
  width: "200%", // allows track to move
  overflow: "hidden",
}));

export const HeroBackgroundTrack = styled("div")(() => ({
  display: "flex",
  width: "200%",
  height: "100%",
  animation: `${scroll} 60s linear infinite`, // 🔹 Slow continuous scroll
}));

export const HeroBackgroundImage = styled("img")(() => ({
  width: "fit",
  height: "fit",
  objectFit: "contain",
  filter: "grayscale(100%)",
}));

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: "50%", // ✅ middle vertically
  left: "50%", // ✅ middle horizontally
  transform: "translate(-50%, -50%)", // ✅ true center
  color: theme.palette.common.white,
  maxWidth: "70%",
  textAlign: "center",
  alignItems: "center",
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 600,
  fontSize: "48px",
  [theme.breakpoints.down("md")]: {
    fontSize: "44px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
