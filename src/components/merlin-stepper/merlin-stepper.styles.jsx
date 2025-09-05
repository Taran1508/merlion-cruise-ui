/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from "@mui/material/styles";
import { Stack, Box } from "@mui/material";

export const StepperContainer = styled(Stack, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ theme, ismobile, istablet }) => ({
  display: "flex",
  flexDirection: ismobile ? "column" : "row",
  alignItems: ismobile ? "stretch" : "center",
  gap: ismobile || istablet ? "" : "8px",
  width: "100%",
  maxWidth: "100%",
  minHeight: "40px",
  fontFamily: "Poppins, sans-serif",
  flexWrap: istablet ? "wrap" : "nowrap",
  justifyContent: ismobile ? "flex-start" : "center",
  padding: ismobile ? "8px 0" : istablet ? "4px 2px" : "0",
  overflow: "visible",
}));

export const StepItem = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "isactive" &&
    prop !== "iscompleted" &&
    prop !== "isclickable",
})(({ theme, ismobile, istablet, isactive, iscompleted, isclickable }) => {
  const isUpcoming = !isactive && !iscompleted;
  return {
    display: "flex",
    padding: ismobile
      ? isUpcoming
        ? "6px 8px"
        : "6px 8px"
      : istablet
      ? isUpcoming
        ? "6px 4px"
        : "6px 4px"
      : isUpcoming
      ? "8px 16px"
      : "8px 16px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "60px",
    backgroundColor: isUpcoming ? "transparent" : "#171717",
    border: isactive ? "1px solid #4D4D4D" : "none",
    cursor: isclickable ? "pointer" : "default",
    transition: "all 0.2s ease-in-out",
    minWidth: ismobile ? "100%" : "fit-content",
    width: ismobile ? "100%" : "5%",
    whiteSpace: "nowrap",
    margin: 0,
  };
});

export const StepLabel = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "isactive" &&
    prop !== "iscompleted",
})(({ ismobile, istablet, isactive, iscompleted }) => {
  const isUpcoming = !isactive && !iscompleted;
  return {
    color: isactive ? "#F6F6F6" : iscompleted ? "#A0A0A0" : "#F6F6F6",
    fontFamily: "Poppins, sans-serif",
    fontSize: ismobile ? "12px" : istablet ? "10px" : "14px",
    padding: ismobile
      ? isUpcoming
        ? "2px 4px"
        : "2px 4px"
      : istablet
      ? isUpcoming
        ? "2px 4px"
        : "2px 4px"
      : isUpcoming
      ? ""
      : "",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "capitalize",
    whiteSpace: "nowrap",
    textAlign: "center",
  };
});

export const ChevronWrapper = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile, istablet }) => ({
  display: ismobile ? "none" : "flex",
  alignItems: "center",
  justifyContent: "center",
  width: ismobile ? "12px" : istablet ? "16px" : "20px",
  height: "20px",
  flexShrink: 0,
}));

export const ChevronIcon = styled("svg")({
  width: "20px",
  height: "20px",
  "& path": {
    stroke: "#4D4D4D",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
  },
});

export const VerticalConnector = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: ismobile ? "block" : "none",
  alignSelf: "center",
  width: "1px",
  height: "12px",
  backgroundColor: "#4D4D4D",
}));
