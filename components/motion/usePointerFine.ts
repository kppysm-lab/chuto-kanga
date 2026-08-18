"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const query = window.matchMedia("(hover: hover) and (pointer: fine)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getServerSnapshot() {
  return false;
}

/** True only for devices with a real mouse (desktop) — used to gate
 * cursor-tracked effects and custom cursors that should never run on touch. */
export function usePointerFine() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
