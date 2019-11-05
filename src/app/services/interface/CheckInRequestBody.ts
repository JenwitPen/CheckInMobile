export interface CheckInRequestBody {
    tripEaID: number;
    checkInName: string;
    checkInAddress: string;
    latitude: string;
    longitude: string;
    remark: string;
    checkinImage: string;
    checkInType: number;
    tripEaCustomerID: number;
    energyTypeID: number;
    energyPrice: number;
    regionID: number;
}