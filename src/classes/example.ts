export class Math {
    @first()
    @log
    add(a: number, b: number) {
        return a + b;
    }
    @log
    push(arr:number[],num:number){
        arr.push(num)
    }
}

function log(target: any, name: string, descriptor: PropertyDescriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function () {
        console.log(`Calling "${name}" with`, arguments);
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}
function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    };
}

