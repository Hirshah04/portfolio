import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  // Load saved certificates on mount
  useEffect(() => {
    const saved = localStorage.getItem("certificates");
    if (saved) {
      setCertificates(JSON.parse(saved));
    }
  }, []);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newCerts = files.map((file) => ({
      id: Date.now() + Math.random(), // unique id
      name: file.name,
      file: URL.createObjectURL(file),
    }));

    const updated = [...certificates, ...newCerts];
    setCertificates(updated);
    localStorage.setItem("certificates", JSON.stringify(updated));
  };

  const handleRemove = (id) => {
    const updated = certificates.filter((cert) => cert.id !== id);
    setCertificates(updated);
    localStorage.setItem("certificates", JSON.stringify(updated));
  };

  return (
    <motion.section
      id="certificates"
      className="certificates-section"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <h3>Certificates</h3>

      <label className="upload-label">
        📤 Upload Certificates
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          multiple
          onChange={handleUpload}
        />
      </label>

      {certificates.length === 0 ? (
        <p>No certificates uploaded yet.</p>
      ) : (
        <ul className="cert-list">
          {certificates.map((cert) => (
            <li key={cert.id} className="cert-item">
              <span>{cert.name}</span>
              <div className="cert-actions">
                <a
                  href={cert.file}
                  download={cert.name}
                  className="download-btn"
                >
                  ⬇ Download
                </a>
                <button
                  onClick={() => handleRemove(cert.id)}
                  className="remove-btn"
                >
                  ❌ Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </motion.section>
  );
};

export default Certificates;
