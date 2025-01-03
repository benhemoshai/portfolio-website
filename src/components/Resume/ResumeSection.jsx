export default function ResumeSection({ title, children }) {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          {title}
        </h3>
        {children}
      </div>
    );
  }