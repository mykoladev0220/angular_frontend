import { Character } from "./character.model";

export interface House {
    house : House,
    houses : House[],
    url: string,
    name: string,//
    region: string,//
    coatOfArms: string,//
    words: string,//
    titles: string[],//
    seats: string[],//
    currentLord: string, //
    heir: string,//
    overlord: string,//
    founded: string,//
    founder: string, //
    diedOut: string,
    ancestralWeapons: string[], //
    cadetBranches: string[], //
    swornMembers: string[] //
}
