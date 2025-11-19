### 1. What are some differences between interfaces and types in TypeScript?

SL | Interface | Type |
|---|-----------|------|
1| Can be extended using the ```extend``` keyword like extending ```class``` | Can be extended using intersection (```&```)  |
2| It can be redefined with the same name | Cannot be redefined with the same name. It will produce ```Duplicate Identifier``` error |
3| Primitive type cannot be extended. Only object types can be extended.| Custom names can be assigned to primitive types |

### 2. Provide an example of using union and intersection types in TypeScript.    


```ts

type Vehicle = {
    serialNo: string | number;
}

type Car = Vehicle & {
    make: string;
    model: string;
    year: number;
}

const myCar: Car = {
    serialNo: '123456678',
    make: 'Toyota',
    model: 'XYZ',
    year: 2025
};

myCar.serialNo = 123456678;
```