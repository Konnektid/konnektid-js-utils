export default email => {

    if (!email) return false;

    let splits = email.split("@");

    // if only one split return false
    if (splits.length < 2) return false;

    // if the first part is smaller than a character
    if (splits[0].length === 0) return false;
    if (splits[1].length === 0) return false;
    if (splits[splits.length - 1].length === 0) return false;

    // let's make sure all the parts in the domain are not empty
    splits = splits[1].split(".");
    return splits.every(split => split.length > 0);
};
