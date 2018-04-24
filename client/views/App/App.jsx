import React from "react"; // eslint-disable-line no-unused-vars
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import propTypes from "prop-types";
import "../global.css";

const theme = createMuiTheme({
    spacing: {
        form: "24px"
    },
    typography: {
        fontFamily: "Proxima",
        headline: {
            color: "#666afb",
            fontWeight: "600"
        },
        subheading: {
            fontSize: "1.1rem",
            color: "#a8a9ca"
        }
    },
    border: {
        radius: "8px",
        width: "1px solid",
        color: "#fdfdff"
    },
    palette: {
        action: {
            hover: "rgb(237, 237, 243)"
        },
        text: {
            primary: "#82829c",
            secondary: "#a8a9ca"
        },
        grey: {
            50: "#fdfdff",
            100: "#d1d2df",
            200: "#ccccde",
            300: "#a8a9ca",
            400: "#82829c"
        }
    }
});


const App = props => (
    <MuiThemeProvider theme={theme}>
        {props.children}
    </MuiThemeProvider>
);

App.propTypes = {
    theme: propTypes.object,
    children: propTypes.object
};

export default App;
