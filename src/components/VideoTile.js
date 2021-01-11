import {
  BottomNavigationAction,
  ButtonBase,
  makeStyles,
} from "@material-ui/core";
import React, { useCallback, useState } from "react";
import VideoModal from "./VideoModal";

const VideoTileStyles = makeStyles((theme) => ({
  main: {
    border: `solid 1px ${theme.palette.primary.main}`,
    padding: "4px",
    width: "122px",
    height: "92px",
    position: "relative",
    "@media (min-width: 600px)": {
      width: "calc((100vw - 300px)/2 - 24px)",
      height: "100%",
    },
  },
  img: {
    width: "100%",
  },
  title: {
    position: "absolute",
    bottom: 0,
    left: 0,
    textAlign: "center",
    width: "100%",
  },
}));
const VideoTile = ({ url, title, id }) => {
  const [open, setOpen] = useState(false);
  const styles = VideoTileStyles();
  const handleOpen = useCallback((e) => {
    e.preventDefault();
    console.log("opening");
    setOpen(true);
  }, []);
  const handleClose = useCallback((e) => {
    e.preventDefault();
    console.log("closing");
    setOpen(false);
  }, []);
  return (
    <>
      <ButtonBase onClick={handleOpen} className={styles.main}>
        <img className={styles.img} src={url} />
        <p className={styles.title}>{title}</p>
      </ButtonBase>
      <VideoModal open={open} onClose={handleClose} id={id} />
    </>
  );
};

export default VideoTile;
