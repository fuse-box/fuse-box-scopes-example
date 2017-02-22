// typescript complains but no can do
import { LibB } from "./b";

export class LibA extends LibB {
    constructor(parameters) {
        console.log("constructor LibA");
        super();
    }
}