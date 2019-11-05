export interface ActivityRequestBody {
    checkInID: number;
    activityID: number;
    checkInActivityContact: string;
    checkInActivityRemark: string;
    checkInActivityPosition: string;
    checkInActivityEmail: string;
    checkInActivityTel: string;
    subjectID: number;
    subActivityId: number;
    mostLikely: number;
    cardCode: number;
}

export interface ActivitySubRequestBody {
    activityID: number;
    cardCode: number;
}