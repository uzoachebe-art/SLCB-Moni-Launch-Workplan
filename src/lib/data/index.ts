import { Activity } from "../types";
import { ACTIVITIES } from "./activities";

export const ALL_ACTIVITIES: Activity[] = ACTIVITIES;

export function activityById(id: string): Activity | undefined {
  return ALL_ACTIVITIES.find((a) => a.id === id);
}

export { RISKS, ASSUMPTIONS } from "./risks";
