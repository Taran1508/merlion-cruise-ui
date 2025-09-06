import { styled } from "@mui/material/styles";
import { Paper, Stack, Typography, Avatar, IconButton } from "@mui/material";

export const Root = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  borderRadius: "16px",
  maxWidth: "1320px",
  maxHeight: "80px",
  marginInline: "auto",
  marginBottom: "50px",
  boxSizing: "border-box",
  padding: theme.spacing(2),
}));

export const UploadCard = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid #242424`,
  borderRadius: "16px",
  padding: theme.spacing(2),
  backgroundColor: "#171717",
  gap: theme.spacing(2),
  width: "100%",
}));

export const FileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  fontSize: theme.typography.pxToRem(14),
  backgroundColor: "rgba(149, 202, 80, 0.15)", // light green glow
  color: "#95CA50",
  boxShadow: `0 6px 18px rgba(149, 202, 80, 0.25)`,
}));

export const FileName = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "14px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
}));

export const RemoveBtn = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "999px",
  padding: theme.spacing(0.5),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
