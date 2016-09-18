export default val => {
    let raw;
    if (typeof val === "string") {
        try { raw = JSON.parse(val); }
        catch (err) { raw = val; }
    }
    else raw = val;
    return raw;
};
