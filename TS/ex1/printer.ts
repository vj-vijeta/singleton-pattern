class Printer {
    private static instance: Printer;
    private constructor() {
        // Private constructor to prevent instantiation from outside
    }

    static getInstance(): Printer {
        if (!Printer.instance) {
            Printer.instance = new Printer();
        }
        return Printer.instance;
    }

    printDocument(document: string): void {
        console.log("Printing:", document);
    }
}


// Printer room scenario
class PrinterRoom {
    private printer: Printer;

    constructor() {
        this.printer = Printer.getInstance();
    }

    printDocument(document: string): void {
        this.printer.printDocument(document);
    }
}

// Usage0
const room1 = new PrinterRoom();
const room2 = new PrinterRoom();
const room3 = new PrinterRoom();
const room4 = new PrinterRoom();
const room5 = new PrinterRoom();

room1.printDocument("Document from room 1"); // Output: Printing: Document from room 1
room2.printDocument("Document from room 2"); // Output: Printing: Document from room 2
room3.printDocument("Document from room 3");
room4.printDocument("Document from room 4");
room5.printDocument("Document from room 5");
console.log(room1 === room2); // Output: true, both rooms use the same printer instance
