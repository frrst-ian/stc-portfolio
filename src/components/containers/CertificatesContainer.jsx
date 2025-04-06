import React, { useState, useEffect } from "react";
import {LoadingSpinner} from "../ui/LoadingSpinner";
import { CertificatesList } from "../ui/CertificatesList";
import { CategoryFilter } from "../ui/CategoryFilter";
import { certificates as certificatesData } from "../../data/certificates";

export const CertificatesContainer = () => {
  // State Management
  const [certificates, setCertificates] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setCertificates(certificatesData);
      } catch (error) {
        console.error("Failed to fetch certificates: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  const categories = [
    "All",
    ...new Set(certificates.map((cert) => cert.category === activeCategory)),
  ];

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === activeCategory);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="certificates-container">
      <h1>My Certificates</h1>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <CertificatesList certificates={filteredCertificates} />
    </main>
  );
};
