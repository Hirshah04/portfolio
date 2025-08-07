import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newCerts = files.map((file) => ({
      name: file.name,
      file: URL.createObjectURL(file), // create temp link for download/view
    }));
    setCertificates((prev) => [...prev, ...newCerts]);
  };

  return (
    <motion.section
      id="certificates"
      className="certificates-section"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <h3>Certificates</h3>

      <label className="upload-label">
        📤 Upload Certificates
        <input type="file" accept=".pdf,.jpg,.png" multiple onChange={handleUpload} />
      </label>

      {certificates.length === 0 ? (
        <p>No certificates uploaded yet.</p>
      ) : (
        <ul className="cert-list">
          {certificates.map((cert, index) => (
            <li key={index}>
              {cert.name}
              <a href={cert.file} download={cert.name} className="download-btn">⬇ Download</a>
            </li>
          ))}
        </ul>
      )}
    </motion.section>
  );
};

export default Certificates;
