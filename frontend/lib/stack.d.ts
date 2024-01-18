interface IStack<T> {
    pop(): void;
    push(item: T): void;
    top(): T | null;
    empty(): boolean;
    size(): number;
    clear(): void;
}
export declare class Stack<T> implements IStack<T> {
    private data;
    pop(): void;
    push(item: T): void;
    top(): T | null;
    empty(): boolean;
    size(): number;
    clear(): void;
    print(): void;
}
export {};
