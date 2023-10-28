import { writable, type Writable } from "svelte/store";

export const passwordVisiblity: Writable<"show" | "hide"> = writable();
