import { useState } from "react";
import { createPortal } from "react-dom";
import "./Certifications.css";

const certifications = [
  {
    id: 1,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    platform: "Coursera",
    issued: "Feb 2025",
    credentialId: "DK5YUM4AGMDN",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/DK5YUM4AGMDN",
    pdfFile: "/SupervisedML.pdf",
    imageFile: "/SupervisedML.jpg",
    description:
      "Supervised Machine Learning: Regression and Classification is the first course of the Machine Learning Specialization, authorized by DeepLearning.AI and Stanford University and offered through Coursera, instructed by Andrew Ng. The course covers core supervised learning concepts including linear regression, logistic regression, and gradient descent, along with regularization techniques to prevent overfitting. Learners implement these algorithms hands-on using Python, NumPy, and scikit-learn, building a strong practical foundation alongside the theory. It is one of the most well-regarded entry-level ML courses available, designed to bridge the gap between mathematical intuition and real-world application.",
    tags: ["Python", "Machine Learning", "Regression", "Classification"],
  },
  
  {
    id: 2,
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford University",
    platform: "Coursera",
    issued: "Feb 2025",
    credentialId: "UD3WANCK1MU0",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/UD3WANCK1MU0",
    pdfFile: "/AdvancedAlg.pdf",
    imageFile: "/AdvancedAlg.jpg",
    description:
      "Advanced Learning Algorithms is the second course of the Machine Learning Specialization, authorized by DeepLearning.AI and Stanford University and offered through Coursera, instructed by Andrew Ng. The course covers neural networks in depth — how to build and train them using TensorFlow, with a solid understanding of forward propagation, backpropagation, and activation functions. It also introduces tree-based ensemble methods including decision trees, random forests, and XGBoost, which are widely used for structured data problems. Beyond the algorithms themselves, the course teaches practical ML engineering skills such as diagnosing bias and variance, evaluating model performance, and building a systematic approach to improving ML systems.",
    tags: ["Python", "Neural Networks", "Decision Trees", "Deep Learning"],
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="certifications" id="certifications">
      <div className="cert-container">

        <div className="cert-header">
          <span className="cert-section-tag">Certifications</span>
          <h2 className="cert-heading">
            Credentials & <span className="cert-gradient">Licenses</span>
          </h2>
          <p className="cert-subheading">
            Verified certifications from globally recognized institutions.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cert-card"
              onClick={() => setSelected(cert)}
            >
              <div className="cert-card-bar" />

              <div className="cert-card-body">
                <div className="cert-platform-row">
                  <span className="cert-platform-badge">{cert.platform}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>

                <h3 className="cert-card-title">{cert.title}</h3>

                <div className="cert-meta">
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Issued</span>
                    <span className="cert-meta-value">{cert.issued}</span>
                  </div>
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Credential ID</span>
                    <span className="cert-meta-value cert-mono">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>

                <div className="cert-tags">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="cert-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="cert-card-footer">
                  <button className="cert-view-btn">
                    View Certificate →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected &&
        createPortal(
          <div
            className="cert-modal-overlay"
            onClick={() => setSelected(null)}
          >
            <div
              className="cert-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div>
                  <span className="cert-platform-badge">
                    {selected.platform}
                  </span>
                  <h3 className="cert-modal-title">
                    {selected.title}
                  </h3>
                  <p className="cert-modal-issuer">
                    {selected.issuer}
                  </p>
                </div>

                <button
                  className="cert-modal-close"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>
              </div>

              <div className="cert-pdf-wrapper">
                <img
                  src={selected.imageFile}
                  alt={selected.title}
                  className="cert-img"
                />
              </div>

              <div className="cert-modal-body">
                <p className="cert-modal-desc">
                  {selected.description}
                </p>

                <div className="cert-modal-meta">
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Issued</span>
                    <span className="cert-meta-value">
                      {selected.issued}
                    </span>
                  </div>
                  <div className="cert-meta-item">
                    <span className="cert-meta-label">Credential ID</span>
                    <span className="cert-meta-value cert-mono">
                      {selected.credentialId}
                    </span>
                  </div>
                </div>

                <div className="cert-modal-actions">
                  <a
                    href={selected.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-btn-primary"
                  >
                    Verify Certificate ↗
                  </a>

                  <a
                    href={selected.pdfFile}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-btn-secondary"
                  >
                    Open PDF ↗
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}