import { styled, Button } from "@mui/material";

// Cancel Booking (red outline)
export const CancelBookingButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "999px",
  border: `1px solid #4D4D4D `,
  color: "#fff",
  textTransform: "none",
  backgroundColor: "#202020",
  fontWeight: 500,
  fontSize: "14px",
  width: "160px",
  padding: theme.spacing(1, 0),
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "#202020",
  },
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    width: "120px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    width: "110px",
    fontSize: "10px",
  },
}));

// Back Booking Button
export const BackBookingButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "16px",
  border: `1px solid #4D4D4D`,
  color: theme.palette.common.white,
  textTransform: "none",
  backgroundColor: "transparent",
  fontWeight: 500,
  fontSize: "14px",
  maxWidth: "120px",
  width: "100%",
  padding: theme.spacing(1, 0),
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderColor: "rgba(255,255,255,0.24)",
  },
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    width: "110px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    width: "100px",
    fontSize: "10px",
  },
}));

// Next (blue gradient)
export const NextButton = styled(Button)(({ theme }) => ({
  flex: "0 0 auto",
  borderRadius: "999px",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "14px",
  width: "155px",
  padding: theme.spacing(1, 0),
  backgroundColor: "#838383", // solid gray
  color: "#000",
  border: "none",
  "&:hover": {
    backgroundImage: "linear-gradient(90deg, #6f6f6f, #a0a0a0)", // subtle hover gradient
  },
  "&.Mui-disabled": {
    backgroundImage: "none",
    backgroundColor: "#444444",
    color: "#000",
  },
  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    width: "120px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    width: "110px",
    fontSize: "10px",
  },
}));
