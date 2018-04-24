import React from "react"; // eslint-disable-line no-unused-vars
import { withStyles } from "material-ui/styles";
import List from "material-ui/List";
import Typography from "material-ui/Typography";
import Item from "./Item";
import { useStrict, toJS } from "mobx";
import { observer } from "mobx-react";
import { Scrollbars } from "react-custom-scrollbars";
import propTypes from "prop-types";
import { pure } from "recompose";
import TodoList from "stores/Todos";

useStrict();

const styles = theme => ({
    list: {
        width: "100%",
        position: "relative",
        overflow: "hidden",
        maxHeight: "100%",
        background: theme.palette.background.paper,
        marginTop: theme.spacing.form
    },
    container: {
        height: "300px"
    },
    emptyList: {
        display: "flex",
        justifyContent: "center",
        height: "100%",
        boxSizing: "border-box",
        alignItems: "center",
        marginTop: theme.spacing.form
    }
});

const ListItems = observer(props => {

    const { classes } = props;
    const { loading } = TodoList;
    const data = toJS(TodoList);
    const { items } = data;
    const scrollBarStyles = { width: "100%", height: 280 };

    const renderList = () => (
        <Scrollbars style={scrollBarStyles}>
            {Object.values(items).map((value, index) => {
                const id = Object.keys(items)[index];

                return (
                    <Item
                        onRemove={() => TodoList.removeTodo(id)}
                        onCheck={() => TodoList.check(id)}
                        props={props}
                        value={value}
                        id={id}
                        key={id}
                    />
                );
            })}
        </Scrollbars>
    );

    const renderLoading = () => (
        <Typography>Loading</Typography>
    );

    const renderEmpty = () => (
        <Typography>No data available</Typography>
    );

    return (
        <div className={classes.container}>
            <List className={items ? classes.list : classes.emptyList}>
                {
                    items && !loading &&
                    renderList()
                }

                {
                    !items && loading &&
                    renderLoading()
                }

                {
                    !items && !loading &&
                    renderEmpty()
                }

            </List>
        </div>
    );
});

ListItems.propTypes = {
    loading: propTypes.bool,
    check: propTypes.func,
    removeTodo: propTypes.func,
    items: propTypes.object
};

export default withStyles(styles)(pure(ListItems));
