import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CalendarDayState, CalendarDaySlots } from './CalendarDay.types';

/**
 * Render the final JSX of CalendarDay
 */
export const renderCalendarDay_unstable = (state: CalendarDayState) => {
  const { slots, slotProps } = getSlots<CalendarDaySlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
