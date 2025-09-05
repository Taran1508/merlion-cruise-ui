import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const WidgetContainer = styled(Box)(({ theme }) => ({
  maxWidth: "634px",
  maxHeight: "314px",
  backgroundColor: "#171717",
  padding: "24px",
  borderRadius: "16px",
  border: "1px solid #242424",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "45px",
  },
}));

export const WidgetTitle = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "12px",
  fontFamily: "Poppins, sans-serif",
  color: "#AEAEAE",
}));

export const ChartWrapper = styled(Box)(() => ({
  position: "relative",
  width: "220px",
  height: "220px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Donut = styled(Box)(() => ({
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const DonutSlice = styled(Box)(() => ({
  position: "absolute",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: "#171717", // same as container bg
  zIndex: 2,
}));

export const ChartCenterText = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#ccc",
  fontSize: "14px",
  zIndex: 3,
  "& strong": {
    display: "block",
    fontSize: "20px",
    color: "#fff",
    marginTop: "4px",
  },
}));

export const LegendItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
}));

export const LegendDot = styled("span")(({ color }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  marginRight: "8px",
  display: "inline-block",
  backgroundColor: color || "#fff", // fallback if color not provided
}));

export const LegendLabel = styled("span")(() => ({
  fontWeight: 400,
  fontSize: "16px",
  flex: 1,
}));

export const LegendValue = styled("span")(() => ({
  fontWeight: 600,
  fontSize: "16px",
  fontFamily: "Poppins, sans-serif",
}));

export const ChartContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "60px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
  },
}));

export const Legend = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "194px",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
  },
}));
