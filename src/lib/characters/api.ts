import fs from 'fs';
import type { Build } from '.';
export function Load(name: string): Build {
	const contents = fs.readFileSync(`./data/characters/${name}.json`, 'utf-8');

	const character: Build = JSON.parse(contents);
	return character;
}
