import { Button, makeStyles, TextField } from "@material-ui/core";
import Loader from "components/Loader";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogin, loginStatuses } from "redux/AuthReducer";
import background from "resources/background.png";
import title from "resources/title.png";
const PageStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${background})`,
    height: "100vh",
    width: "100vw",
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundColor: "#1D1A1A",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  inputUnderline: {
    borderBottom: "1px solid #A99E7E",
  },
  input: {
    color: "white",
  },
  label: {
    color: "#A99E7E",
  },
}));
/**
 *
 * TO-DO: Add some sort of gradient to image borders when rendering on large screens without having to mess with Z-index
 */
const Login = () => {
  const styles = PageStyles();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ password: "", email: "" });

  const HandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(doLogin(form.email, form.password));
    },
    [dispatch, form]
  );

  const handleChange = useCallback((e) => {
    const v = e.target.value;
    const n = e.target.name;
    setForm((old) => ({ ...old, [n]: v }));
  }, []);

  return (
    <div className={styles.main}>
      <form className={styles.box} onSubmit={HandleSubmit}>
        <img src={title} alt="The Witcher 3: Wild Hunt" />
        <Loader show={loginStatus === loginStatuses.START} />
        <TextField
          label="E-mail"
          InputProps={{
            classes: { underline: styles.inputUnderline, root: styles.input },
          }}
          InputLabelProps={{
            classes: { root: styles.label },
          }}
          classes={{ root: styles.input }}
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          required
        />
        <TextField
          label="Password"
          InputProps={{
            classes: { underline: styles.inputUnderline, root: styles.input },
          }}
          InputLabelProps={{
            classes: { root: styles.label },
          }}
          classes={{ root: styles.input }}
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          required
        />
        <p>{errorMessage}</p>
        <Button type="submit" variant="outlined" style={{ marginTop: "12px" }}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
