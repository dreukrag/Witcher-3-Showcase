import { Dialog, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player/youtube";
import CloseIcon from "@material-ui/icons/Close";
const VideoModalStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: "visible",
    backgroundColor: "transparent",
    "@media (max-width: 640px)": {
      maxWidth: "75%",
      maxHeight: "75%",
      height: "100%",
      width: "100%",
    },

    maxWidth: "90%",
    maxHeight: "90%",
    height: "100%",
    width: "100%",
  },
  close: {
    position: "absolute",
    right: 0,
    top: 0,
    transform: "translate(50%, -50%)",
    padding: "4px",
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));
const VideoModal = ({ open, onClose, id }) => {
  const styles = VideoModalStyles();
  console.log(id);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className: styles.wrapper,
      }}
    >
      <IconButton
        className={styles.close}
        onClick={onClose}
        color="primary"
        variant="container"
      >
        <CloseIcon />
      </IconButton>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        playing
        width="100%"
        height="100%"
      />
    </Dialog>
  );
};

export default VideoModal;
