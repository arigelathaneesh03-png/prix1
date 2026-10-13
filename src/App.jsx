import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProgramModal from './components/ProgramModal';

import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import About from './sections/About';
import Programs from './sections/Programs';
import TrainingExperience from './sections/TrainingExperience';
import Trainers from './sections/Trainers';
import Memberships from './sections/Memberships';
import Philosophy from './sections/Philosophy';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState('performance');
  const [selectedProgramName, setSelectedProgramName] = useState('');
  const [activeProgramModal, setActiveProgramModal] = useState(null);

  // Smooth scroll to an element by ID
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // When a membership plan CTA is clicked
  const handleSelectPlan = (plan) => {
    setSelectedPlanId(plan.id);
    scrollToSection('contact');
  };

  // When a program's explore button is clicked
  const handleExploreProgram = (program) => {
    setActiveProgramModal(program);
  };

  // When "START THIS PROGRAM" is clicked inside the modal
  const handleSelectProgramInquiry = (program) => {
    setSelectedProgramName(program.title);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] flex flex-col font-sans selection:bg-[#E63946] selection:text-white">
      {/* Navigation */}
      <Navbar
        onJoinClick={() => scrollToSection('membership')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onStartJourney={() => scrollToSection('membership')}
          onExplorePrograms={() => scrollToSection('programs')}
        />

        <Highlights />

        <About
          onDiscoverApproach={() => scrollToSection('programs')}
        />

        <Programs
          onExploreProgram={handleExploreProgram}
        />

        <TrainingExperience
          onFindProgram={() => scrollToSection('programs')}
        />

        <Trainers />

        <Memberships
          onSelectPlan={handleSelectPlan}
        />

        <Philosophy
          onExplorePlans={() => scrollToSection('membership')}
        />

        <Testimonials />

        <FAQ />

        <Contact
          selectedPlanId={selectedPlanId}
          selectedProgramName={selectedProgramName}
          onResetPlan={() => {
            setSelectedPlanId('performance');
            setSelectedProgramName('');
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onProgramClick={handleExploreProgram}
      />

      {/* Interactive Program Blueprint Modal */}
      {activeProgramModal && (
        <ProgramModal
          program={activeProgramModal}
          onClose={() => setActiveProgramModal(null)}
          onSelectProgramInquiry={handleSelectProgramInquiry}
        />
      )}
    </div>
  );
}
