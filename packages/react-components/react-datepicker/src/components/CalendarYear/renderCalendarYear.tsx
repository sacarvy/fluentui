import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CalendarYearState, CalendarYearSlots } from './CalendarYear.types';

/**
 * Render the final JSX of CalendarYear
 */
export const renderCalendarYear_unstable = (state: CalendarYearState) => {
  const { slots, slotProps } = getSlots<CalendarYearSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
