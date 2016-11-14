/**
 * Returns true if the value is a geo point representing coordinates.
 * A geopoint is an object with properties:
 * - lat: latitude of the coordinates that should be a number between -90 and 90
 * - lng: longitude of the coordinates that should be a number between -180 and 180
 *
 * @param   {*}          value the value to check
 * @returns {Boolean}          true if the value is a correct geo point object
 */
export default function isGeoPoint(value) {
    if (typeof value !== "object") return false;
    if (typeof value.lng !== "number" || value.lng < -180 || value.lng > 180) return false;
    if (typeof value.lat !== "number" || value.lat < -90 || value.lat > 90) return false;
    return true;
}
