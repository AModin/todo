import React from "react"; // eslint-disable-line no-unused-vars
import Grid from "material-ui/Grid";
import moment from "moment";
import Fab from "./Fab";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import propTypes from "prop-types";
import { observer } from "mobx-react";
import { useStrict } from "mobx";
import { pure } from "recompose";
import TodoList from "stores/Todos";
import AppState from "stores/AppState";

useStrict();

const styles = theme => ({
    button: {
        position: "absolute",
        margin: 0,
        bottom: "-25%",
        background: theme.palette.secondary.main,
        right: theme.spacing.unit
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        maxWidth: "100%"
    },
    toolbar: {
        flexWrap: "wrap",
        padding: theme.spacing.form
    },
    tasks: {
        color: theme.palette.grey[400],
        fontSize: theme.typography.pxToRem(16)
    },
    header: {
        position: "relative",
        background: theme.palette.grey[50],
        height: "100px",
        boxShadow: theme.shadows[0],
        justifyContent: "center",
        borderTopRightRadius: theme.border.radius,
        borderTopLeftRadius: theme.border.radius,
        borderBottom: `1px solid ${theme.palette.grey[100]}`
    },
    title: theme.typography.headline,
    subtitle: theme.typography.subheading,
    modalItem: {
        margin: `0 ${theme.spacing.form} ${theme.spacing.form}`
    },
    buttonsHolder: {
        marginBottom: theme.spacing.form
    },
    titleLine: {
        display: "flex",
        justifyContent: "space-between"
    }
});

const Header = observer(props => {

    const { classes } = props;
    const { items, currentDate, loading } = TodoList;

    const renderItemsCount = () => (
        <Typography color="inherit" className={classes.tasks}>
            {items && Object.keys(items).length || 0} item(s)
        </Typography>
    );

    return (
        <AppBar position="static" color="default" className={classes.header}>
            <Toolbar className={classes.toolbar}>
                <Grid item xs={12} sm={12} md={12} className={classes.titleLine}>
                    <Typography variant="title" color="inherit" className={classes.title}>
                        {moment(currentDate).format("dddd, Do")}
                    </Typography>
                    {
                        !loading &&
                        renderItemsCount()
                    }
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.subtitle}>
                        {moment(currentDate).format("MMMM")}
                    </Typography>
                </Grid>
            </Toolbar>
            <Fab {...props} toggleModal={() => AppState.toggleModal()}/>
        </AppBar>
    );
});

Header.propTypes = {
    classes: propTypes.object,
    toggleModal: propTypes.func,
    items: propTypes.object,
    loading: propTypes.bool,
    currentDate: propTypes.string
};

export default withStyles(styles)(pure(Header));
