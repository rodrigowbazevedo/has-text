import { remove } from 'remove-accents';

export function hasText(text: string, search: string): boolean {
    const textLower = text.toLowerCase();
    const searchLower = search.toLowerCase();

    return textLower.indexOf(searchLower) !== -1 || remove(textLower).indexOf(remove(searchLower)) !== -1;
}
