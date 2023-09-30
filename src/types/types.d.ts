

export interface Location {
	name: string;
}

export interface Transportation {
	name: string;
	time: number;
	requirements: Requirement[];
}

export enum Spellbook {
	Standard, Lunar, Arceuus, Ancient
}

export interface Teleport extends Transportation {
	spellbook: Spellbook;
}

export interface Requirement {
	name: string;
}