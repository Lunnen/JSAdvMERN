import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "50%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "12px",
    height: "100%",
    position: "relative",
    border: "solid",
    borderColor: "black",

    boxShadow: "5px 5px 7px rgba(33, 33, 33, 0.7)",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  modal_overlay: {
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "fixed",
    zIndex: "-1",
    background: "rgba(49, 49, 49, 0.8)",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 10px",
  },
  message: {
    width: "18ch",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  modalMessage: {
    width: "100%",
    wordWrap: "break-word",
  },
  fileInputHint: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "gray",
  },
  modalCardWrapper: {
    position: "absolute",
    zIndex: "1000",
    left: "20%",
    right: "20%",
    top: "10%",
    margin: "auto",
    maxWidth: "25%",
    height: "auto",
    width: "400px",
    cursor: "pointer",
    overflow: "auto",
    backgroundColor: "rgba(207, 207, 207, 0.9)",
    borderRadius: "15px",
    border: "4px solid black",
    boxShadow: "5px 5px 7px rgba(33, 33, 33, 0.7)",
  },
  close: {
    color: "darkred",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold",

    "&:hover": {
      color: "red",
      textDecoration: "none",
      cursor: "pointer",
    },
    "&:focus": {
      color: "black",
      textDecoration: "none",
      cursor: "pointer",
    },
  },
});
