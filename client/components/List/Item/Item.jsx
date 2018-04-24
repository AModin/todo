import React from "react"; // eslint-disable-line no-unused-vars
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemSecondaryAction, ListItemText } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import { useStrict } from "mobx";
import { pure } from "recompose";
import propTypes from "prop-types";
import Close from "@material-ui/icons/Close";

useStrict();

const styles = theme => ({
    list: {
        width: "100%"
    },
    time: {
        right: theme.spacing.form,
        cursor: "pointer"
    },
    listItem: {
        background: theme.palette.background.paper
    },
    removeIcon: {
        color: theme.palette.grey[200]
    },
    text: {
        color: theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(16)
    }
});

const Item = props => {

    const { classes, value, id, onCheck, onRemove } = props;

    return (
        <ListItem
            key={value}
            dense
            button
            onClick={() => onCheck(id)}
            className={classes.listItem}
        >
            <Checkbox
                checked={value.checked}
                tabIndex={-1}
                disableRipple
            />
            <ListItemText primary={value.name} className={classes.text}/>
            <ListItemSecondaryAction className={classes.time} onClick={() => onRemove(id)}>
                <Close className={classes.removeIcon}/>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

Item.propTypes = {
    classes: propTypes.object,
    value: propTypes.object,
    id: propTypes.string,
    onCheck: propTypes.func,
    onRemove: propTypes.func
};

export default withStyles(styles)(pure(Item));
