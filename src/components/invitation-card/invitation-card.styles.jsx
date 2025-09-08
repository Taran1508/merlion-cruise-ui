import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const InvitationCardContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile, istablet }) => ({
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "17px",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid #242424",
  backgroundColor: "transparent",
  fontFamily: "Poppins, sans-serif",
  width: "100%",
  maxWidth: ismobile ? "80%" : istablet ? "50%" : "429px",
  minHeight: ismobile ? "auto" : "466px",
}));

export const SectionContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  width: "100%",
}));

export const SectionTitle = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  color: "rgba(255, 255, 255, 0.90)",
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "18px" : "20px",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "capitalize",
  alignSelf: "stretch",
  margin: 0,
}));

export const HostDetailsCard = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile, istablet }) => ({
  display: "flex",
  flexDirection: ismobile ? "row" : "row",
  alignItems: "flex-start",
  gap: ismobile ? "16px" : "40px",
  width: "100%",
  maxWidth: "397px",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid #242424",
  backgroundColor: "#171717",
}));

export const HostDataColumn = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  flex: 1,
  minWidth: 0,
}));

export const HostLabelText = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile, istablet }) => ({
  color: "#939393",
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "12px" : istablet ? "14px" : "16px",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "capitalize",
  minWidth: ismobile ? "auto" : "144px",
  margin: 0,
}));

export const HostValueText = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile, istablet }) => ({
  color: "rgba(255, 255, 255, 0.85)",
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "12px" : istablet ? "14px" : "16px",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "capitalize",
  margin: 0,
  wordBreak: "break-word",
}));

export const EventDetailsCard = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  alignSelf: "stretch",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid #242424",
  backgroundColor: "#171717",
}));

export const EventDetailsContent = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  width: ismobile ? "100%" : "200px",
}));

export const EventDetailRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

export const EventDetailText = styled(Typography)(({ theme }) => ({
  color: "#F6F6F6",
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "capitalize",
  margin: 0,
}));

export const ButtonsContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: "flex",
  flexDirection: ismobile ? "column" : "row",
  alignItems: "center",
  gap: "16px",
  alignSelf: "stretch",
  width: "100%",
}));

export const AcceptButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: "flex",
  width: ismobile ? "100%" : "174px",
  padding: "12px 16px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1234px",
  background:
    "linear-gradient(270deg, #C9C9C9 1.22%, #C9C9C9 48.95%, #838383 98.56%)",
  color: "#0D0D0D",
  fontFamily: "Poppins, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "capitalize",
  border: "none",
  "&:hover": {
    background:
      "linear-gradient(270deg, #B8B8B8 1.22%, #B8B8B8 48.95%, #727272 98.56%)",
  },
}));

export const DeclineButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: "flex",
  width: ismobile ? "100%" : "174px",
  padding: "12px 16px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1234px",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  backgroundColor: "rgba(247, 248, 249, 0.04)",
  color: "#FFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "rgba(247, 248, 249, 0.08)",
  },
}));

export const IconWrapper = styled("div")(({ theme }) => ({
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const TicketSection = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  width: "100%",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid #242424",
  backgroundColor: "#171717",
}));

export const TicketImage = styled("img", {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  width: "100%",
  maxWidth: ismobile ? "200px" : "300px",
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover",
}));

// Status configurations
const statusConfig = {
  completed: {
    background: "#202020",
    color: "#FFF",
    borderRadius: "1234px",
  },
  declined: {
    background: "#2A1513",
    color: "#F04438",
    borderRadius: "1234px",
  },
  accepted: {
    background: "#11261C",
    color: "#12B76A",
    borderRadius: "12px",
  },
};

export const StatusButton = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "status",
})(({ ismobile, status = "completed" }) => ({
  display: "flex",
  height: "45px",
  padding: "12px 16px",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  borderRadius: statusConfig[status].borderRadius,
  backgroundColor: statusConfig[status].background,
  width: "100%",
}));

export const StatusText = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "status",
})(({ status = "completed" }) => ({
  color: statusConfig[status].color,
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "capitalize",
  margin: 0,
}));

export const DataRow = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "align",
})(({ ismobile, align }) => ({
  display: "flex",
  flexDirection: ismobile ? "column" : "row",
  alignItems: ismobile
    ? align === "right"
      ? "flex-end"
      : "flex-start"
    : "center",
  justifyContent: align === "right" ? "flex-end" : "space-between",
  gap: ismobile ? "4px" : "40px",
  width: "100%",
  textAlign: align === "right" ? "right" : "left",
}));

export const LabelText = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "ishighlighted" &&
    prop !== "align",
})(({ ishighlighted, ismobile, istablet, align }) => ({
  color: ishighlighted ? "#FFF" : "#848484",
  paddingLeft: ishighlighted ? "8px" : "",
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "12px" : istablet ? "14px" : "16px",
  fontWeight: ishighlighted ? 600 : 400,
  lineHeight: "normal",
  textTransform: "capitalize",
  minWidth: ismobile ? "auto" : "144px",
  textAlign: align === "right" ? "right" : "left",
  flexShrink: 0,
}));

export const ValueText = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "islg" &&
    prop !== "isdesktop" &&
    prop !== "ishighlighted" &&
    prop !== "align",
})(({ ismobile, istablet, islg, ishighlighted, align }) => ({
  color: "#FFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "12px" : istablet ? "14px" : islg ? "12px" : "16px",
  fontWeight: ishighlighted ? 700 : 400,
  lineHeight: "normal",
  textTransform: ishighlighted ? "uppercase" : "capitalize",
  backgroundColor: "transparent",
  padding: ishighlighted ? "4px 8px" : "0",
  borderRadius: ishighlighted ? "4px" : "0",
  textAlign: align === "right" ? "right" : "left",
  flex: 1,
  wordBreak: "break-word",
}));
