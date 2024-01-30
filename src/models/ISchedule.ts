export interface IDay {
  start: string;
  end: string;
  day_off: boolean;
}

export interface ISchedule {
  monday: IDay;
  tuesday: IDay;
  wednesday: IDay;
  thursday: IDay;
  friday: IDay;
  saturday: IDay;
  sunday: IDay;
  short_text: string;
}
