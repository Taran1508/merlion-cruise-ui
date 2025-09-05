/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from "@mui/material/styles";
import { Stack, Box } from "@mui/material";

export const StepperContainer = styled(Stack, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ theme, ismobile, istablet }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: ismobile ? "4px" : "8px",
  width: "100%",
  maxWidth: ismobile ? "100%" : istablet ? "90%" : "829px",
  height: "40px",
  fontFamily: "Poppins, sans-serif",
  flexWrap: ismobile ? "wrap" : "nowrap",
  justifyContent: ismobile ? "center" : "flex-start",
  padding: ismobile ? "8px" : "0",
}));

export const StepItem = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "isactive" &&
    prop !== "iscompleted" &&
    prop !== "isclickable",
})(({ theme, ismobile, istablet, isactive, iscompleted, isclickable }) => ({
  display: "flex",
  padding: ismobile ? "6px 8px" : "8px 16px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "60px",
  backgroundColor: "#171717",
  border: isactive ? "1px solid #4D4D4D" : "none",
  cursor: isclickable ? "pointer" : "default",
  transition: "all 0.2s ease-in-out",
  minWidth: ismobile ? "auto" : "fit-content",
  width: ismobile ? "100%" : "auto",
  marginBottom: ismobile ? "4px" : "0",

  "&:hover": isclickable
    ? {
        backgroundColor: "#202020",
        transform: "translateY(-1px)",
      }
    : {},
}));

<<<<<<< HEAD
export const StepLabel =
  styled("div", {
    shouldForwardProp: (prop) =>
      prop !== "ismobile" &&
      prop !== "istablet" &&
      prop !== "isdesktop" &&
      prop !== "isactive" &&
      prop !== "iscompleted",
  }) <
  { isactive, iscompleted } >
  (({ ismobile, istablet, isactive, iscompleted }) => ({
    color: isactive || (!iscompleted && !isactive) ? "#F6F6F6" : "#A0A0A0",
    fontFamily: "Poppins, sans-serif",
    fontSize: ismobile ? "12px" : "14px",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "capitalize",
    whiteSpace: "nowrap",
    textAlign: "center",
  }));

export const ChevronWrapper =
  styled("div", {
    shouldForwardProp: (prop) =>
      prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
  }) <
  ResponsiveProps >
  (({ ismobile }) => ({
    display: ismobile ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    flexShrink: 0,
  }));
=======
export const StepLabel = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" &&
    prop !== "istablet" &&
    prop !== "isdesktop" &&
    prop !== "isactive" &&
    prop !== "iscompleted",
})(({ ismobile, istablet, isactive, iscompleted }) => ({
  color: isactive || (!iscompleted && !isactive) ? "#F6F6F6" : "#A0A0A0",
  fontFamily: "Poppins, sans-serif",
  fontSize: ismobile ? "12px" : "14px",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "capitalize",
  whiteSpace: "nowrap",
  textAlign: "center",
}));

export const ChevronWrapper = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: ismobile ? "none" : "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  flexShrink: 0,
}));
>>>>>>> 54f0ac841d251f8ab9db35e713c33735712fc2c0

export const ChevronIcon = styled("svg")({
  width: "20px",
  height: "20px",
  "& path": {
    stroke: "#4D4D4D",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
  },
});

<<<<<<< HEAD
export const MobileStepIndicator =
  styled("div", {
    shouldForwardProp: (prop) =>
      prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
  }) <
  ResponsiveProps >
  (({ ismobile }) => ({
    display: ismobile ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    marginTop: "8px",
    width: "100%",
  }));

export const MobileDot =
  styled("div", {
    shouldForwardProp: (prop) => prop !== "isactive" && prop !== "iscompleted",
  }) <
  { isactive, iscompleted } >
  (({ isactive, iscompleted }) => ({
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: isactive ? "#F6F6F6" : iscompleted ? "#A0A0A0" : "#4D4D4D",
    transition: "background-color 0.2s ease-in-out",
  }));
=======
export const MobileStepIndicator = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
})(({ ismobile }) => ({
  display: ismobile ? "flex" : "none",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  marginTop: "8px",
  width: "100%",
}));

export const MobileDot = styled("div", {
  shouldForwardProp: (prop) => prop !== "isactive" && prop !== "iscompleted",
})(({ isactive, iscompleted }) => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: isactive ? "#F6F6F6" : iscompleted ? "#A0A0A0" : "#4D4D4D",
  transition: "background-color 0.2s ease-in-out",
}));
>>>>>>> 54f0ac841d251f8ab9db35e713c33735712fc2c0
