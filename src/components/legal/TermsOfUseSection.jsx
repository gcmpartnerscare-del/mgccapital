import { termsOfUse } from "../../data/legalData";

const TermsOfUseSection = () => {
  return (
    <div className="space-y-10">
      {termsOfUse.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
          <p className="text-gray-700 mb-4">{section.description}</p>
          {section.points && (
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermsOfUseSection;
