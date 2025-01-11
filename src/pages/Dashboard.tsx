import { useClassroomStore } from '@/store/classroom';
import { CourseCard } from '@/components/CourseCard';
import { ProfileCard } from '@/components/ProfileCard';

const Dashboard = () => {
  const courses = useClassroomStore((state) => state.courses);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <ProfileCard />
        </div>
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-6">My Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;