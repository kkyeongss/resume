import resume from '../data/resume.json'

export default function ResumeContent() {
  return (
    <div className="resume">
      <header className="resume-header">
        <div className="header-main">
          <h1 className="resume-name">{resume.name}</h1>
          <p className="resume-role">{resume.role}</p>
          <div className="resume-summary">
            {resume.tagline.map((line, i) => <p key={i}>{line}</p>)}
          </div>
        </div>
        <div className="header-contact">
          <span>{resume.phone}</span>
          <span>{resume.email}</span>
          <a href={resume.github} target="_blank" rel="noreferrer">{resume.github}</a>
          <span>{resume.location}</span>
        </div>
      </header>

      <main className="resume-body">
        <section className="resume-section">
          <h2 className="section-title">기술 스택</h2>
          <div className="skills-grid">
            {Object.entries(resume.skills).map(([category, skills]) => (
              <div key={category} className="skill-group">
                <h4 className="skill-category">{category}</h4>
                <div className="skill-tags">
                  {skills.map((s, i) => <span key={i} className="tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">경력</h2>
          {resume.experience.map((exp, i) => (
            <div key={i} className="item">
              <div className="item-header">
                <div>
                  <h3 className="item-title">{exp.company}</h3>
                  <p className="item-sub">{exp.role}</p>
                </div>
                <span className="item-period">{exp.period}</span>
              </div>
              <ul className="item-list">
                {exp.description.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
              {exp.stack && (
                <div className="item-tags" style={{ marginTop: '12px' }}>
                  {exp.stack.map((s, j) => <span key={j} className="tag">{s}</span>)}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="section-title">사이드 프로젝트</h2>
          {resume.projects.map((proj, i) => (
            <div key={i} className="item">
              <div className="item-header">
                <div>
                  <h3 className="item-title">{proj.name}</h3>
                  <div className="item-tags">
                    {proj.stack.map((s, j) => <span key={j} className="tag">{s}</span>)}
                  </div>
                </div>
                <span className="item-period">{proj.period}</span>
              </div>
              <p className="item-desc">{proj.description}</p>
              <div className="item-links">
                <a className="item-link" href={proj.link} target="_blank" rel="noreferrer">GitHub</a>
                {proj.demo && <>
                  <span className="item-link-divider">|</span>
                  <a className="item-link item-link-demo" href={proj.demo} target="_blank" rel="noreferrer">Demo</a>
                </>}
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="section-title">자격증</h2>
          <div className="cert-grid">
            {resume.certificates.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">인턴·대외활동</h2>
          {resume.activities.map((act, i) => (
            <div key={i} className="item">
              <div className="item-header">
                <div>
                  <h3 className="item-title">{act.name}</h3>
                  <p className="item-sub">{act.role}</p>
                </div>
                <div className="item-right">
                  <span className="activity-type">{act.type}</span>
                  <span className="item-period">{act.period}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="section-title">학력</h2>
          {resume.education.map((edu, i) => (
            <div key={i} className="item">
              <div className="item-header">
                <div>
                  <h3 className="item-title">{edu.school}</h3>
                  <p className="item-sub">
                    {edu.major} · 복수전공 {edu.doubleMajor} · {edu.degree}
                  </p>
                  <p className="item-sub">학점 {edu.gpa}</p>
                </div>
                <span className="item-period">{edu.period}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="section-title">병역</h2>
          <div className="item">
            <div className="item-header">
              <h3 className="item-title">{resume.military.branch}</h3>
              <span className="item-period">{resume.military.period}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
