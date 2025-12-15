
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
        <p className="text-gray-600 text-base font-extralight">
          I first discovered my path as a developer the moment I solved a problem I had been stuck on for days — then watched the solution run flawlessly, over and over again. That sense of accomplishment, of finally unlocking the right approach for a project, is what fuels my excitement for web development. As a committed learner, I also love the blend of creativity, logic, and technology that this field brings together. 
          <br /><br />
          Today, I'm a Full-Stack Developer with a two-year education that gave me a solid foundation in modern web development and experience working in collaborative, real-world environments.
          <br />
          Building multiple projects has taught me how to structure code thoughtfully, communicate effectively, and deliver end-to-end solutions. I enjoy the harmony between clean, intuitive user experiences and reliable backend logic.
          <br /><br />
          I'm always looking for a place where I can contribute to meaningful work, grow alongside talented people, and continue pushing myself creatively.
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
