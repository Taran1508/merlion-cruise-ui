import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

export const InvitationBackBar = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "rgba(23, 23, 23, 0.9)",
  color: "#A0A0A0",
  padding: theme.spacing(1.5, 2),
  alignItems: "center",
  flexDirection: "row",
  gap: "8px",
  cursor: "pointer",
  paddingLeft: "300px",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(6),
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(3),
  },
}));

export const InvitationHeroRoot = styled(Stack)(() => ({
  position: "relative",
  width: "100%",
  maxWidth: "1920px",
  height: "540px", // or "100vh" if fullscreen
  overflow: "hidden",
  justifyContent: "center",
}));

export const InvitationHeroBackgroundImage = styled("img")(() => ({
  width: "100%",
  height: "540px", // match root height
  objectFit: "cover", // keeps faces in frame
}));

export const InvitationContentWrapper = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: theme.palette.common.white,
  maxWidth: "70%",
  textAlign: "center",
  alignItems: "center",
}));

export const InvitationHeroTitle = styled(Typography)(({ theme }) => ({
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

export const InvitationHeroSubtitle = styled(Typography)(({ theme }) => ({
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
