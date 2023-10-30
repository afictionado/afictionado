import { writable, type Writable } from "svelte/store";

export const leftBarWidthOnScreen: Writable<string> = writable();
export const rightBarWidthOnScreen: Writable<string> = writable();
