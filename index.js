const {yellow} = require('colors')
const Number = (type) => $typeof(type) !== 'number' && error($typeof(type), "number")
const String = (type) => $typeof(type) !== 'string' && error($typeof(type), "string")
const Boolean = (type) => $typeof(type) !== 'boolean' && error($typeof(type), "boolean")
const Function = (type) => $typeof(type) !== 'function' && error($typeof(type), "function")
const Null = (type) => $typeof(type) !== "null" && Nullerror($typeof(type))
const $Array = (type, min, max) => {
    if ($typeof(type) !== "array") return error($typeof(type), "array")
    if ($typeof(min) !== "number" && $typeof(min) !== "undefined") return arrayError(min, "minimun")
    if ($typeof(max) !== "number" && $typeof(max) !== "undefined") return arrayError(min, "maximun")
}
const Object = (obj, interface) => {
    if ($typeof(obj) !== 'object') return error($typeof(obj), "object")
    if (interface) {
        for (const key in obj) {
            if ($typeof(obj[key]) !== interface[key]) return interfaceError($typeof(obj[key]), interface[key], key)
        }
    }
}

const interfaceError = (objKey, interface, key) => {
    throw new Error(`Interface: key ${key} declared ${interface} -  passed ${objKey}`.yellow)
}

const arrayError = (min, text) => {
    throw new Error(`Param ${text} array legnght must be number, passed ${$typeof(min)}`.yellow)
}

const error = (type, expected) => {
    throw new Error(`Expected: ${expected} - passed :  ${type}`.yellow)
}

const Nullerror = (type) => {
    throw new Error(`Expected: Null - pass:  ${type}`.yellow)
}

const $typeof = (type) => {
    if (typeof type === "number") return "number"
    if (typeof type === "string") return "string"
    if (typeof type === "function") return "function"
    if (typeof type === "boolean") return "boolean"
    if (typeof type === "object") {
        if (Array.isArray(type)) return "array"
        if (type === null) return "null"
        return "object"
    }
    if (typeof type === "undefined") return "undefined"
}

const $ = {
    Number,
    String,
    Object,
    Boolean,
    Function,
    Null,
    $Array,
    $typeof
}

module.exports = $