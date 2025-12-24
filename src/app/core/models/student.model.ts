export interface Student {
  id: number;
  name: string;
  email: string;
  gender: 'male' | 'female';
  course: string;
  skills: string[];
  agree: boolean;
}
