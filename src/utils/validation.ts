import { MAX_TITLE_LENGTH } from '../utils/constants';

export function isValidTaskTitle(title: string) {
    return ((title.trim().length > 0) && (title.length <= MAX_TITLE_LENGTH));
}

export function normalizeTitle(title: string) {
    let titleNormalized = title.trim();
    titleNormalized = titleNormalized.replace(/\s+/g, ' ');
    return titleNormalized;
}
