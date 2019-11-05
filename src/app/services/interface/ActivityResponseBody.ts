export interface ActivityResponseBody {
    activityId: string;
    activityName: string;
    checkInId: string;
    createDate: string;
}

export interface SelectActivityResponseBody {
    activityID: number;
    activityName: string;
    freeFlag: boolean;
    type: string;
    subjectFlag: boolean;
}

export interface SelectActivitySubResponseBody {
    subActivityID: number;
    subActivityName: string;
    flagDefault: boolean;
}