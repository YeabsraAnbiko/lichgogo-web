import Team from '@/components/Team';
import { teamMembers } from '@/lib/contents/teachers';

export default function Page() {
  return (
      <div>
          <div className="px-4 py-12 max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-12">Meet the Team</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {teamMembers.map((member, index) => (
                  <Team key={index} {...member} />
                ))}
              </div>
          </div>
        </div>
        
  );
}
