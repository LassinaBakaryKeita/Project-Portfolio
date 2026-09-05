import { useState } from 'react';
import { Code, Layers, Wrench, Cpu, BarChart3, Workflow } from 'lucide-react';
import { skills } from '../../data/portfolio';

const categoryIconMap = {
  code: Code,
  layers: Layers,
  data: BarChart3,
  'bar-chart': BarChart3,
  workflow: Workflow,
  'git-branch': Workflow,
  tool: Wrench,
  cpu: Cpu,
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (skillId) => {
    setActiveSkill(prev => (prev === skillId ? null : skillId));
  };

  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-label">Technologies</span>
        <h1 className="section-title">Compétences</h1>
        <p className="section-description">
          Les langages, frameworks et outils que j'utilise au quotidien. Cliquez ou survolez une carte pour afficher sa description.
        </p>
      </div>

      {skills.map((category, ci) => {
        const Icon = categoryIconMap[category.icon] || Code;
        return (
          <div key={category.category} className="skills-category">
            <h2 className="skills-category-title">
              <Icon size={13} />
              {category.category}
            </h2>
            <div className="skills-grid">
              {category.items.map((skill, si) => {
                const skillId = `${ci}-${si}`;
                const isActive = activeSkill === skillId;
                return (
                  <div
                    key={skill.name}
                    className={`skill-card fade-in-up ${isActive ? 'active' : ''}`}
                    style={{ animationDelay: `${(ci * 0.1) + (si * 0.04)}s` }}
                    onClick={() => toggleSkill(skillId)}
                    title={skill.description}
                  >
                    <img
                      src={skill.image}
                      alt={`Logo ${skill.name}`}
                      className="skill-card-img"
                      onError={e => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="skill-card-name">{skill.name}</span>

                    {/* Tooltip on hover / click avec scrollbar */}
                    <div className="skill-card-tooltip">
                      <p>{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
