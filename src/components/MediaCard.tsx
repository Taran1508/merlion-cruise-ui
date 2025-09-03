import { Card, CardMedia, Box } from "@mui/material";
import type { MediaType } from "../types/media";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface MediaCardProps {
  src: string;
  type: MediaType;
}

export default function MediaCard({ src, type }: MediaCardProps) {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        width: 428,
        height: type === "video" ? 275 : 354,
        bgcolor: "#fff",
        borderRadius: 0, // fallback background
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={type}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {type === "video" && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgba(0,0,0,0.3)",
          }}
        >
          <PlayArrowIcon sx={{ fontSize: 36, color: "white" }} />
        </Box>
      )}
    </Card>
  );
}
