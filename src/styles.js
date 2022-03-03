import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        background: "paper",
        paddingBottom: "50px",
    },
    icon: {
        marginRight: "20px",
    },
    button: {
        marginTop: "40px",
    },
    cardGrid: {
        marginRight: "20px 0",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%", //16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: "paper",
        padding: "50px",
        marginTop: "20px",
    }
});

export default useStyles;
