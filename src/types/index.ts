export interface CourseType {
    id: number;
    lessonCount: number;
    course: string;
    img: string;
    description: string;
}
export type Course = 'all' | "frontend" | "backend" | "ui/ux" | 'python'
