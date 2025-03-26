
import React from 'react';
import { Container, SectionTitle, Card } from './ui-components';

// Sample course data (this would be manually updated)
const courses = [
  {
    id: 1,
    title: "NEET Preparation Batches",
    description: "Comprehensive coverage of NCERT syllabus with 500+ hours of live classes, doubt clearing sessions, and test series.",
    features: ["Live Classes", "Recorded Lectures", "Daily Practice Problems", "Regular Tests"],
    category: "NEET",
  },
  {
    id: 2,
    title: "JEE Advanced Complete Course",
    description: "Master JEE concepts with our complete course covering Physics, Chemistry, and Mathematics with experienced faculty.",
    features: ["Topic-wise Tests", "Previous Year Papers", "Doubt Removal", "Performance Analytics"],
    category: "IIT JEE",
  },
  {
    id: 3,
    title: "Foundation Course (Class 9-10)",
    description: "Build a strong foundation for competitive exams with our specially designed courses for Class 9 and 10 students.",
    features: ["NCERT Based Learning", "Mental Ability Training", "Olympiad Preparation", "Interactive Learning"],
    category: "Foundation",
  },
  {
    id: 4,
    title: "SSC & Government Exams",
    description: "Prepare for SSC CGL, CHSL, and other government exams with our specialized faculty and comprehensive material.",
    features: ["Current Affairs", "Static GK", "Reasoning", "Quantitative Aptitude"],
    category: "SSC",
  },
];

const CourseSection: React.FC = () => {
  return (
    <section id="courses" className="py-16 bg-white">
      <Container>
        <div className="space-y-10">
          <div className="text-center">
            <SectionTitle>Available Batches</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Explore the various Physics Wallah batches and courses for which our coupon codes can be applied.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="flex flex-col h-full">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {course.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              Note: The above courses are representative of Physics Wallah's offerings. For the most up-to-date course information, please visit the official Physics Wallah website.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseSection;
