import { ITechEvent } from '../models';
import RsortBy from 'ramda/es/sortBy';
import RgroupBy from 'ramda/es/groupBy';

export const sortEventsByDate = RsortBy((techEvents: ITechEvent[]) => techEvents[0].startDate);
export const groupByDay = RgroupBy((event: ITechEvent) => {
  const eventStartDate = event.startDate;
  return eventStartDate.substr(0, eventStartDate.indexOf('T'));
});

export const applyFilters = (searchStr: string, onlyFree: boolean) => {
  return (event: ITechEvent) => {
    return (
      event.name.toLowerCase().indexOf(searchStr) > -1 ||
      event.city.name.toLowerCase().indexOf(searchStr) > -1
    ) && !(onlyFree && !(event.isFree === true));
  };
};
