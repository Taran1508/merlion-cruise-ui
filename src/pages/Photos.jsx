import Footer from "../components/Footer";
import Banner from "../components/Banner";
import TabsSwitcher from "../components/TabsSwitcher";
import MediaGrid from "../components/MediaGrid";
import { Box } from "@mui/material";
import p1 from "../assets/photos/1.png";
import p2 from "../assets/photos/2.jpg";
import p3 from "../assets/photos/3.jpg";
import p4 from "../assets/photos/4.png";
import p5 from "../assets/photos/5.png";

const photoItems = [
  { src: `${p1}`, type: "photo" },
  { src: `${p2}`, type: "photo" },
  { src: `${p3}`, type: "photo" },
  { src: `${p4}`, type: "photo" },
  { src: `${p5}`, type: "photo" },
];

export default function Photos() {
  const activeTab = "Photos";
  const items = photoItems;

  return (
    <div
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      <Banner
        title={activeTab}
        description="We offer a premium cruise experience designed for comfort, elegance, and unforgettable moments at sea. With personalized service."
      />
      <Box sx={{ maxWidth: 1316, width: "100%", mx: "auto", px: 2 }}>
        <TabsSwitcher activeTab={activeTab} />
        <MediaGrid items={items} />
      </Box>

      <Footer />
    </div>
  );
}
