import React from "react"; // eslint-disable-line no-unused-vars
import { observer } from "mobx-react";
import { useStrict } from "mobx";
import MobileStepper from "material-ui/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "material-ui/Button";
import propTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { pure } from "recompose";
import Todos from "stores/Todos";

useStrict();

const styles = () => ({
    stepper: {
        background: "none",
        width: "100%"
    }
});

const Footer = observer(props => (
    <MobileStepper
        variant="text"
        steps={0}
        className={props.classes.stepper}
        position="static"
        nextButton={
            <Button size="small" onClick={() => Todos.nextDay()}>
                Next day
                <KeyboardArrowRight />
            </Button>
        }
        backButton={
            <Button size="small" onClick={() => Todos.prevDay()}>
                <KeyboardArrowLeft />
                prev day
            </Button>
        }
    />
));

Footer.propTypes = {
    classes: propTypes.object,
    nextDay: propTypes.func,
    prevDay: propTypes.func
};

export default withStyles(styles)(pure(Footer));
