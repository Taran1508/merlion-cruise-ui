/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from "@mui/material/styles";
import { Box, Typography, Divider } from "@mui/material";

export const SummaryCardContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ theme, ismobile, istablet }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  fontFamily: "Poppins, sans-serif",
  width: ismobile ? "100%" : "100%",
}));

export const CardTitle = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile, istablet }) => ({
  color: "#FFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "12px" : istablet ? "14px" : "16px",
  fontWeight: ismobile ? 600 : 600,
  lineHeight: "normal",
  textTransform: "capitalize",
  marginBottom: "0px",
}));

export const CardContent = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "align",
})(({ theme, ismobile, istablet, align }) => ({
  display: "flex",
  flexDirection: ismobile ? "column" : "row",
  alignItems: "flex-start",
  gap: ismobile ? "16px" : "40px",
  width: "100%",
  maxWidth: "100%",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid #242424",
  backgroundColor: "#171717",
  justifyContent: align === "right" ? "flex-end" : "flex-start",
  textAlign: align === "right" ? "right" : "left",
}));

export const DataColumn = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "align",
})(({ ismobile, align }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: align === "right" ? "flex-end" : "flex-start",
  gap: "16px",
  flex: 1,
  minWidth: 0,
}));

export const DataRow = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "islg" &&
    prop !== "isdesktop" &&
    prop !== "align",
})(({ ismobile, align, islg, istablet }) => ({
  display: "flex",
  flexDirection: ismobile ? "column" : "row",
  alignItems: ismobile
    ? align === "right"
      ? "flex-end"
      : "flex-start"
    : "center",
  justifyContent: align === "right" ? "flex-end" : "space-between",
  gap: ismobile ? "4px" : istablet ? "12px" : islg ? "12px" : "40px",
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
  fontSize: ismobile ? "12px" : istablet ? "12px" : islg ? "12px" : "16px",
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

export const StyledDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  borderColor: "#242424",
  margin: "8px 0",
}));

export const HighlightedRow = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "islg" &&
    prop !== "isdesktop" &&
    prop !== "align",
})(({ align, ismobile, istablet, islg }) => ({
  display: "flex",
  flexDirection: ismobile ? "column" : "row",
  justifyContent: "start",
  alignItems: "center",
  color: "#FFF",
  width: "100%",
  gap: ismobile ? "4px" : istablet ? "12px" : islg ? "12px" : "40px",
  padding: "4px 0",
  backgroundColor: "#202020",
  borderTop: "1px solid #242424",
  borderRadius: "8px",
  textAlign: "left",
}));
