import React from "react";
import { CertificateCard } from "./CertificateCard";

export const CertificatesList = ({ certificates }) => {
  return (
    <div className="certificates-grid">
      {certificates.length === 0 ? (
        <p>No certificates found</p>
      ) : (
        certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))
      )}
    </div>
  );
};
