declare const storage: {
    get<T>(key: string, defaultValue: T): any;
    set<T>(key: string, value: T): void;
    remove(key: string): void;
    isAvailable(): boolean;
};
export default storage;
