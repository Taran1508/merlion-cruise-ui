import Footer from "../components/Footer";
import Banner from "../components/Banner";
import TabsSwitcher from "../components/TabsSwitcher";
import MediaGrid from "../components/MediaGrid";
import type { MediaItem } from "../types/media";
import { Box } from "@mui/material";

import p2 from "../assets/photos/2.jpg";
import p3 from "../assets/photos/3.jpg";

const videoItems: MediaItem[] = [
  { src: `${p2}`, type: "video" },
  { src: `${p3}`, type: "video" },
];

export default function Videos() {
  const activeTab = "Videos";

  //   const items = activeTab === "Photos" ? photoItems : videoItems;
  const items = videoItems;

  return (
    <div
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      <Banner
        title={"Videos"}
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
