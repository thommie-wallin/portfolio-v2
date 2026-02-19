import Skills from '../components/Skills';

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
          className="text-3xl font-semibold mb-3"
        >
          About Me
        </h2>
        <p className="text-gray-600">
          I first discovered my path as a developer the moment I solved a problem I had been stuck on for days — then watched the solution run flawlessly, over and over again. That sense of accomplishment, of finally unlocking the right approach for a project, is what fuels my excitement for web development. As a committed learner, I also love the blend of creativity, logic, and technology that this field brings together. 
          <br /><br />
          Today, I'm a Full-Stack Developer with a two-year education that gave me a solid foundation in modern web development and experience working in collaborative, real-world environments.
          <br />
          Building multiple projects has taught me how to structure code thoughtfully, communicate effectively, and deliver end-to-end solutions. I enjoy the harmony between clean, intuitive user experiences and reliable backend logic.
          <br /><br />
          I'm always looking for a place where I can contribute to meaningful work, grow alongside talented people, and continue pushing myself creatively.
        </p>
        <Skills />
      </div>
    </section>
  );
}
