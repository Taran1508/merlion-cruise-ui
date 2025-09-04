/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from "@mui/material/styles";
import {
  Stack,
  TextField,
  Select,
  TableContainer,
  TableCell,
  TableRow,
  Button,
  Pagination,
  Typography,
} from "@mui/material";
import { Search, CalendarToday } from "@mui/icons-material";
import useResponsive from "@/hooks/UseResponsive";

export const Parent =
  styled(Stack, {
    shouldForwardProp: (prop) =>
      prop !== "ismobile" && prop !== "istablet" && prop !== "isdesktop",
  }) <
  ResponsiveProps >
  (({ theme, ismobile, istablet }) => ({
    width: "100%",
    maxWidth: ismobile ? "100%" : "1320px",
    margin: "0 auto",
    padding: ismobile ? "12px 8px" : istablet ? "16px 12px" : "20px 12px",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "12px",
  }));

export const Root =
  styled(Stack, {
    shouldForwardProp: (prop) => prop !== "ismobile" && prop !== "istablet",
  }) <
  ResponsiveProps >
  (({ theme, ismobile }) => ({
    width: "100%",
    maxWidth: "1320px",
    maxHeight: ismobile ? "none" : "637px",
    margin: "0 auto",
    padding: theme.spacing(ismobile ? 1 : 2),
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#202020",
    border: "1px solid #242424",
    borderRadius: "12px",
    boxSizing: "border-box",
  }));

export const HeaderBar = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  flexDirection: "row",
  flexWrap: "wrap",
  gap: theme.spacing(2),
}));
export const Title = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: 24,
  fontWeight: 700,
  textTransform: "capitalize",
}));
export const SearchGroup = styled(Stack)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
}));
export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: 300,
  "& .MuiOutlinedInput-root": {
    height: 40,
    backgroundColor: "#202020",
    border: "1px solid #4D4D4D",
    borderRadius: 12,
    color: "#FFFFFF",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
  },
  "& .MuiInputBase-input": {
    padding: "8px 16px",
    color: "#4D4D4D",
    "::placeholder": { color: "#4D4D4D", opacity: 1 },
  },
}));
export const YearSelect = styled(Select)(({ theme }) => ({
  width: 141,
  height: 40,
  backgroundColor: "#202020",
  border: "1px solid #4D4D4D",
  borderRadius: 12,
  color: "#FFFFFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: 14,
  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
  "& .MuiSelect-icon": { color: "#FFFFFF" },
}));
export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: "#171717",
  border: "1px solid #242424",
  maxWidth: "1288px",
  borderRadius: 16,
  overflowX: "auto",
  boxShadow: "none",
}));
export const HeaderCell = styled(TableCell)(({ theme }) => ({
  color: "#848484",
  backgroundColor: "#171717",
  fontFamily: "Poppins, sans-serif",
  fontSize: 14,
  fontWeight: 400,
  textTransform: "capitalize",
  maxHeight: "45px",
  maxWidth: "1288px",
  padding: "12px 16px",
  borderBottom: "none",
}));

export const StyledRow = styled(TableRow)(({ even }) => ({
  backgroundColor: "#202020",
  maxWidth: "1288px",
  maxHeight: "52px",
  cursor: "pointer",
  "&:hover": { backgroundColor: "#252525" },
}));
export const BodyCell = styled(TableCell)(({ theme }) => ({
  color: "#FFFFFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: 16,
  fontWeight: 400,
  padding: "14px 16px",
  borderBottom: "none",
}));
export const ActionButton = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(270deg, #C9C9C9 1.22%, #C9C9C9 48.95%, #838383 98.56%)",
  color: "#0D0D0D",
  fontFamily: "Poppins, sans-serif",
  fontSize: 14,
  fontWeight: 500,
  textTransform: "capitalize",
  borderRadius: 60,
  padding: "6px 16px",
  miaxWidth: "118px",
  maxHeight: "33px",
  "&:hover": {
    background:
      "linear-gradient(270deg, #B8B8B8 1.22%, #B8B8B8 48.95%, #727272 98.56%)",
  },
}));
export const SearchIcon = styled(Search)({
  color: "#4D4D4D",
  width: 18,
  height: 18,
});
export const CalendarIcon = styled(CalendarToday)({
  color: "#4D4D4D",
  width: 20,
  height: 20,
  marginRight: 8,
});
export const ArrowButton = styled("button")(({ theme }) => ({
  display: "flex",
  width: "34.063px",
  padding: "9.58px",
  justifyContent: "center",
  alignItems: "center",
  gap: "12.774px",
  borderRadius: "8px",
  border: "1px solid #242424",
  background: "#171717",
  cursor: "pointer",
  "&:hover": { background: "#252525" },
  "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
}));
export const PaginationContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  height: "38px",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
}));
export const PageIndicator = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "8.516px 12.774px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8.516px",
  borderRadius: "8px",
  border: "1px solid #242424",
  background: "#171717",
  color: "#FFF",
  fontFamily: "Inter, sans-serif",
  maxWidth: "42px",
  fontSize: "14.903px",
  fontWeight: 500,
  lineHeight: "150%",
}));
export const PaginationNumbers = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const PageButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ selected }) => ({
  display: "flex",
  width: "35.128px",
  padding: "8.516px 12.774px",
  justifyContent: "center",
  alignItems: "center",
  gap: "4.258px",
  borderRadius: "4px",
  border: "none",
  background: selected
    ? "linear-gradient(270deg, #C9C9C9 1.22%, #C9C9C9 48.95%, #838383 98.56%)"
    : "transparent",
  color: selected ? "#0D0D0D" : "#FFF",
  fontFamily: "Poppins, sans-serif",
  fontSize: "12px",
  fontWeight: 500,
  cursor: "pointer",
  "&:hover": {
    background: selected
      ? "linear-gradient(270deg, #B8B8B8 1.22%, #B8B8B8 48.95%, #727272 98.56%)"
      : "rgba(255, 255, 255, 0.1)",
  },
}));
export const PaginationWrapper = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  marginTop: theme.spacing(3),
  width: "100%",
  maxWidth: "1288px",
}));
export const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "#FFFFFF",
    fontFamily: "Poppins, sans-serif",
  },
  "& .Mui-selected": {
    backgroundColor: "#C9C9C9 !important",
    color: "#0D0D0D",
  },
}));
