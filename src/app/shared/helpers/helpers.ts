import { TechEvent } from '../models';
import RsortBy from 'ramda/es/sortBy';
import RgroupBy from 'ramda/es/groupBy';

export const sortEventsByDate = RsortBy((techEvents: TechEvent[]) => techEvents[0].startDate);
export const groupByDay = RgroupBy((event: TechEvent) => {
  const eventStartDate = event.startDate;
  return eventStartDate.substr(0, eventStartDate.indexOf('T'));
});

export const applyFilters = (searchStr: string, onlyFree: boolean) => {
  return (event: TechEvent) => {
    return (
      event.name.toLowerCase().indexOf(searchStr) > -1 ||
      event.city.name.toLowerCase().indexOf(searchStr) > -1
    ) && !(onlyFree && !(event.isFree === true));
  };
};
