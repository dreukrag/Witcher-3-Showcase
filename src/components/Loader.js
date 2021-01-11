import React, { useCallback, useEffect, useRef, useState } from "react";

import loader_empty from "resources/loader_empty.svg";
import loader_partial_1 from "resources/loader_partial_1.svg";
import loader_partial_2 from "resources/loader_partial_2.svg";
import loader_full from "resources/loader_full.svg";
import { createUseStyles } from "react-jss";

const icon_state = {
  EMPTY: "EMPTY",
  PARTIAL_1: "PARTIAL_1",
  PARTIAL_2: "PARTIAL_2",
  FULL: "FULL",
};

const LoaderStyles = createUseStyles({
  main: {
    backgroundColor: "#1D1A1A",
    position: `absolute`,
    top: 0,
    left: 0,
    width: `100vw`,
    height: `100vh`,
    display: `flex`,
    justifyContent: `center`,
    zIndex: 9999,
  },
});

/**
 *
 * TO-DO: Add transition fade-in/out when toggling show
 */
const Loader = ({ delay = 250, show = true }) => {
  const [currIcon, setCurrIcon] = useState(icon_state.EMPTY);
  const timeoutRef = useRef();

  const styles = LoaderStyles();

  const changeIconSequentially = useCallback((cI, sCI) => {
    switch (cI) {
      case icon_state.EMPTY:
        sCI(icon_state.PARTIAL_1);
        break;
      case icon_state.PARTIAL_1:
        sCI(icon_state.PARTIAL_2);
        break;
      case icon_state.PARTIAL_2:
        sCI(icon_state.FULL);
        break;
      case icon_state.FULL:
        sCI(icon_state.EMPTY);
        break;
      default:
        sCI(icon_state.EMPTY);
        break;
    }
  }, []);
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => changeIconSequentially(currIcon, setCurrIcon),
      delay
    );
    return () => clearTimeout(timeoutRef.current);
  }, [currIcon, changeIconSequentially, delay]);

  let icon;

  switch (currIcon) {
    case icon_state.EMPTY:
      icon = loader_empty;
      break;
    case icon_state.PARTIAL_1:
      icon = loader_partial_1;
      break;
    case icon_state.PARTIAL_2:
      icon = loader_partial_2;
      break;
    case icon_state.FULL:
      icon = loader_full;
      break;

    default:
      icon = loader_empty;
      break;
  }

  if (show) {
    return (
      <div className={styles.main}>
        <img src={icon} alt="loading..." />
      </div>
    );
  } else return null;
};

export default Loader;
