interface ClassicOption {
    color?: string;
}

interface DynamicOption {
    color?: string;
    radius?: number;
}

declare function classic(options: ClassicOption): string;
declare function dynamic(options: DynamicOption): string;

export { classic, dynamic }