import React from 'react';
import './CertificateTitlesList.css';

export const CertificateTitlesList = ({ certificates, onSelectCertificate }) => {
    return (
        <div className="certificate-titles-list">
            {certificates.length === 0 ? (
                <p>No certificates found in this category</p>
            ) : (
                <ul className="titles-list">
                    {certificates.map(cert => (
                        <li 
                            key={cert.id} 
                            onClick={() => onSelectCertificate(cert.id)}
                            className="certificate-title-item"
                        >
                            <h3 className="cert-title-txt">{cert.title}</h3>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};