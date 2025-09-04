/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from "@mui/material/styles";
import { Box, Typography, Divider } from "@mui/material";

interface ResponsiveProps {
  ismobile?: boolean;
  istablet?: boolean;
  islg?: boolean;
  isdesktop?: boolean;
}

interface AlignProps {
  align?: "left" | "right";
}

export const SummaryCardContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})<ResponsiveProps>(({ theme, ismobile, istablet }) => ({
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
})<ResponsiveProps>(({ ismobile, istablet }) => ({
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
})<ResponsiveProps & AlignProps>(({ theme, ismobile, istablet, align }) => ({
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
})<ResponsiveProps & AlignProps>(({ ismobile, align }) => ({
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
    prop !== "isdesktop" &&
    prop !== "align",
})<ResponsiveProps & AlignProps>(({ ismobile, align }) => ({
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
    prop !== "align",
})<ResponsiveProps & AlignProps>(({ ismobile, istablet, align }) => ({
  color: "#848484",
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "12px" : istablet ? "14px" : "16px",
  fontWeight: 400,
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
})<ResponsiveProps & { ishighlighted?: boolean; align?: "left" | "right" }>(
  ({ ismobile, istablet, islg, ishighlighted, align }) => ({
    color: "#FFF",
    fontFamily: "Poppins, sans-serif",
    fontSize: ismobile ? "12px" : istablet ? "14px" : islg ? "14px" : "16px",
    fontWeight: ishighlighted ? 700 : 400,
    lineHeight: "normal",
    textTransform: ishighlighted ? "uppercase" : "capitalize",
    backgroundColor: ishighlighted
      ? "rgba(255, 255, 255, 0.05)"
      : "transparent",
    padding: ishighlighted ? "4px 8px" : "0",
    borderRadius: ishighlighted ? "4px" : "0",
    textAlign: align === "right" ? "right" : "left",
    flex: 1,
    wordBreak: "break-word",
  })
);

export const StyledDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  borderColor: "#242424",
  margin: "8px 0",
}));

export const HighlightedRow = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "align",
})<ResponsiveProps & AlignProps>(({ align }) => ({
  display: "flex",
  justifyContent: align === "right" ? "flex-end" : "space-between",
  alignItems: "center",
  width: "100%",
  padding: "8px 0",
  borderTop: "1px solid #242424",
  textAlign: align === "right" ? "right" : "left",
}));
