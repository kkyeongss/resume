import resume from '../data/resume.json'

export default function ResumeContent() {
  return (
    <div className="resume">
      <header className="resume-header">
        <img className="resume-photo" src={`${import.meta.env.BASE_URL}photo.jpg`} alt={resume.name} />
        <div className="resume-header-text">
          <h1 className="resume-name">{resume.name}</h1>
          <p className="resume-role">{resume.role}</p>
          <div className="resume-contact">
            <a href={`mailto:${resume.email}`}>{resume.email}</a>
            <span className="dot">·</span>
            <a href={resume.github} target="_blank" rel="noreferrer">GitHub</a>
            <span className="dot">·</span>
            <span>{resume.location}</span>
          </div>
        </div>
      </header>

      <section className="resume-section">
        <h2 className="section-title">경력</h2>
        {resume.experience.map((exp, i) => (
          <div key={i} className="item">
            <div className="item-header">
              <div>
                <h3 className="item-title">{exp.company}</h3>
                <p className="item-sub">
                  {exp.role}{exp.workplace && ` · ${exp.workplace} 근무`}
                </p>
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
            {exp.details && (
              <div className="item-details">
                {exp.details.map((det, j) => (
                  <div key={j} className="detail-item">
                    <div className="detail-header">
                      <h5 className="detail-title">{det.title}</h5>
                      <span className="detail-period">{det.period}</span>
                    </div>
                    <ul className="detail-list">
                      {det.description.map((d, k) => <li key={k}>{d}</li>)}
                    </ul>
                    {det.stack && (
                      <div className="item-tags" style={{ marginTop: '8px' }}>
                        {det.stack.map((s, k) => <span key={k} className="tag">{s}</span>)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2 className="section-title">기타 경험</h2>

        <div className="other-group">
          <h3 className="other-title">사이드 프로젝트</h3>
          {resume.otherExperience.projects.map((proj, i) => (
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
                {!proj.demo && proj.demoStatus && <>
                  <span className="item-link-divider">|</span>
                  <span className="item-link-status">{proj.demoStatus}</span>
                </>}
              </div>
            </div>
          ))}
        </div>

        <div className="other-group">
          <h3 className="other-title">자격증</h3>
          <div className="cert-grid">
            {resume.otherExperience.certificates.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-meta">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-title">기술 스택</h2>
        <div className="skill-groups">
          {Object.entries(resume.skills).map(([category, skills]) => (
            <div key={category} className="skill-group">
              <h4 className="skill-cat">{category}</h4>
              <div className="skill-tags">
                {skills.map((s, i) => <span key={i} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-title">학력</h2>
        {resume.education.map((edu, i) => (
          <div key={i} className="edu-item">
            <div className="edu-school">{edu.school}</div>
            <div className="edu-meta">{edu.major}</div>
            <div className="edu-period">{edu.period}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
