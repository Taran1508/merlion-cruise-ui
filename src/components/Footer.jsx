import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Instagram, YouTube, LinkedIn, X } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/logo.png";
import f1 from "../assets/f1.jpg";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${f1})`, // Use the imported variable
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
        mt: 8,
        px: { xs: 2, md: 10 },
        py: 6,
        filter: "grayscale(100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1,
        },
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      <Box
        sx={{
          width: "calc(100% - 470px)",
          mx: "auto",
          display: "flex",
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Box sx={{ width: 440, height: 322 }}>
          {/* Left Section */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",
              width: 406,
              height: 120,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Merlion Cruise Logo"
              sx={{
                width: 120,
                height: 120,
                objectFit: "contain",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Scheherazade New",
                fontWeight: "bold",
                width: 270,
                height: 68,
                display: "flex",
                fontSize: 32,
                alignItems: "center",
                color: "white",
              }}
            >
              MERLION CRUISE
            </Typography>
          </Box>
          <Box
            sx={{
              width: 440,
              height: 162,
            }}
          >
            <Typography
              variant="h6"
              sx={{ lineHeight: 2, mt: 4, color: "#ccc", fontWeight: "bold" }}
            >
              Luxury Cruise Booking Made Easy
            </Typography>

            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#aaa" }}>
              Book unforgettable cruise journeys from Dubai to Abu Dhabi and
              beyond. Our cruise booking platform offers luxury cabins, fine
              dining, live entertainment, and seamless booking. Whether you're
              planning a family holiday, romantic getaway, or corporate event,
              our cruises provide unmatched comfort and world-class experiences.
            </Typography>
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              gap: 12,
            }}
          >
            {/* Middle Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                width: 199,
                height: 312,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#FFFFFFCC",
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#FFFFFFCC",
                }}
              >
                Merlion Experience
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#FFFFFFCC",
                }}
              >
                Help & Support
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#FFFFFFCC",
                }}
              >
                Guest Conduct Policy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#FFFFFFCC",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#FFFFFFCC",
                }}
              >
                Terms & Conditions
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#FFFFFFCC",
                }}
              >
                Refund and Cancellation
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  fontSize: 16,
                  color: "#FFFFFFCC",
                }}
              >
                FAQ
              </Typography>
            </Box>

            {/* Last Section */}
            <Box sx={{ color: "#FFFFFFCC" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#FFFFFFCC",
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{ verticalAlign: "middle", mr: 1 }}
                />
                Location
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                2nd Floor, Zentral Tower, World Trade Centre
                <br />
                Dubai, United Arab Emirates
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <HeadsetMicIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                  +971 5452 69999
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <WhatsAppIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                  +971 5452 69999
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <EmailIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                  Contactus@merlioncruise.com
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* NewsLetter */}
          <Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 4 }}>
                Newsletter
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFFCC",
                }}
              >
                <TextField
                  placeholder="Your email address"
                  size="small"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      flex: 1,
                      width: 466,
                      height: 48,
                      borderRadius: "12px",
                      color: "#FFFFFFCC", // Sets the text and icon color
                      "& fieldset": {
                        // Target the fieldset directly to set the border
                        borderColor: "#FFFFFFCC",
                      },
                      "&:hover fieldset": {
                        // Ensure color stays on hover
                        borderColor: "#FFFFFFCC",
                      },
                      "&.Mui-focused fieldset": {
                        // Ensure color stays on focus
                        borderColor: "#FFFFFFCC",
                      },
                      "& input": {
                        px: 2,
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    ml: 2,
                    background:
                      "linear-gradient(to right, #838383, #C9C9C9, #C9C9C9)",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 15,
                    width: 144,
                    height: 48,

                    px: 3,
                    "&:hover": { bgcolor: "#ddd" },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "calc(100% - 470px)",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Divider sx={{ my: 4, bgcolor: "#333" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "gray", textAlign: "center", fontSize: 14 }}
          >
            Copyright © 2025 Merlion Cruise. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#4B4B4B",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton sx={{ color: "white" }}>
                <YouTube />
              </IconButton>
            </Box>

            <Box
              sx={{
                backgroundColor: "#4B4B4B",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
            </Box>

            <Box
              sx={{
                backgroundColor: "#4B4B4B",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
            </Box>

            <Box
              sx={{
                backgroundColor: "#4B4B4B",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton sx={{ color: "white" }}>
                <X />
              </IconButton>
            </Box>

            <Box
              sx={{
                backgroundColor: "#4B4B4B",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton sx={{ color: "white" }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
