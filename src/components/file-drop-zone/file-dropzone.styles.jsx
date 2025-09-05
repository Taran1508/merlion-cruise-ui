import { styled } from "@mui/material/styles";
import { Paper, Stack, Typography, Avatar, IconButton } from "@mui/material";

export const Root = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius * 1.5,
  maxWidth: "1320px",
  maxHeight: "130px",
  marginInline: "auto",
  boxSizing: "border-box",
}));

// Drop area (receives getRootProps)
export const DropArea = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "dragActive",
})(({ theme, dragActive }) => ({
  border: `2px dashed #4D4D4D`,
  borderRadius: "16px",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  cursor: "pointer",
  // subtle background change on drag
  backgroundColor: dragActive ? theme.palette.action.hover : "transparent",
  transition: "background-color 160ms ease",
  // allow the drop area to grow horizontally and shrink
  flex: "1 1 auto",
  minWidth: 0,
}));

// Left: uploaded file avatars stack
export const AvatarsStack = styled(Stack)(({ theme }) => ({
  flex: "0 0 auto",
  gap: theme.spacing(1),
  alignItems: "center",
}));

export const FileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  fontSize: theme.typography.pxToRem(14),
  backgroundColor: "rgba(149, 202, 80, 0.15)", // light green glow
  color: "#95CA50",
  boxShadow: `0 6px 18px rgba(149, 202, 80, 0.25)`,
}));
// Center content (instructions)
export const CenterContent = styled(Stack)(({ theme }) => ({
  flex: "1 1 auto",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 0,
  textAlign: "center",
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "14px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: "#848484",
  fontSize: "14px",
  fontWeight: 400,
}));

// Right: small icon / indicator (optional)
export const RightMeta = styled(Stack)(({ theme }) => ({
  flex: "0 0 auto",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255,255,255,0.08)",

  gap: theme.spacing(1),
}));

export const FileIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: theme.spacing(5),
  minHeight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.action.selected,
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
