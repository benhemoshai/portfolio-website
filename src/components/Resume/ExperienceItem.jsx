export default function ExperienceItem({ role, company, period, description, achievements }) {
    return (
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{role}</h4>
            <p className="text-blue-600 font-medium">{company}</p>
          </div>
          <span className="text-sm text-gray-500 mt-1 sm:mt-0">{period}</span>
        </div>
        <p className="text-gray-600 mb-2">{description}</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    );
  }