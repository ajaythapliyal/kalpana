
export const colorSubject100 = '--color-subject-100';
export const colorSubject200 = '--color-subject-200';
export const colorSubject300 = '--color-subject-300';


export function getCustomProperty(property : string) : string{
    return getComputedStyle(document.body).getPropertyValue(property).trim()
}