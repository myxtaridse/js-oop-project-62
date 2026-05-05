export default class StringValidator {
    constructor() {
        this.isRequired = false;
    }
    required() {
        this.isRequired = true;
        return this;
    }
    minLength(min) {
        this.minL = min;
        return this;
    }
    contains(str) {
        this.containsStr = str;
        return this;
    }
    isString(str) {
        return typeof str === "string" && str.length > 0;
    }
    isValid(str) {
        if (this.isRequired) {
            if (!this.isString(str)) return false;
        }
        if (!!this.minL && str.length <= this.minL || !!this.containsStr && !str.includes(this.containsStr)) {
            return false;
        }
        return true;
    }
}