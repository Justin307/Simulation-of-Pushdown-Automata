interface IStack<I> {
    pop(): void;
    push(item: I): void;
    top(): I | undefined;
    empty(): boolean;
    size(): number;
    clear(): void;
}
export declare class Stack<I> implements IStack<I> {
    private data;
    pop(): void;
    push(item: I): void;
    top(): I | undefined;
    empty(): boolean;
    size(): number;
    clear(): void;
}
export {};
