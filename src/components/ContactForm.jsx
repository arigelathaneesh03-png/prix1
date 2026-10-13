import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Info } from 'lucide-react';
import Button from './Button';

export default function ContactForm({ selectedPlanId, selectedProgramName, onResetPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: selectedPlanId || 'performance',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Update selected plan if prop changes from parent (e.g. clicking "CHOOSE PERFORMANCE")
  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, plan: selectedPlanId }));
    }
  }, [selectedPlanId]);

  // If program was passed, prefill message note
  useEffect(() => {
    if (selectedProgramName) {
      setFormData((prev) => ({
        ...prev,
        message: `Hello, I am interested in joining Iron Pulse Fitness and exploring the ${selectedProgramName} blueprint.`
      }));
    }
  }, [selectedProgramName]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (!/^[0-9+()-\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number (at least 7 digits).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share your primary training goal or question.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic frontend processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSubmittedData({ ...formData });
    }, 900);
  };

  const handleReset = () => {
    setSubmitSuccess(false);
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      plan: 'performance',
      message: ''
    });
    setErrors({});
    if (onResetPlan) onResetPlan();
  };

  if (submitSuccess && submittedData) {
    return (
      <div className="bg-[#181818] border border-[#E63946]/50 p-8 sm:p-10 shadow-2xl animate-in fade-in duration-300">
        <div className="flex items-center gap-3 text-[#E63946] mb-4">
          <CheckCircle2 className="w-8 h-8 shrink-0" />
          <h3 className="text-2xl font-display font-black uppercase text-white tracking-wide">
            Inquiry Verified (Demo Mode)
          </h3>
        </div>

        <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-sans">
          Thank you, <strong className="text-white">{submittedData.name}</strong>! Your inquiry for the{' '}
          <strong className="text-[#E63946] uppercase">{submittedData.plan}</strong> tier has been processed locally by this demonstration client.
        </p>

        {/* Technical Notice Banner required by prompt */}
        <div className="p-4 bg-black/60 border border-white/10 rounded mb-6 text-xs text-neutral-400 space-y-2">
          <div className="flex items-center gap-2 text-white font-medium">
            <Info className="w-4 h-4 text-[#E63946]" />
            <span>Developer Note on Backend Integration</span>
          </div>
          <p>
            This website currently runs without an attached backend database or mail server to protect privacy.
            In production, wire the <code className="text-[#E63946] bg-neutral-900 px-1 py-0.5 rounded">onSubmit</code> handler to an API route (e.g. Next.js API, Express server, AWS Lambda) or a serverless form service such as Formspree, Resend, or Supabase.
          </p>
        </div>

        <div className="bg-[#121212] p-4 border border-white/5 space-y-1 text-xs text-neutral-400 mb-6 font-mono">
          <p><span className="text-neutral-500">Contact:</span> {submittedData.phone} | {submittedData.email}</p>
          <p><span className="text-neutral-500">Target Plan:</span> {submittedData.plan.toUpperCase()}</p>
          <p><span className="text-neutral-500">Inquiry Note:</span> "{submittedData.message}"</p>
        </div>

        <Button
          variant="secondary"
          size="md"
          onClick={handleReset}
          className="w-full justify-center"
        >
          SUBMIT ANOTHER INQUIRY
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#181818] border border-white/10 p-6 sm:p-10 shadow-2xl relative"
    >
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white tracking-wide">
            Membership & Coaching Inquiry
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Fill in your details below to schedule an orientation.
          </p>
        </div>
        <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-[#E63946] bg-[#E63946]/10 px-2.5 py-1 border border-[#E63946]/30">
          Client Demo
        </span>
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-display uppercase tracking-widest font-bold text-neutral-300 mb-2">
            Full Name <span className="text-[#E63946]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Sharma"
            disabled={isSubmitting}
            className={`w-full bg-[#121212] border px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] ${
              errors.name ? 'border-[#E63946]' : 'border-white/10 focus:border-white/40'
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-[#E63946] flex items-center gap-1 font-sans">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email & Phone 2-Col Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-display uppercase tracking-widest font-bold text-neutral-300 mb-2">
              Email Address <span className="text-[#E63946]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@domain.com"
              disabled={isSubmitting}
              className={`w-full bg-[#121212] border px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] ${
                errors.email ? 'border-[#E63946]' : 'border-white/10 focus:border-white/40'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-[#E63946] flex items-center gap-1 font-sans">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-display uppercase tracking-widest font-bold text-neutral-300 mb-2">
              Phone Number <span className="text-[#E63946]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 00000"
              disabled={isSubmitting}
              className={`w-full bg-[#121212] border px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] ${
                errors.phone ? 'border-[#E63946]' : 'border-white/10 focus:border-white/40'
              }`}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-[#E63946] flex items-center gap-1 font-sans">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Interested Membership Tier */}
        <div>
          <label htmlFor="plan" className="block text-xs font-display uppercase tracking-widest font-bold text-neutral-300 mb-2">
            Interested Membership Plan
          </label>
          <select
            id="plan"
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] focus:border-white/40 cursor-pointer"
          >
            <option value="starter">Starter Plan (₹999/month - General Floor Access)</option>
            <option value="performance">Performance Plan (₹1,799/month - Group & Advanced Access)</option>
            <option value="elite">Elite Plan (₹2,999/month - 1-on-1 Coaching & Recovery)</option>
            <option value="general-inquiry">General Facility Tour / In-Person Consultation</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-display uppercase tracking-widest font-bold text-neutral-300 mb-2">
            Your Fitness Goals / Questions <span className="text-[#E63946]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your fitness history, primary goals (hypertrophy, fat loss, athletic conditioning), and preferred training time."
            disabled={isSubmitting}
            className={`w-full bg-[#121212] border px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] ${
              errors.message ? 'border-[#E63946]' : 'border-white/10 focus:border-white/40'
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-[#E63946] flex items-center gap-1 font-sans">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            icon={isSubmitting ? Loader2 : Send}
            className="w-full justify-center"
          >
            {isSubmitting ? 'PROCESSING INQUIRY...' : 'REQUEST GYM ORIENTATION'}
          </Button>
        </div>

        <p className="text-center text-[11px] text-neutral-500">
          * Demonstration Form. Submissions are validated and stored locally without external telemetry.
        </p>
      </div>
    </form>
  );
}
