
// Placeholder icons
const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "JavaScript", icon: "📜" },
  { name: "HTML5", icon: "🔤" },
  { name: "CSS3", icon: "🎨" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full py-16 px-6"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2
          id="about-heading"
          className="text-3xl font-bold text-gray-900 mb-2"
        >
          About Me
        </h2>
        <p className="text-gray-600 text-base">
          {/* Placeholder bio, 100–150 words */}
          I am a passionate junior web developer dedicated to building clean, modern, and accessible web experiences. With a strong foundation in React, TypeScript, and Tailwind CSS, I enjoy transforming ideas into responsive, user-friendly interfaces. My journey in tech is driven by curiosity and a commitment to continuous learning. I thrive in collaborative environments and value clear communication, attention to detail, and creative problem-solving. Beyond coding, I am interested in design, technology trends, and personal growth. My career goal is to join a forward-thinking team where I can contribute, learn, and grow as a developer while making a positive impact on users and businesses alike.
        </p>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
          <ul className="flex flex-wrap gap-4" aria-label="Skills list">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm focus:outline-2 focus:outline-offset-2"
                tabIndex={0}
                aria-label={skill.name}
              >
                <span aria-hidden="true" className="text-lg">{skill.icon}</span>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
