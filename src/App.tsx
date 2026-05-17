import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardCheck, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Trophy, 
  Target, 
  Users, 
  Zap,
  Info,
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { QUESTIONS, PERSONALITY_TYPES } from './constants';
import { Question, Pole, Dimension, TestResult } from './types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type AppState = 'intro' | 'testing' | 'result';

export default function App() {
  const [state, setState] = useState<AppState>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Pole>>({});
  const [result, setResult] = useState<TestResult | null>(null);

  const progress = Math.round(((currentIndex + 1) / QUESTIONS.length) * 100);

  const handleAnswer = (questionId: number, pole: Pole) => {
    setAnswers(prev => ({ ...prev, [questionId]: pole }));
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const scores: Record<Pole, number> = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };

    (Object.values(answers) as Pole[]).forEach(pole => {
      scores[pole]++;
    });

    const getDimensionResult = (p1: Pole, p2: Pole): { pole: Pole; percentage: number } => {
      const total = scores[p1] + scores[p2];
      if (total === 0) return { pole: p1, percentage: 50 };
      const p1Score = scores[p1];
      const p2Score = scores[p2];
      return p1Score >= p2Score 
        ? { pole: p1, percentage: Math.round((p1Score / total) * 100) }
        : { pole: p2, percentage: Math.round((p2Score / total) * 100) };
    };

    const res: TestResult = {
      scores,
      type: '',
      dimensions: {
        EI: getDimensionResult('E', 'I'),
        SN: getDimensionResult('S', 'N'),
        TF: getDimensionResult('T', 'F'),
        JP: getDimensionResult('J', 'P'),
      }
    };

    res.type = `${res.dimensions.EI.pole}${res.dimensions.SN.pole}${res.dimensions.TF.pole}${res.dimensions.JP.pole}`;
    setResult(res);
    setState('result');
  };

  const resetTest = () => {
    setState('intro');
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
  };

  const currentQuestion = QUESTIONS[currentIndex];

  const radarData = result ? [
    { subject: 'Extraversion (E)', A: result.scores.E, fullMark: 21 },
    { subject: 'Introversion (I)', A: result.scores.I, fullMark: 21 },
    { subject: 'Sensing (S)', A: result.scores.S, fullMark: 26 },
    { subject: 'Intuition (N)', A: result.scores.N, fullMark: 26 },
    { subject: 'Thinking (T)', A: result.scores.T, fullMark: 24 },
    { subject: 'Feeling (F)', A: result.scores.F, fullMark: 24 },
    { subject: 'Judging (J)', A: result.scores.J, fullMark: 22 },
    { subject: 'Perceiving (P)', A: result.scores.P, fullMark: 22 },
  ] : [];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#E6E6E6]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#1A1A1A]/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={resetTest}>
          <div className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-white font-bold">M</div>
          <span className="font-bold tracking-tight text-lg">MBTI 16 Personality Test</span>
        </div>
        {state === 'testing' && (
          <div className="hidden md:flex items-center gap-4">
            <div className="w-48 h-1.5 bg-[#1A1A1A]/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#1A1A1A]" 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono opacity-50">{currentIndex + 1} / {QUESTIONS.length}</span>
          </div>
        )}
      </header>

      <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {state === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12 py-12"
            >
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                  Explore Your<br />
                  <span className="italic font-serif text-[#1A1A1A]/40">Original Settings</span>
                </h1>
                <p className="text-xl text-[#1A1A1A]/60 max-w-2xl leading-relaxed">
                  Based on the MBTI 93-question standard scale, this is a professional tool to deeply understand your personality tendencies, communication style, and career development.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Precise Analysis", desc: "Uses the full 93-question bank, providing more value than short versions." },
                  { icon: Users, title: "Interpersonal Insight", desc: "Understand your interaction patterns to improve communication efficiency." },
                  { icon: Zap, title: "Career Advice", desc: "Recommends the most suitable career fields based on your personality traits." }
                ].map((item, i) => (
                  <div key={i} className="p-6 border border-[#1A1A1A]/5 rounded-2xl space-y-4 hover:border-[#1A1A1A]/20 transition-colors">
                    <item.icon className="w-6 h-6" />
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button 
                  onClick={() => setState('testing')}
                  className="group relative px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Test <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <p className="mt-4 text-xs text-[#1A1A1A]/40 flex items-center gap-1">
                  <Info className="w-3 h-3" /> Estimated time: 10-15 minutes. Please answer based on your intuition.
                </p>
              </div>
            </motion.div>
          )}

          {state === 'testing' && (
            <motion.div 
              key="testing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12 py-12"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-mono uppercase tracking-widest opacity-40">Question {currentIndex + 1}</span>
                  <span className="text-xs font-mono opacity-40">{progress}%</span>
                </div>
                <div className="w-full h-1 bg-[#1A1A1A]/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#1A1A1A]" 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                  {currentQuestion.text}
                </h2>

                <div className="grid gap-4">
                  {(['A', 'B'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleAnswer(currentQuestion.id, currentQuestion.options[key].pole)}
                      className="group w-full p-6 text-left border border-[#1A1A1A]/10 rounded-2xl hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 flex justify-between items-center"
                    >
                      <span className="text-lg font-medium">{currentQuestion.options[key].text}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-12">
                <button 
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  className="flex items-center gap-2 text-sm font-bold opacity-40 hover:opacity-100 disabled:opacity-0 transition-opacity"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-xs font-mono opacity-20">MBTI-93-FORM-M</span>
              </div>
            </motion.div>
          )}

          {state === 'result' && result && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12 py-12"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1A1A1A]/5 rounded-full text-xs font-bold tracking-widest uppercase">
                  <Trophy className="w-3 h-3" /> Test Completed
                </div>
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">
                  {result.type}
                </h1>
                <h2 className="text-3xl font-serif italic text-[#1A1A1A]/60">
                  {PERSONALITY_TYPES[result.type]?.title || 'Unknown Type'}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" /> Personality Dimension Analysis
                    </h3>
                    <div className="space-y-6">
                      {(Object.entries(result.dimensions) as [Dimension, { pole: Pole; percentage: number }][]).map(([dim, data]) => (
                        <div key={dim} className="space-y-2">
                          <div className="flex justify-between text-xs font-mono uppercase tracking-wider">
                            <span>{dim === 'EI' ? 'Energy Source' : dim === 'SN' ? 'Information Gathering' : dim === 'TF' ? 'Decision Making' : 'Lifestyle'}</span>
                            <span className="font-bold">{data.pole} {data.percentage}%</span>
                          </div>
                          <div className="h-2 bg-[#1A1A1A]/5 rounded-full overflow-hidden flex">
                            <div 
                              className={cn(
                                "h-full bg-[#1A1A1A]",
                                (data.pole === 'I' || data.pole === 'N' || data.pole === 'F' || data.pole === 'P') ? "ml-auto" : "mr-auto"
                              )}
                              style={{ width: `${data.percentage}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-[10px] font-bold opacity-30 uppercase tracking-tighter">
                            <span>{dim === 'EI' ? 'E Extraversion' : dim === 'SN' ? 'S Sensing' : dim === 'TF' ? 'T Thinking' : 'J Judging'}</span>
                            <span>{dim === 'EI' ? 'I Introversion' : dim === 'SN' ? 'N Intuition' : dim === 'TF' ? 'F Feeling' : 'P Perceiving'}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-[300px] w-full bg-white rounded-3xl border border-[#1A1A1A]/5 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="#1A1A1A" strokeOpacity={0.1} />
                      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 600 }} />
                      <Radar
                        name="Score"
                        dataKey="A"
                        stroke="#1A1A1A"
                        fill="#1A1A1A"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white border border-[#1A1A1A]/5 rounded-3xl space-y-6">
                  <div className="flex items-center gap-2 text-[#1A1A1A]/40">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-widest">Personality Description</span>
                  </div>
                  <p className="text-lg leading-relaxed text-[#1A1A1A]/80">
                    {PERSONALITY_TYPES[result.type]?.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">Strengths</span>
                      <ul className="text-sm space-y-1 opacity-60">
                        {PERSONALITY_TYPES[result.type]?.strengths.map((s, i) => <li key={i}>• {s}</li>)}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">Challenges</span>
                      <ul className="text-sm space-y-1 opacity-60">
                        {PERSONALITY_TYPES[result.type]?.weaknesses.map((w, i) => <li key={i}>• {w}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-[#1A1A1A] text-white rounded-3xl space-y-6">
                  <div className="flex items-center gap-2 opacity-40">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-widest">Career Suggestions</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {PERSONALITY_TYPES[result.type]?.careers.map((c, i) => (
                      <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm opacity-40 leading-relaxed pt-4">
                    These career fields typically allow {result.type} types to leverage their strengths and find fulfillment.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 pt-12">
                <button 
                  onClick={resetTest}
                  className="flex items-center gap-2 px-6 py-3 border border-[#1A1A1A]/10 rounded-full font-bold hover:bg-[#1A1A1A]/5 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Retest
                </button>
                <p className="text-xs text-[#1A1A1A]/30 max-w-md text-center">
                  Personality tests are for reference only and should not be the sole standard for self-assessment. Everyone's uniqueness transcends four letters.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1A1A1A]/5 text-center">
        <p className="text-xs font-mono opacity-20 uppercase tracking-[0.2em]">
          Designed for Self-Discovery & Growth
        </p>
      </footer>
    </div>
  );
}
