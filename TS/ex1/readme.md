# Singleton Pattern Implementation in TypeScript

## Overview

This repository contains TypeScript code demonstrating the implementation of the Singleton Pattern. It includes examples of singleton classes for configuration management and printer instances.

## Singleton Pattern

The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance. It is useful when exactly one object is needed to coordinate actions across the system.

## How to Implement

### Step 1: Define a Singleton Class

Create a class with a private constructor and a static method to retrieve the singleton instance.

```typescript
class SingletonClass {
    private static instance: SingletonClass;

    private constructor() {
        // Private constructor to prevent instantiation from outside
    }

    static getInstance(): SingletonClass {
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass();
        }
        return SingletonClass.instance;
    }
}
```

### Step 2: Access the Singleton Instance

Retrieve the singleton instance using the `getInstance` method.

```typescript
const instance1 = SingletonClass.getInstance();
const instance2 = SingletonClass.getInstance();

console.log(instance1 === instance2); // Output: true, both instances are the same
```

## Explanation

In the provided code:

- **`ConfigurationManager`**: Manages application settings as a singleton instance. Users can set and get settings, and all instances share the same settings object.
- **`Printer`**: Represents a printer as a singleton instance. Users can print documents using the `printDocument` method. All printer room instances share the same printer instance.

## Usage

1. **Configuration Manager**:

   ```typescript
   const configManager1 = ConfigurationManager.getInstance();
   const configManager2 = ConfigurationManager.getInstance();

   configManager1.setSetting("theme", "dark");
   configManager2.setSetting("theme", "light");

   console.log(configManager2.getSetting("theme")); // Output: dark
   ```

2. **Printer Room**:

   ```typescript
   const room1 = new PrinterRoom();
   const room2 = new PrinterRoom();

   room1.printDocument("Document from room 1"); // Output: Printing: Document from room 1
   room2.printDocument("Document from room 2"); // Output: Printing: Document from room 2

   console.log(room1 === room2); // Output: true
   ```

## Conclusion

The Singleton Pattern ensures that only one instance of a class exists throughout the application, providing a central point of access and facilitating resource sharing and coordination.

