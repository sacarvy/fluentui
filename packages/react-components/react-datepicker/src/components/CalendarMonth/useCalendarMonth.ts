import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { CalendarMonthProps, CalendarMonthState } from './CalendarMonth.types';

/**
 * Create the state required to render CalendarMonth.
 *
 * The returned state can be modified with hooks such as useCalendarMonthStyles_unstable,
 * before being passed to renderCalendarMonth_unstable.
 *
 * @param props - props from this instance of CalendarMonth
 * @param ref - reference to root HTMLElement of CalendarMonth
 */
export const useCalendarMonth_unstable = (
  props: CalendarMonthProps,
  ref: React.Ref<HTMLElement>,
): CalendarMonthState => {
  return {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };
};
