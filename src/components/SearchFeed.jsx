import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
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
          mb: "8px",
        }}
      >
        <span style={{ fontWeight: 900 }}>&#9673;</span> Search Results For :{" "}
        <span style={{ color: "#F31503", textTransform: "capitalize" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
