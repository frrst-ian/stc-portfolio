import React, { useState, useEffect } from "react";
import { CategoriesList } from "../ui/CategoriesList";
import { CertificateTitlesList } from "../ui/CertificateTitlesList";
import { CertificateCard } from "../ui/CertificateCard";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { certificates as certificatesData } from "../../data/certificates";

export const CertificatesContainer = () => {
  // State management
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => { 
    const fetchCertificates = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setCertificates(certificatesData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  // Get unique categories
  const categories = [...new Set(certificates.map((cert) => cert.category))];

  // Get certificates for selected category
  const categoryTitles = selectedCategory
    ? certificates.filter((cert) => cert.category === selectedCategory)
    : [];

  // Get the full certificate object when title is selected
  const certificateDetails = selectedCertificate
    ? certificates.find((cert) => cert.id === selectedCertificate)
    : null;

  // Handle step backs
  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedCertificate(null);
  };

  const handleBackToTitles = () => {
    setSelectedCertificate(null);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="certificates-container">
      <h1>My Certificates</h1>

      {!selectedCategory && (
        <CategoriesList
          categories={categories}
          onSelectCategory={setSelectedCategory}
        />
      )}

      {selectedCategory && !selectedCertificate && (
        <>
          <button onClick={handleBackToCategories} className="back-button">
            &larr; Back to Categories
          </button>
          <h2>{selectedCategory} Certificates</h2>
          <CertificateTitlesList
            certificates={categoryTitles}
            onSelectCertificate={(id) => setSelectedCertificate(id)}
          />
        </>
      )}

      {selectedCertificate && certificateDetails && (
        <>
          <button onClick={handleBackToTitles} className="back-button">
            &larr; Back to {selectedCategory} Certificates
          </button>
          <CertificateCard certificate={certificateDetails} />
        </>
      )}
    </main>
  );
};
