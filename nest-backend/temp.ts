function constructorDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  return class extends constructor {
    newProperty = 'new property value';

    constructor(...args: any[]) {
      super(...args);
      console.log(`Constructor decorator called for class ${constructor.name}`);
    }
  };
}

@constructorDecorator
class ExampleClass {
  property: string;
  value: string;
  greet: string;
  constructor(property: string, value: string, greet: string) {
    this.property = property;
    this.value = value;
    this.greet = greet;
  }
}

const exampleInstance = new ExampleClass(
  'original property value',
  'Jai Siya Raam',
  'Hi Aryan',
);

console.log(exampleInstance.property); // Output: original property value
console.log((exampleInstance as any).newProperty); // Output: new property value

function i<T>(): string {
  return 'A';
}
i<String>();
