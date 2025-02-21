import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CalendarMonthState, CalendarMonthSlots } from './CalendarMonth.types';

/**
 * Render the final JSX of CalendarMonth
 */
export const renderCalendarMonth_unstable = (state: CalendarMonthState) => {
  const { slots, slotProps } = getSlots<CalendarMonthSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
