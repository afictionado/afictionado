import { writable, type Writable } from "svelte/store";

export const leftBarWidthOnScreen: Writable<string> = writable("12rem");
export const rightBarWidthOnScreen: Writable<string> = writable("12rem");
