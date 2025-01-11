import { useParams } from 'react-router-dom';
import { useClassroomStore } from '@/store/classroom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = useClassroomStore((state) => 
    state.courses.find((c) => c.id === courseId)
  );

  if (!course) return <div>Course not found</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{course.name}</h1>
      <p className="text-gray-600 mb-6">Instructor: {course.instructor}</p>

      <Tabs defaultValue="announcements">
        <TabsList>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="announcements">
          <div className="space-y-4">
            {course.announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardContent className="pt-6">
                  <p>{announcement.content}</p>
                  <p className="text-sm text-gray-500 mt-2">{announcement.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments">
          <div className="space-y-4">
            {course.assignments.map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader>
                  <CardTitle>{assignment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{assignment.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      assignment.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseDetail;