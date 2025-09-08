import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

// Status color configurations
const statusConfig = {
  confirmed: {
    background: "rgba(18, 183, 106, 0.06)",
    titleColor: "#12B76A",
    textColor: "#FFF",
  },
  completed: {
    background: "#0D1712",
    titleColor: "#12B76A",
    textColor: "#FFF",
  },
  pending: {
    background: "rgba(251, 191, 36, 0.06)",
    titleColor: "#FBBF24",
    textColor: "#FFF",
  },
  cancelled: {
    background: "#42201D",
    titleColor: "#F04438",
    textColor: "#FFF",
  },
  upcoming: {
    background: "#171717",
    titleColor: "#FFFFFF",
    textColor: "#FFF",
  },
  upcoming: {
    background: "#171717",
    titleColor: "#FFF",
    textColor: "#FFF",
  },
};

export const StatusCardContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "status",
})(({ theme, ismobile, istablet, status = "confirmed" }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: ismobile ? "100px" : istablet ? "110px" : "120px",
  padding: ismobile ? "12px" : "16px",
  borderRadius: "16px",
  backgroundColor: statusConfig[status].background,
  fontFamily: "Poppins, sans-serif",
  gap: ismobile ? "6px" : "8px",
  textAlign: "center",
}));

export const StatusTitle = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "status",
})(({ ismobile, istablet, status = "confirmed" }) => ({
  color: statusConfig[status].titleColor,
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "24px" : istablet ? "28px" : "30px",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "capitalize",
  textAlign: "center",
  margin: 0,
  marginBottom: ismobile ? "4px" : "6px",
}));

export const StatusSubtitle = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "status",
})(({ ismobile, istablet, status = "confirmed" }) => ({
  color: statusConfig[status].textColor,
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "14px" : "16px",
  fontWeight: 400,
  lineHeight: "normal",
  textAlign: "center",
  margin: 0,
}));

export const StatusNote = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "status",
})(({ ismobile, istablet, status = "confirmed" }) => ({
  color: statusConfig[status].textColor,
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "12px" : "14px",
  fontWeight: 300,
  lineHeight: "normal",
  textAlign: "center",
  margin: 0,
  marginTop: ismobile ? "4px" : "6px",
  fontStyle: "italic",
  opacity: 0.9,
}));

export const ExternalNote = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile, istablet }) => ({
  color: "#FDB022",
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "normal",
  textAlign: "left",
  margin: 0,
  marginTop: "16px",
  width: "100%",
}));

export const CardWithNoteContainer = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile, istablet }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
}));
