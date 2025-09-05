import { Tabs, Tab, Box } from "@mui/material";

export default function TabsSwitcher({ activeTab }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "start", mt: 3 }}>
      <Tabs
        value={activeTab}
        // onChange={(_, newValue) => onTabChange(newValue)}
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          backgroundColor: "transparent",
          borderRadius: "50px",
          p: 0.5,
          minHeight: "auto",
        }}
      >
        {["Photos", "Videos"].map((tab) => (
          <Tab
            key={tab}
            value={tab}
            label={tab}
            href={activeTab == "Photos" ? "/videos" : "/photos"}
            sx={{
              fontFamily: "Poppins",
              textTransform: "none",
              fontWeight: activeTab === tab ? "bold" : "normal",
              width: 207,
              height: 56,
              gap: 5,
              border: "1px solid",
              borderColor: "#FFFFFF29",
              borderRadius: "50px",
              fontSize: "16px",
              px: 3,
              py: 0.5,
              mr: 3,
              minHeight: "auto",
              color: activeTab === tab ? "black" : "#FFFFFF80",
              "&.Mui-selected": {
                color: activeTab === tab ? "black" : "#FFFFFF80",
              },
              background:
                activeTab === tab
                  ? "linear-gradient(to right, #838383, #C9C9C9, #C9C9C9)"
                  : "#F7F8F90A",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
