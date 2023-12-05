export default function Resume() {
  const resumeFilePath = 'src/assets/files/Resume-David-Wright.pdf';
  return (
    <div>
      <p>
        Download my resume <a 
          href={resumeFilePath}
          className="link"
          rel="noopener noreferrer"
          target="_blank"
        >here</a>
      </p>
      <h3 className="mt-5">Proficiencies</h3>
      <ul className="multi-column-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>GitHub/Git</li>
        <li>Bootstrap</li>
        <li>The DOM</li>
        <li>APIs</li>
        <li>JQuery</li>
        <li>JSON</li>
        <li>AJAX</li>
        <li>ES6</li>
        <li>OOP</li>
        <li>MySQL</li>
        <li>MVC paradigm</li>
        <li>Sequelize</li>
        <li>Testing</li>
        <li>Agile development</li>
        <li>PWAs</li>
        <li>NoSQL</li>
        <li>MERN Stack</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
  );
}
