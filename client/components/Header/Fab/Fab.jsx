import React from "react";// eslint-disable-line no-unused-vars
import { pure } from "recompose";
import Button from "material-ui/Button";
import Add from "@material-ui/icons/Add";

const Fab = pure(props => {
    const { toggleModal, classes } = props;

    return (
        <Button
            variant="fab"
            data-id="modal"
            color="secondary"
            aria-label="add"
            className={classes.button}
            onClick={() => toggleModal()}
        >
            <Add />
        </Button>
    );
});

export default Fab;
