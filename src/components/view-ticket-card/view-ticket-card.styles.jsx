import { styled } from "@mui/material/styles";
import { Button, Card, Stack, Typography } from "@mui/material";

export const CardRoot = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: "20px",
  borderRadius: "24px",
  backgroundColor: "transparent",
  boxShadow: "none",
  maxWidth: "845px",
  maxHeight: "416px",
}));

export const Header = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const Surface = styled(Stack)(({ theme }) => ({
  maxWidth: "797px",
  maxHeight: "293px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  borderRadius: 16,
  gap: "30px",
  backgroundColor: "#171717",
}));

export const TicketWrapper = styled("div")(() => ({
  marginTop: "54px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  maxWidth: "120px", // match image size
  maxHeight: "120px",
}));

export const TicketImg = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display: "block",
  borderRadius: 8,
}));

export const TicketOverlay = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(36, 36, 36, 0.4)",
  borderRadius: 8,
}));

export const TicketLabel = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", // center the text
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: "16px",
  textAlign: "center",
  pointerEvents: "none", // let clicks pass through to wrapper
}));

export const Actions = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "12px",
  flexWrap: "wrap",
  marginBottom: "30px",
  "& .MuiButton-root": {
    borderRadius: 24,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    textTransform: "none",
  },
}));

export const TicketButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "999px",
  border: `1px solid #4D4D4D`,
  color: theme.palette.common.white,
  textTransform: "none",
  backgroundColor: "transparent",
  fontWeight: 500,
  fontSize: "14px",
  maxWidth: "121px",
  maxHeight: "37px",
  paddingTop: "8px",
  paddingBottom: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderColor: "rgba(255,255,255,0.24)",
  },
}));
