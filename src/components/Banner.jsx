import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

export default function Banner({ title, description }) {
  const imageWidths = ["10%", "42%", "40%", "10%"];
  const images = [`${img1}`, `${img2}`, `${img3}`, `${img4}`];

  return (
    <Box
      sx={{
        position: "relative",
        height: 450,
        overflow: "hidden",
        color: "white",
        display: "flex",
      }}
    >
      {/* Four images with specific widths */}
      {images.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`banner-image-${index + 1}`}
          sx={{
            width: imageWidths[index],
            height: "100%",
            objectFit: "cover",
            objectPosition:
              index === 0
                ? "right top"
                : index === 3
                ? "left center"
                : "center center",
            filter: "grayscale(100%)",
          }}
        />
      ))}

      {/* Back button (over 2nd image start) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(8px)",
          height: 46,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Button
          // onClick={onBack}
          startIcon={
            <ArrowBackIosNewIcon sx={{ fontSize: 12, borderRadius: 6 }} />
          }
          sx={{
            position: "absolute",
            top: 12,
            left: "18%",
            color: "#fff",
            width: 72,
            height: 24,
            textTransform: "none",
            fontSize: "14px",
            zIndex: 2,
          }}
        >
          Back
        </Button>
      </Box>

      {/* Overlay content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, maxWidth: 600 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
