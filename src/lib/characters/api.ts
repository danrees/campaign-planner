import fs from 'fs';
import path from 'path';
import type { Build } from '.';
export function Load(name: string): Build {
	const contents = fs.readFileSync(`./data/characters/${name}.json`, 'utf-8');

	const character: Build = JSON.parse(contents);
	return character;
}

export function List(): string[] {
	const files = fs.readdirSync('./data/characters').map((d) => path.parse(d).name);
	return files;
}
