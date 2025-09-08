import { styled, Stack } from "@mui/material";

// Container for details section
export const DetailsContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: theme.spacing(4),
  maxWidth: "1200px",
  margin: "0 auto",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// About section (left side text)
export const AboutSection = styled(Stack)(({ theme }) => ({
  flex: 2,
  maxWidth: "60%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));
