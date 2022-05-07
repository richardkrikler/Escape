
export class Debouncer {

    constructor(delay) {
        this.delay = delay
    }

    debounce(func) {
        if(this.handle) clearTimeout(this.handle)
        this.handle = setTimeout(func, this.delay)
    }
}