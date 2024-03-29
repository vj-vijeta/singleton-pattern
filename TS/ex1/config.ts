class ConfigurationManager {
    private static instance: ConfigurationManager;
    private settings: { [key: string]: any };

    private constructor() {
        // Private constructor to prevent instantiation from outside
        this.settings = {};
    }

    static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }

    setSetting(key: string, value: any): void {
        this.settings[key] = value;
    }

    getSetting(key: string): any {
        return this.settings[key];
    }
}

// Usage
const configManager1 = ConfigurationManager.getInstance();
const configManager2 = ConfigurationManager.getInstance();

configManager1.setSetting("theme", "dark");
configManager2.setSetting("theme", "light");

console.log(configManager2.getSetting("theme")); // Output: dark, both instances share the same settings
