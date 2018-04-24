import React from "react"; // eslint-disable-line no-unused-vars
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import propTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import List from "../../components/List";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dialog from "../../components/Dialog";

const styles = theme => ({
    container: {
        maxWidth: "600px",
        width: "80%"
    },
    paper: {
        width: "100%",
        boxShadow: theme.shadows[0],
        border: `${theme.border.width}${theme.border.color}`,
        borderRadius: theme.border.radius
    }
});


const Home = props => {

    const { classes } = props;

    return (
        <Grid container className={classes.container}>
            <Dialog/>
            <Paper className={classes.paper}>
                <Header/>
                <List/>
            </Paper>
            <Footer/>
        </Grid>
    );
};

Home.propTypes = {
    classes: propTypes.object
};

export default withStyles(styles)(Home);

