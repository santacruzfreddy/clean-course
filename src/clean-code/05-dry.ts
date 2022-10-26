class Product {

    constructor(
        public name: string = '') {
    }

    toString() {
        if (this.name.length <= 0) throw Error('name is Empty')

        return `${this.name}`
    }

    productIsReady() {
        for (let key in this) {
            switch (typeof key) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is Empty`)
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero or minus zero`)
                    break;
            }
        }
    }
}

(() => {
    let bluePants = new Product();
    bluePants.productIsReady()
    console.log(bluePants.toString());
})();
