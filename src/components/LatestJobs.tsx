import React from 'react';

interface LatestJob {
  title: string;
  description: string;
}

const latestJobs: LatestJob[] = [
  {
    title: "Female Beauty Advisor/Promoter",
    description: "We are looking for a Female Beauty Advisor/Promoter to promote Baby Care pr..."
  },
  {
    title: "Experienced Tailor",
    description: "Require a Master Cutter Tailor Experienced in Sewing all kinds of clothes ,..."
  },
  {
    title: "Lifeguard",
    description: "Rescuer who supervises the safety and rescue of swimmers, surfers, and othe..."
  },
  {
    title: "Security Guard",
    description: "Security guards protect the people, buildings, and land in a variety of loc..."
  },
  {
    title: "Administration Coordinator",
    description: "Coordinator helps keep our organization running smoothly by handling all ad..."
  },
  {
    title: "Architect Consultant",
    description: "need 5 year uae experienced architect my company"
  },
  {
    title: "Company Driver",
    description: "bjectives of this role •Deliver materials to designated locations in a time..."
  },
  {
    title: "Relationship Officer",
    description: "WALK IN INTERVIEW - Key Responsibilities: Sales Generation: Promote and sel..."
  },
  {
    title: "Accountant",
    description: "Experience with accounting software and data entry Excellent understanding..."
  },
  {
    title: "Sales Director",
    description: "Key Responsibilities: •Develop and implement sales strategies to drive gro..."
  }
];

const LatestJobs: React.FC = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Latest Jobs in Gulf Only
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestJobs.map((job, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow group cursor-pointer border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                {job.title}
              </h3>
              <p className="mt-2 text-gray-600 line-clamp-2">
                {job.description}
              </p>
              <div className="mt-4 flex justify-end">
                <button className="text-red-600 hover:text-red-700 font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
