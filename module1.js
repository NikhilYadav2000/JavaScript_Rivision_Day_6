// const simple =require("./module2.mjs");
import * as a2 from "./module2.mjs"
a2.simple();
a2.simple2();
import {simple,simple2} from "./module2.mjs"
a2.simple();
a2.simple2();
// import simple from "./module2.mjs"
// simple();
/*
Simple is complex
Simple2 is complex
Simple is complex
Simple2 is complex
*/