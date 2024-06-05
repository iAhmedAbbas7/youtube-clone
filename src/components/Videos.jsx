import { Grid } from "@mui/material";
import { VideoCard, Loader } from "./";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Grid container spacing={2} pb={6}>
      {videos.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          {item.id.videoId && <VideoCard video={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
