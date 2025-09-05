import { Box } from "@mui/material";
import MediaCard from "./MediaCard";

export default function MediaGrid({ items }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        height: screen,
        gap: 2, // spacing between cards
        mt: 8,
      }}
    >
      {items.map((item, idx) => (
        <div key={idx}>
          <MediaCard src={item.src} type={item.type} />
        </div>
      ))}
    </Box>
  );
}
