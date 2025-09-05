import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  Divider,
  IconButton,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000",
        color: "white",
        boxShadow: "none",
      }}
    >
      {/* Top Row */}
      <Toolbar
        sx={{
          justifyContent: "space-around",
          px: { xs: 2, md: 6 },
          minHeight: 56,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Merlion Cruise Logo"
            sx={{
              width: 40,
              height: 40,
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Scheherazade New",
              fontWeight: "bold",
              width: "202px",
              height: "51px",
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            MERLION CRUISE
          </Typography>
        </Box>
        {/* Right Controls */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: 16 }}>
          {/* Style Selector */}
          <FormControl
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                backgroundColor: "transparent",
                borderRadius: 15,

                "& fieldset": {
                  borderColor: "#242424", // Default
                },
                "&:hover fieldset": {
                  borderColor: "white", // Hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#242424", // Focused
                },
              },
              "& .MuiSelect-icon": {
                color: "white", // Icon color (dropdown arrow)
              },
            }}
          >
            <Select
              value="Style 1"
              IconComponent={() => (
                <Box
                  component="span"
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: "4.5px solid transparent",
                    borderRight: "4.5px solid transparent",
                    borderTop: "5px solid white", // triangle color
                    display: "inline-block",
                    position: "relative",
                    top: "1px",
                    right: "16px",
                    borderRadius: "4px",
                    cursor: "pointer", // gives subtle rounded effect at edges
                  }}
                />
              )}
              sx={{
                color: "white",
                width: 111,
                height: 37,
                fontSize: "14px",
                "& .MuiSelect-icon": {
                  right: 8,
                },
                bgcolor: "transparent",
              }}
            >
              <MenuItem value="Style 1">Style 1</MenuItem>
              <MenuItem value="Style 2">Style 2</MenuItem>
            </Select>
          </FormControl>

          {/* Language/Currency Selector */}
          <FormControl
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                borderRadius: 15,
                width: 144,
                height: 37,

                "& fieldset": {
                  borderColor: "#242424", // Default
                },
                "&:hover fieldset": {
                  borderColor: "white", // Hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#242424", // Focused
                },
              },
              "& .MuiSelect-icon": {
                color: "white", // Icon color (dropdown arrow)
              },
            }}
          >
            <Select
              value="EN / AED"
              IconComponent={() => (
                <Box
                  component="span"
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: "4.5px solid transparent",
                    borderRight: "4.5px solid transparent",
                    borderTop: "5px solid white",
                    display: "inline-block",
                    position: "relative",

                    right: "16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                />
              )}
              startAdornment={
                <IconButton sx={{ color: "#9A9EA6", width: 20, height: 20 }}>
                  <LanguageIcon sx={{ mr: 1, fontWeight: "light" }} />
                </IconButton>
              }
              sx={{
                color: "white",
                width: 86,
                height: 21,
                fontSize: 14,
              }}
            >
              <MenuItem value="EN / AED">EN / AED</MenuItem>
              <MenuItem value="FR / EUR">FR / EUR</MenuItem>
            </Select>
          </FormControl>

          {/* Login Button */}
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(to right, #838383, #C9C9C9, #C9C9C9)",
              fontFamily: "Poppins",
              color: "black",
              borderRadius: 12,
              textTransform: "none",
              width: 100,
              height: 45,
              fontWeight: 500,
              fontSize: "14px",
              px: 3,
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>

      {/* Divider */}
      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />

      {/* Navigation Bar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "center",
            gap: 3,
            minHeight: 48,
            px: 0,
            width: 533,
            height: 38,
            mr: 2,
          }}
        >
          {[
            "Home",
            "About Us",
            "Merlion Experience",
            "Host an Event",
            "Help & Support",
          ].map((link) => (
            <Typography
              key={link}
              variant="body2"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "gray", fontSize: "14px" },
              }}
            >
              {link}
            </Typography>
          ))}
        </Toolbar>
      </Box>
    </AppBar>
  );
}
