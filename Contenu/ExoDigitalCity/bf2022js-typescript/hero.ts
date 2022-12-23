export enum HeroType {
    Humain = '10|10',
    Nain = '20|5'
}

export function getCharacteristics(type: HeroType) {
    return type.split('|').map(it => parseInt(it));
}