import fs from 'node:fs/promises';
import {InterfaceDB} from "../Interface/index.js";
const path =process.cwd()
export class FsDatabase extends InterfaceDB {
    constructor() {
        super();
    }

    async Create(data) {
        try {
            await fs.writeFile(`${path}/Database/LocalDatabase/Repo/index.json`, JSON.stringify(data), 'utf8')
            console.log('data saved!!')
        } catch (err) {
            throw `Error: ${err}`;
        }
    }

   async Read() {
        try {
           return JSON.parse(await fs.readFile(`${path}/Database/LocalDatabase/Repo/index.json`, 'utf8'))
        }catch (err){
            throw `Error: ${err}`;
        }

    }

}

