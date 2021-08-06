import {  makeStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const classes = useStyles();

  return (
    <div classes={classes.root}>
      <AppBar position="relative">
        <Toolbar classes={classes.toolbar}>
          <Typography variant="h6" classes={classes.title}>
            Reci.P
          </Typography>
          <Button color="inherit" onClick={() => setIsLoggedIn(false)}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>

    </div>

  );
};




export default Header;
