import { skills } from '@/data/skills';
import './style.css';

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-tag">Tech Stack</div>
      <div className="section-title">Skills &amp; Expertise</div>
      <p className="section-sub">
        Tools and technologies I use to deliver high-quality results.
      </p>

      <div className="skills-categories">
        {skills.map((group) => (
          <div key={group.id} className="skill-category">
            <h4 className="category-label">{group.category}</h4>
            <div className="skill-tags">
              {group.items.map((skill) => (
                <div key={skill.name} className="skill-tag">
                  <span className="skill-emoji">{skill.emoji}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};