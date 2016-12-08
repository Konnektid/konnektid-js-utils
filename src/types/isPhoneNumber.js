import isGiven from "./isGiven";
import isString from "./isString";

/**
 * Checks if the value is a correct phone number
 *
 * @param   {*}  value       the value to check
 * @returns {Boolean}         true if the value is a phone number
 */
export default function isPhoneNumber(value) {
    if (!isGiven(value)) return false;
    if (!isString(value)) return false;
    return /\+?(\d){8,}/.test(value);
}
