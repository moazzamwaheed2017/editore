import React from 'react';
import { Building2, GraduationCap, BookOpen } from 'lucide-react';

const PersonaSection: React.FC = () => {
  const personas = [
    {
      id: 'businesses',
      title: 'Businesses',
      description: 'Streamline content creation, ensure brand consistency, and maintain professional communication across all channels.',
      icon: <Building2 className="w-12 h-12" />,
      features: ['Brand Voice Consistency', 'Marketing Content', 'Professional Reports', 'Email Communication'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'educators',
      title: 'Educators',
      description: 'Create engaging lesson plans, provide detailed feedback, and ensure academic integrity in educational content.',
      icon: <GraduationCap className="w-12 h-12" />,
      features: ['Lesson Planning', 'Student Feedback', 'Academic Writing', 'Plagiarism Detection'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'students',
      title: 'Students',
      description: 'Improve writing skills, ensure proper citations, and create high-quality academic papers with confidence.',
      icon: <BookOpen className="w-12 h-12" />,
      features: ['Essay Writing', 'Citation Help', 'Grammar Check', 'Research Assistance'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perfect for Every Writer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a business professional, educator, or student, 
            Editore adapts to your unique writing needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${persona.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {persona.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {persona.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {persona.description}
                </p>

                <div className="space-y-2">
                  {persona.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500">
                      <div className={`w-2 h-2 bg-gradient-to-r ${persona.color} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className={`mt-6 px-6 py-3 bg-gradient-to-r ${persona.color} text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  Learn More
                </button>
              </div>

              {/* Glowing border on hover */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${persona.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;