export enum SchedulePeriodDtoState {
    _1 = 1, 
    _2 = 2, 
    _3 = 3,
}

export class SchedulePeriodState {
    static Daily: number = SchedulePeriodDtoState._1;
    static Weekly: number = SchedulePeriodDtoState._2;
    static Monthly: number = SchedulePeriodDtoState._3;
}

