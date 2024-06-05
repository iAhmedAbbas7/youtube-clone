import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [videos, setVideos] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    // Feed Main Container
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        backgroundColor: "white",
      }}
    >
      {/* Sidebar Area */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "2px solid #e3e3e3",
          pr: { sx: 0, md: 2 }
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          sx={{
            mt: 1.5,
            color: "#727171",
            fontSize: "0.8rem",
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            overflow: "hidden",
            background: "white",
            py: 1,
            width: "100%",
            borderTop: "2px solid #e3e3e3",
          }}
        >
          © CopyRight {new Date().getFullYear()} YouTube
        </Typography>
      </Box>
      {/* Videos Area */}
      <Box
        sx={{ overflowY: "auto", height: "90vh", flex: 2, border: "none" }}
        p={1}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          p={1}
          sx={{
            color: "#727171",
            background: "#7271714d",
            borderRadius: "10px",
            mb: "8px"
          }}
        >
          <span style={{ fontWeight: 900 }}>&#9673;</span> {selectedCategory}{" "}
          <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
