import isGiven from "./isGiven";
import isString from "./isString";

/**
 * Checks if the value is a correct slug
 *
 * @param   {*}  value       the value to check
 * @returns {Boolean}        the result
 */
export default function isSlug(value) {
    if (!isGiven(value)) return false;
    if (!isString(value)) return false;
    return /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(value);
}
