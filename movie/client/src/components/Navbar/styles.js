import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 20,
    margin: "10px 0",
    display: "flex",

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 5px",
    background: "White",
    border: "solid",
    borderColor: "black",
    width: "100%",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    margin: "0 auto",
    maxWidth: "80%",
    display: "block",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    maxWidth: "100%",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: "4rem",
    height: "4rem",
  },
  logout: {
    fontWeight: "bold",
    width: "5rem",
    padding: "0.2rem",
    margin: "0rem 0.2rem",
  },
  rightSide: {
    fontSize: "1.5vw",
    padding: "1rem 0rem",
    margin: "0rem 0.5rem",
  },
  textBox: {
    padding: "0rem 0.4rem",
    margin: "0rem 0.2rem",
    border: "1px dashed black",
    fontWeight: "bold",
  },
  signInOut: {
    fontWeight: "bold",
    width: "5rem",
    padding: "0.2rem",
    margin: "0rem 0.2rem",
  },
}));
