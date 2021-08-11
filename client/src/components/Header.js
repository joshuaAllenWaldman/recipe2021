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

const Header = ({ isLoggedIn, setIsLoggedIn, setToken }) => {
  const classes = useStyles();

  const logout = () => {
    setToken({token: undefined})
    setIsLoggedIn(false)
    window.localStorage.removeItem("token")
  }

  return (
    <div classes={classes.root}>
      <AppBar position="relative">
        <Toolbar classes={classes.toolbar}>
          <Typography variant="h6" classes={classes.title}>
            Reci.P
          </Typography>
          <Button color="inherit" onClick={logout}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>

    </div>

  );
};




export default Header;
