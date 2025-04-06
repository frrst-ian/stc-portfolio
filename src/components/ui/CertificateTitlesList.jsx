import React from 'react';

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
                            <h3>{cert.title}</h3>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};