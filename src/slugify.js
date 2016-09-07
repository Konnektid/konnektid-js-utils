// taken from https://gist.github.com/mathewbyrne/1280286
const slugify = str => {
    let slug = str;
    slug = slug.replace(/^\s+|\s+$/g, ""); // trim
    slug = slug.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to   = "aaaaeeeeiiiioooouuuunc------";

    slug = from.split("").reduce((res, c, i) =>
        res.replace(new RegExp(c, "g"), to.charAt(i))
    , slug);

    slug = slug.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-") // collapse dashes
        .replace(/^-+|-+$/g, ""); // remove lading and trailing slashes
    return slug;
};

export default slugify;
