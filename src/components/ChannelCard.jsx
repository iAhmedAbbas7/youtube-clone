import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        display: "flex",
        backgroundColor: "rgba(114, 113, 113, 0.2)",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2 }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "red", ml: "5px" }} />
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString()}{" "}
                Subscribers
              </Typography>
            )}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
