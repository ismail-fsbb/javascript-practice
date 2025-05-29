# JavaScript Data Types

JavaScript supports two main categories of data types:
1. Primitive Data Types
2. Reference (Non-Primitive) Data Types

## Primitive Data Types
### These store single, immutable values directly in memory

### String - Represents textual data enclosed in quotes.
- Use when: Working with text.
- Best choice for: Names, sentences, labels.
### Number - Represents both integers and floating-point numbers.
- Use when: Performing mathematical operations or storing numeric values.
- Best choice for: Age, price, score.
### Boolean - Represents logical values - either true or false.
- Use when: Needing true/false logic.
- Best choice for: Toggles, condition checks.
### Undefined - A variable declared but not assigned any value.
- Use when: A variable is declared but not yet assigned.
- Best choice for: Checking if a value is yet to be set.
### Null - Represents an intentional absence of value.
- Use when: Intentionally clearing a variable.
- Best choice for: Resetting a value manually.
### BigInt - Used for representing very large integers beyond the safe limit of Number.
- Use when: Dealing with numbers larger than Number.MAX_SAFE_INTEGER.
- Best choice for: large datasets, financial systems
### Symbol - Represents a unique and immutable identifier, often used as object keys
- Use when: Creating unique keys or identifiers.
- Best choice for: Hiding object properties or using meta features.


## Reference (Non-Primitive) Data Types
### These store complex structures and are referenced in memory.

### Object - A collection of key-value pairs used to store structured data.
- Use when: Storing structured data as key-value pairs.
- Best choice for: User info, settings, configs.
### Array - An ordered list of values indexed by numbers.
- Use when: Working with lists or collections.
- Best choice for: Products, tasks, multiple values.
### Function - A reusable block of code that can be called to perform tasks.
- Use when: Repeating a block of code or logic.
- Best choice for: Actions, calculations, events.