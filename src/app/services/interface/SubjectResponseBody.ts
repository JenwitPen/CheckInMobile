export interface SelectSubjectResponseBody {
    subjectID: number;
    subjectName: string;
    mostLikely: number;
    forecast: number;
    actual: number;
}