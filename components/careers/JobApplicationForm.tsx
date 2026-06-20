"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Position {
  id: number;
  title: string;
  type: string;
  experience: string;
  location: string;
  qualification: string;
  salary: string;
  description: string;
  highlights?: string[];
  skills?: string[];
  benefits?: string[];
}

interface JobApplicationFormProps {
  position: Position | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function JobApplicationForm({
  position,
  isOpen,
  onClose,
}: JobApplicationFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"details" | "form">("details");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
    resume: null as File | null,
  });

  if (!isOpen || !position) return null;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("position", position.title);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("message", formData.message);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
        resume: null,
      });

      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setActiveTab("details");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-gradient-to-b from-neutral-900 to-black border border-primary/30 rounded-2xl shadow-2xl shadow-primary/20 max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-neutral-950 border-b border-primary/20 px-8 py-6 flex items-center justify-between shrink-0">
          <h2 className="text-2xl font-bold text-primary font-serif">
            {position.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-primary/20 px-8 flex gap-4 shrink-0">
          <button
            onClick={() => setActiveTab("details")}
            className={`py-4 px-2 font-semibold transition-colors border-b-2 ${
              activeTab === "details"
                ? "text-primary border-primary"
                : "text-gray-400 border-transparent hover:text-gray-300"
            }`}
          >
            Job Details
          </button>
          <button
            onClick={() => setActiveTab("form")}
            className={`py-4 px-2 font-semibold transition-colors border-b-2 ${
              activeTab === "form"
                ? "text-primary border-primary"
                : "text-gray-400 border-transparent hover:text-gray-300"
            }`}
          >
            Apply Now
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto flex-1">
          {/* Job Details Tab */}
          {activeTab === "details" && (
            <div className="p-8 space-y-6">
              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">
                    Experience
                  </p>
                  <p className="text-sm text-gray-300">{position.experience}</p>
                </div>
                <div className="bg-white/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">
                    Location
                  </p>
                  <p className="text-sm text-gray-300">{position.location}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
                  About
                </h3>
                <p className="text-sm text-gray-300 leading-7">
                  {position.description}
                </p>
              </div>

              {/* Responsibilities */}
              {position.highlights && position.highlights.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
                    Responsibilities
                  </h3>
                  <ul className="space-y-2.5">
                    {position.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {position.skills && position.skills.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
                    Skills Required
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg border border-primary/20 bg-primary/10 text-xs text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {position.benefits && position.benefits.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
                    What You&apos;ll Gain
                  </h3>
                  <ul className="space-y-2">
                    {position.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-gray-400"
                      >
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {position.id === 4 && (
  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
    <p className="text-sm font-semibold text-primary mb-2">
      Important Note
    </p>

    <p className="text-sm text-gray-300">
      This is a Field Sales role and requires regular client visits across Pune.
      Candidate must have a two-wheeler and willingness to travel within Pune.
    </p>
  </div>
)}

              {/* Qualification & Salary */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
                    Qualification
                  </p>
                  <p className="text-sm text-gray-300">
                    {position.qualification}
                  </p>
                </div>
                <div className="bg-white/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
                    Compensation
                  </p>
                  <p className="text-sm text-gray-300">{position.salary}</p>
                </div>
              </div>
            </div>
          )}

          {/* Application Form Tab */}
          {activeTab === "form" && (
            <div className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for applying. We&apos;ll review your application
                    and get back to you soon at {formData.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 bg-white/5 border border-r-0 border-primary/20 rounded-l-lg text-gray-400 text-sm">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 bg-white/5 border border-primary/20 rounded-r-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., 2 years"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Cover Letter / Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Upload Resume (PDF, DOC)
                    </label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 bg-white/5 border border-primary/20 rounded-lg text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 transition-colors cursor-pointer"
                    />
                    {formData.resume && (
                      <p className="text-sm text-primary mt-2">
                        ✓ {formData.resume.name}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100 shadow-lg shadow-primary/30"
                  >
                    {isLoading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
