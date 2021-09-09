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
    buttonClear: {
        margin: "0rem 0.5rem",
        background: "#f60757",
        width: "5vw",
        color: "#F9F7F5",
    },
    buttonSubmit: {
        background: "#016727",
        width: "17vw",
        color: "#F9F7F5",
    },
}));
