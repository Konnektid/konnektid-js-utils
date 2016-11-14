/**
 * Returns true if the given value can be used as price.
 * A price is a positive number.
 * If a string that represents a number is given to this function, false is returned.
 *
 * @param   {*}      value the value to check
 * @returns {Boolean}      true if the value is a price
 */
export default function isPrice(value) {
    if (typeof value !== "number") return false;
    return value >= 0;
}
