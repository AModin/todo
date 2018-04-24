import React from "react"; // eslint-disable-line no-unused-vars
import AppState from "../../stores/AppState";
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "material-ui/Dialog";
import { observer } from "mobx-react";
import { useStrict } from "mobx";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";
import { pure } from "recompose";
import Button from "material-ui/Button";
import propTypes from "prop-types";
import TodoList from "stores/Todos";

useStrict();

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        maxWidth: "100%"
    },
    modalItem: {
        margin: `0 ${theme.spacing.form} ${theme.spacing.form}`
    },
    buttonsHolder: {
        marginBottom: theme.spacing.form
    }
});

const Modal = observer(props => {

    let inputText = null;
    const { classes } = props;

    return (
        <Dialog
            fullScreen={false}
            open={AppState.isShowModal}
            onClose={() => AppState.toggleModal()}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{"Add your next todo"}</DialogTitle>
            <DialogContent >
                <DialogContentText className={classes.description}>
                    Enter description of your todo
                </DialogContentText>
            </DialogContent>

            <TextField
                id="with-placeholder"
                label="Add description"
                placeholder="Description"
                className={classes.textField}
                margin="normal"
                className={classes.modalItem}
                inputRef={node => inputText = node}
            />

            <DialogActions className={classes.buttonsHolder}>
                <Button
                    onClick={
                        () => AppState.toggleModal()
                    } color="primary"
                >
                    close
                </Button>
                <Button
                    data-id="add"
                    onClick={
                        () => TodoList.addTodo(inputText.value).then(() => AppState.toggleModal())
                    }
                    color="primary" autoFocus
                >
                    add
                </Button>
            </DialogActions>
        </Dialog>
    );
});

Modal.propTypes = {
    classes: propTypes.object,
    addTodo: propTypes.func,
    toggleModal: propTypes.func
};

export default withStyles(styles)(pure(Modal));
