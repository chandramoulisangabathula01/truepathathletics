"use client";

import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function ConsultationForm() {
  const [state, handleSubmit] = useForm("xwvaqkdd");

  if (state.succeeded) {
    return (
      <div className="glass-card p-12 text-center space-y-6">
        <div className="w-20 h-20 bg-accent-lime/10 rounded-full flex items-center justify-center mx-auto text-accent-lime">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-serif">Talk Soon.</h3>
        <p className="text-text-soft">
          We&apos;ve received your request and will reach out within 24 hours to schedule your free 30-minute consultation.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="text-accent-lime font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
      {/* Visual background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-lime/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent-lime/10 transition-colors duration-700" />
      
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-text-soft">Your Name</label>
            <input 
              id="name"
              name="name"
              required
              type="text" 
              placeholder="Jane Smith"
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 focus:border-accent-lime focus:outline-none transition-colors text-text-main"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-sm text-red-600"
            />
          </div>
          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-text-soft">Email</label>
            <input 
              id="email"
              name="email"
              required
              type="email" 
              placeholder="jane@example.com"
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 focus:border-accent-lime focus:outline-none transition-colors text-text-main"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-sm text-red-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Athlete's Name */}
          <div className="space-y-2">
            <label htmlFor="athlete-name" className="text-xs font-bold uppercase tracking-widest text-text-soft">Athlete&apos;s Name</label>
            <input 
              id="athlete-name"
              name="athlete_name"
              required
              type="text" 
              placeholder="Alex Smith"
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 focus:border-accent-lime focus:outline-none transition-colors text-text-main"
            />
          </div>
          {/* Role */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-text-soft">I am a...</label>
            <div className="flex gap-4 h-[60px]">
              {["Parent", "Athlete"].map((role) => (
                <label key={role} className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    className="sr-only peer"
                    defaultChecked={role === "Parent"}
                  />
                  <div className="h-full flex items-center justify-center border border-black/10 dark:border-white/10 rounded-xl peer-checked:border-accent-lime peer-checked:bg-accent-lime/5 transition-all text-text-soft peer-checked:text-text-main font-medium">
                    {role}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Situation */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-text-soft">Tell us about your situation</label>
          <textarea 
            id="message"
            name="message"
            required
            placeholder="Where is your athlete right now? What are you trying to figure out?"
            rows={4}
            className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 focus:border-accent-lime focus:outline-none transition-colors text-text-main resize-none"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-sm text-red-600"
          />
        </div>

        <ValidationError
          errors={state.errors}
          className="text-sm text-red-600"
        />

        {/* Submit */}
        <button 
          type="submit"
          disabled={state.submitting}
          className="btn-premium btn-primary w-full py-5 text-lg group/btn"
        >
          {state.submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Get Athlete Roadmap
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
