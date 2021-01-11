import React, { useCallback, useEffect, useMemo } from "react";
import { Button, makeStyles } from "@material-ui/core";
import background from "resources/background.png";
import title from "resources/title.png";
import { fetchVideos } from "redux/VideosReducer";
import { useDispatch, useSelector } from "react-redux";
import VideoTile from "components/VideoTile";
import { loginStatuses } from "redux/AuthReducer";
import Scrollbar from "react-scrollbars-custom";

const TrailersStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    backgroundImage: `url(${background})`,
    height: "100vh",
    width: "100vw",
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: "cover",
    backgroundColor: "#1D1A1A",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    borderRight: `solid 1px ${theme.palette.primary.main}`,
    padding: "12px",
    position: "relative",
  },

  image: { "@media(min-height: 320px)": { marginTop: "48px" } },
  trailers: {
    width: "100%",
    background: "linear-gradient(90deg, black, transparent)",
    height: "100vh",
    padding: "12px 0 12px 12px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media(min-height: 510px)": {
      position: `absolute`,
      top: `50%`,
      transform: `translateY(-50%)`,
      left: 0,
      width: `100%`,
      padding: "12px",
    },
  },
  tileContainer: {
    display: "grid",
    gridTemplateColumns: "120px 120px",
    gridTemplateRows: "auto",
    rowGap: "12px",
    justifyContent: "space-evenly",
    width: "100%",
    maxHeight: "calc(100vh - 24px)",
    "@media (min-width: 600px)": {
      gridTemplateColumns: "auto auto",
    },
  },
  trackY: {
    width: "5px !important",
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
}));
const Trailers = () => {
  const styles = TrailersStyles();
  const dispatch = useDispatch();

  const nextPageToken = useSelector((state) => state.videos.nextPageToken);
  const items = useSelector((state) => state.videos.items);

  const moreVideos = useCallback(() => {
    dispatch(fetchVideos(nextPageToken));
  }, [dispatch, nextPageToken]);

  const logout = useCallback(() => {
    dispatch({ type: loginStatuses.DO_LOGOUT });
  });

  const tiles = useMemo(() => {
    const videos = items.map((vid) => {
      console.log(vid);
      const url = vid.snippet.thumbnails.default.url;
      const title = vid.snippet.title;
      const id = vid.id;
      const videoId = vid.snippet.resourceId.videoId;

      return <VideoTile {...{ url, title, id: videoId }} key={id} />;
    });

    return videos;
  }, [items]);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <img
          className={styles.image}
          src={title}
          alt="The Witcher 3: Wild Hunt"
        />
        <div className={styles.buttonContainer}>
          <Button variant="outlined" style={{ margin: "12px" }}>
            Trailers
          </Button>
          <Button
            variant="outlined"
            style={{ margin: "12px" }}
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className={styles.trailers}>
        <Scrollbar thumbYProps={{ className: styles.trackY }}>
          <div className={styles.tileContainer}>
            {tiles}
            {nextPageToken && (
              <Button
                variant="outlined"
                onClick={moreVideos}
                style={{ gridColumn: "span 2" }}
              >
                More
              </Button>
            )}
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default Trailers;
