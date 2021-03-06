import React from 'react';
import Navbar from '../components/Navbar';
import JobGrid from '../components/JobGrid';
import Footer from '../components/Footer';

const Jobs = () => {
  return (
    <div className="jobForm">
      <Navbar />
      <JobGrid />
      <Footer />
    </div>
  );
};

export default Jobs;
