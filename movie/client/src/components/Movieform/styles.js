import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    border: "solid",
    borderColor: "black",
    borderRadius: 15,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  fileInputHint: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "gray",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "rgb(11, 102, 35)",
  },
}));
