import { Course } from '@/store/classroom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${course.color} text-white`}
      onClick={() => navigate(`/course/${course.id}`)}
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold">{course.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm opacity-90">{course.instructor}</p>
        <div className="mt-4">
          <p className="text-sm">{course.assignments.length} assignments</p>
        </div>
      </CardContent>
    </Card>
  );
};