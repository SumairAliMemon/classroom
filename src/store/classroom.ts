import { create } from 'zustand';

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  courseId: string;
  status: 'pending' | 'completed';
}

export interface Announcement {
  id: string;
  content: string;
  date: string;
  courseId: string;
}

export interface Course {
  id: string;
  name: string;
  instructor: string;
  color: string;
  assignments: Assignment[];
  announcements: Announcement[];
}

interface StudentProfile {
  name: string;
  rollNumber: string;
  section: string;
  university: string;
}

interface ClassroomState {
  courses: Course[];
  profile: StudentProfile;
  addAssignment: (assignment: Assignment) => void;
  updateAssignmentStatus: (assignmentId: string, status: 'pending' | 'completed') => void;
  addAnnouncement: (announcement: Announcement) => void;
}

// Sample data
const sampleCourses: Course[] = [
  {
    id: '1',
    name: 'Introduction to Computer Science',
    instructor: 'Dr. Smith',
    color: 'bg-blue-500',
    assignments: [
      {
        id: 'a1',
        title: 'Basic Programming Concepts',
        description: 'Complete exercises 1-5 from Chapter 2',
        dueDate: '2024-02-25',
        courseId: '1',
        status: 'pending'
      }
    ],
    announcements: [
      {
        id: 'an1',
        content: 'Welcome to CS101! Please review the syllabus.',
        date: '2024-02-20',
        courseId: '1'
      }
    ]
  },
  {
    id: '2',
    name: 'Data Structures',
    instructor: 'Prof. Johnson',
    color: 'bg-green-500',
    assignments: [],
    announcements: []
  },
  {
    id: '3',
    name: 'Web Development',
    instructor: 'Ms. Davis',
    color: 'bg-purple-500',
    assignments: [],
    announcements: []
  },
  {
    id: '4',
    name: 'Database Management',
    instructor: 'Dr. Wilson',
    color: 'bg-yellow-500',
    assignments: [],
    announcements: []
  },
  {
    id: '5',
    name: 'Software Engineering',
    instructor: 'Prof. Brown',
    color: 'bg-red-500',
    assignments: [],
    announcements: []
  },
  {
    id: '6',
    name: 'Artificial Intelligence',
    instructor: 'Dr. Lee',
    color: 'bg-indigo-500',
    assignments: [],
    announcements: []
  }
];

export const useClassroomStore = create<ClassroomState>((set) => ({
  courses: sampleCourses,
  profile: {
    name: 'John Doe',
    rollNumber: '2024-CS-101',
    section: 'A',
    university: 'Tech University'
  },
  addAssignment: (assignment) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === assignment.courseId
          ? { ...course, assignments: [...course.assignments, assignment] }
          : course
      )
    })),
  updateAssignmentStatus: (assignmentId, status) =>
    set((state) => ({
      courses: state.courses.map((course) => ({
        ...course,
        assignments: course.assignments.map((assignment) =>
          assignment.id === assignmentId ? { ...assignment, status } : assignment
        )
      }))
    })),
  addAnnouncement: (announcement) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === announcement.courseId
          ? { ...course, announcements: [...course.announcements, announcement] }
          : course
      )
    }))
}));