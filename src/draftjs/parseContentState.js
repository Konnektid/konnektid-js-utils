import parseRaw from "./parseRaw";
import { ContentState, convertFromRaw } from "draft-js";

export default value => {
    const raw = parseRaw(value);
    if (typeof raw === "string") return ContentState.createFromText(raw);
    return convertFromRaw(raw);
};
