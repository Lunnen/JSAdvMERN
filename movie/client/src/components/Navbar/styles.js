import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 20,
    margin: '30px 0',
    display: 'flex',
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    background:"White",
    border: "solid",
    borderColor:"black"

  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '600px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width:"80px",
    height:"80px",
    marginLeft: "15px"
  },
  logout: {
        fontWeight: "bold",
        maxHeight: "50px",
        marginTop: "10px",
        marginLeft: "15px"
    },
}));
