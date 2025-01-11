import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useClassroomStore } from '@/store/classroom';

export const ProfileCard = () => {
  const profile = useClassroomStore((state) => state.profile);

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Student Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p><span className="font-semibold">Name:</span> {profile.name}</p>
          <p><span className="font-semibold">Roll Number:</span> {profile.rollNumber}</p>
          <p><span className="font-semibold">Section:</span> {profile.section}</p>
          <p><span className="font-semibold">University:</span> {profile.university}</p>
        </div>
      </CardContent>
    </Card>
  );
};