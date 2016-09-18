import parseContentState from "./parseContentState";

export default value =>
    parseContentState(value).getPlainText().trim() === "";
