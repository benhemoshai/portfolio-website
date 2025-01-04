import ResumeSection from './ResumeSection';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import { resumeData } from '../../data/resume';

export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Resume</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience Section */}
            <div>
              <ResumeSection title="Experience">
                {resumeData.experience.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    role={exp.role}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    achievements={exp.achievements}
                  />
                ))}
              </ResumeSection>
            </div>

            {/* Right Column: Education */}
            <div className="space-y-8">
              <ResumeSection title="Education">
                {resumeData.education.map((edu, index) => (
                  <EducationItem
                    key={index}
                    degree={edu.degree}
                    school={edu.school}
                    period={edu.period}
                    gpa={edu.gpa}
                    courses={edu.courses}
                    extras={edu.extras}
                  />
                ))}
              </ResumeSection>

              <ResumeSection title="External Studies">
                <div className="space-y-2">
                  {resumeData.externals.map((course, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">{course.name}</span>
                        <div className="flex gap-2">
                            {course.topics.map((topic, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                            >
                                {topic}
                            </span>
                            ))}
                    </div>
               
                </div>
                 ))}
                </div>
              </ResumeSection>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="./Shai-Ben-Hemo-CV.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            download={true}
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}