import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

export const BackBar = styled(Stack)(({ theme }) => ({
  backgroundColor: "#171717",
  color: theme.palette.common.white,
  padding: theme.spacing(1.5, 2),
  alignItems: "center",
  flexDirection: "row",
  gap: "8px",
  cursor: "pointer",
  paddingLeft: "300px",
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
  height: "540px", // fixed hero height
  overflow: "hidden",
  justifyContent: "center",
}));

export const HeroBackground = styled("img")(() => ({
  width: "inherit",
  height: "inherit",
  objectFit: "cover",
  display: "block",
  filter: "grayscale(100%)",
  transform: "scale(1.25)", // zoom in to 80% of the original frame
  transformOrigin: "center",
}));

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(10),
  left: "300px",
  color: theme.palette.common.white,
  maxWidth: "70%",
  [theme.breakpoints.down("md")]: {
    left: theme.spacing(6),
  },
  [theme.breakpoints.down("sm")]: {
    left: theme.spacing(3),
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "32px",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));
