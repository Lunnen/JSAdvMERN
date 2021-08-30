import {makeStyles} from "@material-ui/core/styles";
export default makeStyles(()=>({
    appBar: {
        borderRadius: 20,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        background: 'rgba(0,183,255, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'black',
    },
    image: {
        marginLeft: '15px',
    },

}));
