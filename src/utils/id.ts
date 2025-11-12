export function getRandomID(): string {
    return (Math.random().toString(36).slice(2, 38));
}
