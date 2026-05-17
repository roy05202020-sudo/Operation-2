import { Question, PersonalityType } from './types';

export const QUESTIONS: Question[] = [
  // E vs I (Extraversion vs Introversion) - 21 questions
  { id: 1, text: "At a social event, do you usually:", options: { A: { text: "Interact with many, including strangers", pole: 'E' }, B: { text: "Interact with a few, known to you", pole: 'I' } }, dimension: 'EI' },
  { id: 2, text: "Do you tend to be more:", options: { A: { text: "Outgoing", pole: 'E' }, B: { text: "Reserved", pole: 'I' } }, dimension: 'EI' },
  { id: 3, text: "If you worked in a large organization, would you prefer:", options: { A: { text: "A variety of activities", pole: 'E' }, B: { text: "Focusing on your own responsibilities", pole: 'I' } }, dimension: 'EI' },
  { id: 4, text: "When you talk to people, do you usually:", options: { A: { text: "Speak your mind directly", pole: 'E' }, B: { text: "Think before you speak", pole: 'I' } }, dimension: 'EI' },
  { id: 5, text: "Do you prefer to:", options: { A: { text: "Be the center of attention", pole: 'E' }, B: { text: "Work behind the scenes", pole: 'I' } }, dimension: 'EI' },
  { id: 6, text: "After a party, do you usually feel:", options: { A: { text: "Energized", pole: 'E' }, B: { text: "Need solitude to recover", pole: 'I' } }, dimension: 'EI' },
  { id: 7, text: "Which communication style do you prefer:", options: { A: { text: "Face-to-face or phone", pole: 'E' }, B: { text: "Email or messaging", pole: 'I' } }, dimension: 'EI' },
  { id: 8, text: "Do you usually:", options: { A: { text: "Make new friends easily", pole: 'E' }, B: { text: "Take time to get to know people", pole: 'I' } }, dimension: 'EI' },
  { id: 9, text: "In group discussions, do you usually:", options: { A: { text: "Speak up first", pole: 'E' }, B: { text: "Listen more than speak", pole: 'I' } }, dimension: 'EI' },
  { id: 10, text: "Do you prefer:", options: { A: { text: "A fast-paced environment", pole: 'E' }, B: { text: "A quiet, stable environment", pole: 'I' } }, dimension: 'EI' },
  { id: 11, text: "When you feel stressed, you tend to:", options: { A: { text: "Find someone to talk to", pole: 'E' }, B: { text: "Think alone", pole: 'I' } }, dimension: 'EI' },
  { id: 12, text: "Do you consider yourself:", options: { A: { text: "Easy to get to know", pole: 'E' }, B: { text: "Deep and hard to read", pole: 'I' } }, dimension: 'EI' },
  { id: 13, text: "Do you prefer:", options: { A: { text: "A wide range of interests", pole: 'E' }, B: { text: "Deeply studying a few interests", pole: 'I' } }, dimension: 'EI' },
  { id: 14, text: "At work, do you prefer:", options: { A: { text: "Teamwork", pole: 'E' }, B: { text: "Working independently", pole: 'I' } }, dimension: 'EI' },
  { id: 15, text: "Do you usually:", options: { A: { text: "Act first, think later", pole: 'E' }, B: { text: "Think first, act later", pole: 'I' } }, dimension: 'EI' },
  { id: 16, text: "Do you prefer:", options: { A: { text: "A lively party", pole: 'E' }, B: { text: "A cozy small gathering", pole: 'I' } }, dimension: 'EI' },
  { id: 17, text: "Do you usually:", options: { A: { text: "Share personal info freely", pole: 'E' }, B: { text: "Protect your privacy", pole: 'I' } }, dimension: 'EI' },
  { id: 18, text: "Do you prefer:", options: { A: { text: "Diverse tasks", pole: 'E' }, B: { text: "Focusing on a single task", pole: 'I' } }, dimension: 'EI' },
  { id: 19, text: "Do you consider yourself:", options: { A: { text: "Enthusiastic and proactive", pole: 'E' }, B: { text: "Calm and reactive", pole: 'I' } }, dimension: 'EI' },
  { id: 20, text: "In social situations, do you usually:", options: { A: { text: "Introduce others to each other", pole: 'E' }, B: { text: "Wait for others to introduce themselves", pole: 'I' } }, dimension: 'EI' },
  { id: 21, text: "Do you prefer:", options: { A: { text: "Public speaking", pole: 'E' }, B: { text: "One-on-one communication", pole: 'I' } }, dimension: 'EI' },

  // S vs N (Sensing vs Intuition) - 26 questions
  { id: 22, text: "Do you tend to focus more on:", options: { A: { text: "Current facts and details", pole: 'S' }, B: { text: "Future possibilities and meanings", pole: 'N' } }, dimension: 'SN' },
  { id: 23, text: "Do you prefer:", options: { A: { text: "Concrete, specific things", pole: 'S' }, B: { text: "Abstract, theoretical concepts", pole: 'N' } }, dimension: 'SN' },
  { id: 24, text: "Do you consider yourself more:", options: { A: { text: "Practical", pole: 'S' }, B: { text: "Imaginative", pole: 'N' } }, dimension: 'SN' },
  { id: 25, text: "Do you prefer to:", options: { A: { text: "Work step-by-step", pole: 'S' }, B: { text: "Try new methods", pole: 'N' } }, dimension: 'SN' },
  { id: 26, text: "Do you usually:", options: { A: { text: "Trust experience", pole: 'S' }, B: { text: "Trust intuition", pole: 'N' } }, dimension: 'SN' },
  { id: 27, text: "Do you prefer:", options: { A: { text: "Dealing with practical problems", pole: 'S' }, B: { text: "Thinking about philosophical questions", pole: 'N' } }, dimension: 'SN' },
  { id: 28, text: "Do you consider yourself more of a:", options: { A: { text: "Realist", pole: 'S' }, B: { text: "Idealist", pole: 'N' } }, dimension: 'SN' },
  { id: 29, text: "Do you prefer:", options: { A: { text: "Details", pole: 'S' }, B: { text: "The big picture", pole: 'N' } }, dimension: 'SN' },
  { id: 30, text: "Do you usually have:", options: { A: { text: "Keen observation", pole: 'S' }, B: { text: "Strong insight", pole: 'N' } }, dimension: 'SN' },
  { id: 31, text: "Do you prefer:", options: { A: { text: "Traditional methods", pole: 'S' }, B: { text: "Innovative methods", pole: 'N' } }, dimension: 'SN' },
  { id: 32, text: "Do you consider yourself more:", options: { A: { text: "Down-to-earth", pole: 'S' }, B: { text: "Heads in the clouds", pole: 'N' } }, dimension: 'SN' },
  { id: 33, text: "Do you prefer:", options: { A: { text: "Clear instructions", pole: 'S' }, B: { text: "Vague but inspiring hints", pole: 'N' } }, dimension: 'SN' },
  { id: 34, text: "Do you usually focus on:", options: { A: { text: "Facts", pole: 'S' }, B: { text: "Meanings", pole: 'N' } }, dimension: 'SN' },
  { id: 35, text: "Do you prefer:", options: { A: { text: "Practical skills", pole: 'S' }, B: { text: "Deep knowledge", pole: 'N' } }, dimension: 'SN' },
  { id: 36, text: "Do you consider yourself more:", options: { A: { text: "Common sense rich", pole: 'S' }, B: { text: "Inspiration rich", pole: 'N' } }, dimension: 'SN' },
  { id: 37, text: "Do you prefer:", options: { A: { text: "Known fields", pole: 'S' }, B: { text: "Unknown fields", pole: 'N' } }, dimension: 'SN' },
  { id: 38, text: "Do you usually describe things:", options: { A: { text: "Specifically", pole: 'S' }, B: { text: "Generally", pole: 'N' } }, dimension: 'SN' },
  { id: 39, text: "Do you prefer:", options: { A: { text: "Daily routines", pole: 'S' }, B: { text: "Grand plans", pole: 'N' } }, dimension: 'SN' },
  { id: 40, text: "Do you consider yourself more:", options: { A: { text: "Precise", pole: 'S' }, B: { text: "Deep", pole: 'N' } }, dimension: 'SN' },
  { id: 41, text: "Do you prefer:", options: { A: { text: "Statements of facts", pole: 'S' }, B: { text: "Metaphorical expressions", pole: 'N' } }, dimension: 'SN' },
  { id: 42, text: "Do you usually:", options: { A: { text: "Live in the present", pole: 'S' }, B: { text: "Live in the future", pole: 'N' } }, dimension: 'SN' },
  { id: 43, text: "Do you prefer:", options: { A: { text: "Specific examples", pole: 'S' }, B: { text: "General laws", pole: 'N' } }, dimension: 'SN' },
  { id: 44, text: "Do you consider yourself more of a:", options: { A: { text: "Doer", pole: 'S' }, B: { text: "Thinker", pole: 'N' } }, dimension: 'SN' },
  { id: 45, text: "Do you prefer:", options: { A: { text: "Tangible things", pole: 'S' }, B: { text: "Intangible things", pole: 'N' } }, dimension: 'SN' },
  { id: 46, text: "Do you usually focus on:", options: { A: { text: "Data", pole: 'S' }, B: { text: "Trends", pole: 'N' } }, dimension: 'SN' },
  { id: 47, text: "Do you prefer:", options: { A: { text: "Clear definitions", pole: 'S' }, B: { text: "Multiple interpretations", pole: 'N' } }, dimension: 'SN' },

  // T vs F (Thinking vs Feeling) - 24 questions
  { id: 48, text: "When making decisions, do you tend to focus more on:", options: { A: { text: "Logic and objective analysis", pole: 'T' }, B: { text: "Personal values and others' feelings", pole: 'F' } }, dimension: 'TF' },
  { id: 49, text: "Do you consider yourself more:", options: { A: { text: "Rational", pole: 'T' }, B: { text: "Emotional", pole: 'F' } }, dimension: 'TF' },
  { id: 50, text: "Do you prefer:", options: { A: { text: "Justice", pole: 'T' }, B: { text: "Mercy", pole: 'F' } }, dimension: 'TF' },
  { id: 51, text: "Do you usually speak:", options: { A: { text: "Frankly", pole: 'T' }, B: { text: "Tactfully", pole: 'F' } }, dimension: 'TF' },
  { id: 52, text: "Do you consider yourself more:", options: { A: { text: "Cool-headed", pole: 'T' }, B: { text: "Warm-hearted", pole: 'F' } }, dimension: 'TF' },
  { id: 53, text: "Do you prefer:", options: { A: { text: "Efficiency", pole: 'T' }, B: { text: "Harmony", pole: 'F' } }, dimension: 'TF' },
  { id: 54, text: "Do you usually use:", options: { A: { text: "Critical thinking", pole: 'T' }, B: { text: "Empathetic thinking", pole: 'F' } }, dimension: 'TF' },
  { id: 55, text: "Do you consider yourself more:", options: { A: { text: "Objective", pole: 'T' }, B: { text: "Subjective", pole: 'F' } }, dimension: 'TF' },
  { id: 56, text: "Do you prefer:", options: { A: { text: "Truth", pole: 'T' }, B: { text: "Sentiments", pole: 'F' } }, dimension: 'TF' },
  { id: 57, text: "Do you usually focus on:", options: { A: { text: "Reason", pole: 'T' }, B: { text: "Feelings", pole: 'F' } }, dimension: 'TF' },
  { id: 58, text: "Do you consider yourself more:", options: { A: { text: "Firm", pole: 'T' }, B: { text: "Gentle", pole: 'F' } }, dimension: 'TF' },
  { id: 59, text: "Do you prefer to:", options: { A: { text: "Analyze problems", pole: 'T' }, B: { text: "Support others", pole: 'F' } }, dimension: 'TF' },
  { id: 60, text: "Do you usually focus on:", options: { A: { text: "Results", pole: 'T' }, B: { text: "Feelings during the process", pole: 'F' } }, dimension: 'TF' },
  { id: 61, text: "Do you consider yourself more:", options: { A: { text: "Organized", pole: 'T' }, B: { text: "Compassionate", pole: 'F' } }, dimension: 'TF' },
  { id: 62, text: "Do you prefer:", options: { A: { text: "Clear standards", pole: 'T' }, B: { text: "Flexible handling", pole: 'F' } }, dimension: 'TF' },
  { id: 63, text: "Do you usually be:", options: { A: { text: "Impartial", pole: 'T' }, B: { text: "Considerate", pole: 'F' } }, dimension: 'TF' },
  { id: 64, text: "Do you consider yourself more of a:", options: { A: { text: "Skeptic", pole: 'T' }, B: { text: "Believer", pole: 'F' } }, dimension: 'TF' },
  { id: 65, text: "Do you prefer:", options: { A: { text: "Debate", pole: 'T' }, B: { text: "Negotiation", pole: 'F' } }, dimension: 'TF' },
  { id: 66, text: "Do you usually value:", options: { A: { text: "Competence", pole: 'T' }, B: { text: "Character", pole: 'F' } }, dimension: 'TF' },
  { id: 67, text: "Do you consider yourself more of a:", options: { A: { text: "Cool observer", pole: 'T' }, B: { text: "Warm participant", pole: 'F' } }, dimension: 'TF' },
  { id: 68, text: "Do you prefer to:", options: { A: { text: "Resolve conflict", pole: 'T' }, B: { text: "Avoid conflict", pole: 'F' } }, dimension: 'TF' },
  { id: 69, text: "Do you usually persuade by:", options: { A: { text: "Logic", pole: 'T' }, B: { text: "Emotion", pole: 'F' } }, dimension: 'TF' },
  { id: 70, text: "Do you consider yourself more:", options: { A: { text: "Rigorous", pole: 'T' }, B: { text: "Easy-going", pole: 'F' } }, dimension: 'TF' },
  { id: 71, text: "Do you prefer:", options: { A: { text: "The truth", pole: 'T' }, B: { text: "Harmony", pole: 'F' } }, dimension: 'TF' },

  // J vs P (Judging vs Perceiving) - 22 questions
  { id: 72, text: "Do you prefer to:", options: { A: { text: "Plan ahead", pole: 'J' }, B: { text: "Go with the flow", pole: 'P' } }, dimension: 'JP' },
  { id: 73, text: "Do you consider yourself more:", options: { A: { text: "Organized", pole: 'J' }, B: { text: "Spontaneous", pole: 'P' } }, dimension: 'JP' },
  { id: 74, text: "Do you prefer to:", options: { A: { text: "Finish tasks", pole: 'J' }, B: { text: "Start new tasks", pole: 'P' } }, dimension: 'JP' },
  { id: 75, text: "Do you usually be:", options: { A: { text: "Punctual", pole: 'J' }, B: { text: "Late or last-minute", pole: 'P' } }, dimension: 'JP' },
  { id: 76, text: "Do you consider yourself more:", options: { A: { text: "Decisive", pole: 'J' }, B: { text: "Indecisive", pole: 'P' } }, dimension: 'JP' },
  { id: 77, text: "Do you prefer:", options: { A: { text: "Certain conclusions", pole: 'J' }, B: { text: "Open options", pole: 'P' } }, dimension: 'JP' },
  { id: 78, text: "Do you usually:", options: { A: { text: "Finish work early", pole: 'J' }, B: { text: "Rush before the deadline", pole: 'P' } }, dimension: 'JP' },
  { id: 79, text: "Do you consider yourself more:", options: { A: { text: "Rule-following", pole: 'J' }, B: { text: "Freedom-loving", pole: 'P' } }, dimension: 'JP' },
  { id: 80, text: "Do you prefer:", options: { A: { text: "A tidy environment", pole: 'J' }, B: { text: "A casual environment", pole: 'P' } }, dimension: 'JP' },
  { id: 81, text: "Do you usually:", options: { A: { text: "Make decisions quickly", pole: 'J' }, B: { text: "Gather more info before deciding", pole: 'P' } }, dimension: 'JP' },
  { id: 82, text: "Do you consider yourself more:", options: { A: { text: "Planned", pole: 'J' }, B: { text: "Impulsive", pole: 'P' } }, dimension: 'JP' },
  { id: 83, text: "Do you prefer:", options: { A: { text: "A fixed schedule", pole: 'J' }, B: { text: "Flexible arrangements", pole: 'P' } }, dimension: 'JP' },
  { id: 84, text: "Do you usually:", options: { A: { text: "Dislike surprises", pole: 'J' }, B: { text: "Enjoy surprises", pole: 'P' } }, dimension: 'JP' },
  { id: 85, text: "Do you consider yourself more:", options: { A: { text: "Serious", pole: 'J' }, B: { text: "Playful", pole: 'P' } }, dimension: 'JP' },
  { id: 86, text: "Do you prefer to:", options: { A: { text: "Settle things", pole: 'J' }, B: { text: "Keep options open", pole: 'P' } }, dimension: 'JP' },
  { id: 87, text: "Do you usually be:", options: { A: { text: "Orderly", pole: 'J' }, B: { text: "Disorganized", pole: 'P' } }, dimension: 'JP' },
  { id: 88, text: "Do you consider yourself more:", options: { A: { text: "Responsible", pole: 'J' }, B: { text: "Fun-seeking", pole: 'P' } }, dimension: 'JP' },
  { id: 89, text: "Do you prefer:", options: { A: { text: "Clear goals", pole: 'J' }, B: { text: "Exploring the process", pole: 'P' } }, dimension: 'JP' },
  { id: 90, text: "Do you usually:", options: { A: { text: "Dislike changing plans", pole: 'J' }, B: { text: "Ready to change plans anytime", pole: 'P' } }, dimension: 'JP' },
  { id: 91, text: "Do you consider yourself more:", options: { A: { text: "Disciplined", pole: 'J' }, B: { text: "Loose", pole: 'P' } }, dimension: 'JP' },
  { id: 92, text: "Do you prefer:", options: { A: { text: "Checklists", pole: 'J' }, B: { text: "Inspiration", pole: 'P' } }, dimension: 'JP' },
  { id: 93, text: "Do you usually pursue:", options: { A: { text: "Efficiency", pole: 'J' }, B: { text: "Experience", pole: 'P' } }, dimension: 'JP' },
];

export const PERSONALITY_TYPES: Record<string, PersonalityType> = {
  'ISTJ': {
    code: 'ISTJ',
    title: 'Logistician',
    description: 'Quiet, serious, earn success by thoroughness and dependability. Practical, matter-of-fact, realistic, and responsible.',
    strengths: ['Honest and Direct', 'Strong-willed', 'Very Responsible', 'Calm and Practical', 'Create and Enforce Order'],
    weaknesses: ['Stubborn', 'Insensitive', 'Always by the Book', 'Often Reasonably Blame Themselves', 'Hard to Adapt to New Environments'],
    careers: ['Accountant', 'Auditor', 'Database Administrator', 'Civil Servant', 'Military Officer']
  },
  'ISFJ': {
    code: 'ISFJ',
    title: 'Defender',
    description: 'Quiet, friendly, responsible, and conscientious. Committed and steady in meeting their obligations. Thorough, painstaking, and accurate.',
    strengths: ['Supportive', 'Reliable and Patient', 'Imaginative and Observant', 'Enthusiastic', 'Loyal'],
    weaknesses: ['Overly Humble', 'Taking Things Too Personally', 'Repressing Their Feelings', 'Overloaded', 'Reluctant to Change'],
    careers: ['Nurse', 'Teacher', 'Social Worker', 'Administrative Assistant', 'Librarian']
  },
  'INFJ': {
    code: 'INFJ',
    title: 'Advocate',
    description: 'Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people and are insightful about others.',
    strengths: ['Creative', 'Insightful', 'Principled', 'Passionate', 'Altruistic'],
    weaknesses: ['Sensitive to Criticism', 'Reluctant to Open Up', 'Perfectionist', 'Prone to Burnout', 'Overly Idealistic'],
    careers: ['Psychological Counselor', 'Writer', 'HR Manager', 'Art Director', 'Non-profit Leader']
  },
  'INTJ': {
    code: 'INTJ',
    title: 'Architect',
    description: 'Have original minds and great drive for implementing their ideas and achieving their goals. Quickly see patterns in external events and develop long-range explanatory perspectives.',
    strengths: ['Rational', 'Independent', 'Determined', 'Curious', 'Versatile'],
    weaknesses: ['Arrogant', 'Dismissive of Emotions', 'Overly Critical', 'Socially Clueless', 'Confused in Romantic Relationships'],
    careers: ['Software Developer', 'Strategic Planner', 'Scientist', 'Lawyer', 'Engineer']
  },
  'ISTP': {
    code: 'ISTP',
    title: 'Virtuoso',
    description: 'Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions. Analyze what makes things work and readily get through large amounts of data.',
    strengths: ['Optimistic and Energetic', 'Creative and Practical', 'Spontaneous and Rational', 'Know How to Prioritize', 'Great in a Crisis'],
    weaknesses: ['Stubborn', 'Insensitive', 'Private and Reserved', 'Easily Bored', 'Risk-prone'],
    careers: ['Mechanical Engineer', 'Forensic Expert', 'Pilot', 'Software Engineer', 'Carpenter']
  },
  'ISFP': {
    code: 'ISFP',
    title: 'Adventurer',
    description: 'Quiet, friendly, sensitive, and kind. Enjoy the present moment, what\'s going on around them. Like to have their own space and to work within their own time frame.',
    strengths: ['Charming', 'Sensitive to Others', 'Imaginative', 'Passionate', 'Curious'],
    weaknesses: ['Fiercely Independent', 'Unpredictable', 'Easily Stressed', 'Overly Competitive', 'Fluctuating Self-Esteem'],
    careers: ['Artist', 'Designer', 'Veterinarian', 'Chef', 'Gardener']
  },
  'INFP': {
    code: 'INFP',
    title: 'Mediator',
    description: 'Idealistic, loyal to their values and to people who are important to them. Want an external life that is congruent with their values. Curious, quick to see possibilities.',
    strengths: ['Empathetic', 'Generous', 'Open-Minded', 'Creative', 'Passionate'],
    weaknesses: ['Overly Idealistic', 'Self-Critical', 'Impractical', 'Hard to Get to Know', 'Too Private'],
    careers: ['Writer', 'Editor', 'Psychologist', 'Artist', 'Translator']
  },
  'INTP': {
    code: 'INTP',
    title: 'Logician',
    description: 'Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction.',
    strengths: ['Analytical', 'Original', 'Open-Minded', 'Curious', 'Objective'],
    weaknesses: ['Disconnected', 'Insensitive', 'Condescending', 'Loathe Rules and Guidelines', 'Second-Guess Themselves'],
    careers: ['Theoretical Physicist', 'Software Architect', 'Philosopher', 'Mathematician', 'Systems Analyst']
  },
  'ESTP': {
    code: 'ESTP',
    title: 'Entrepreneur',
    description: 'Flexible and tolerant, they take a pragmatic approach focused on immediate results. Theories and conceptual explanations bore them—they want to act energetically to solve the problem.',
    strengths: ['Bold', 'Rational and Practical', 'Original', 'Perceptive', 'Direct'],
    weaknesses: ['Insensitive', 'Impatient', 'Risk-prone', 'Unstructured', 'May Miss the Big Picture'],
    careers: ['Sales Manager', 'Entrepreneur', 'Police Officer', 'Emergency Responder', 'Sports Coach']
  },
  'ESFP': {
    code: 'ESFP',
    title: 'Entertainer',
    description: 'Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen.',
    strengths: ['Bold', 'Original', 'Aesthetics and Showmanship', 'Practical', 'Observant'],
    weaknesses: ['Sensitive', 'Conflict-Averse', 'Easily Bored', 'Poor Long-Term Planners', 'Unfocused'],
    careers: ['Actor', 'PR Specialist', 'Event Planner', 'Tour Guide', 'Preschool Teacher']
  },
  'ENFP': {
    code: 'ENFP',
    title: 'Campaigner',
    description: 'Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly, and confidently proceed based on the patterns they see.',
    strengths: ['Curious', 'Perceptive', 'Enthusiastic', 'Excellent Communicator', 'Festive'],
    weaknesses: ['People-Pleasing', 'Unfocused', 'Disorganized', 'Overly Optimistic', 'Restless'],
    careers: ['Creative Director', 'Journalist', 'Consultant', 'Restaurateur', 'Politician']
  },
  'ENTP': {
    code: 'ENTP',
    title: 'Debater',
    description: 'Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems. Adept at generating conceptual possibilities and then analyzing them strategically.',
    strengths: ['Knowledgeable', 'Quick Thinkers', 'Original', 'Excellent Brainstormers', 'Charismatic'],
    weaknesses: ['Very Argumentative', 'Insensitive', 'Intolerant', 'Can Find It Difficult to Focus', 'Dislike Practical Matters'],
    careers: ['Lawyer', 'Inventor', 'Strategic Consultant', 'Creative Director', 'Venture Capitalist']
  },
  'ESTJ': {
    code: 'ESTJ',
    title: 'Executive',
    description: 'Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people to get things done, focus on getting results in the most efficient way possible.',
    strengths: ['Dedicated', 'Strong-willed', 'Direct and Honest', 'Loyal and Reliable', 'Excellent Organizers'],
    weaknesses: ['Inflexible and Stubborn', 'Uncomfortable with Unconventional Situations', 'Judgmental', 'Too Focused on Social Status', 'Difficult to Relax'],
    careers: ['Project Manager', 'Judge', 'Bank Manager', 'Factory Supervisor', 'Police Chief']
  },
  'ESFJ': {
    code: 'ESFJ',
    title: 'Consul',
    description: 'Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time.',
    strengths: ['Strong Practical Skills', 'Strong Sense of Duty', 'Very Loyal', 'Sensitive and Warm', 'Good at Connecting with Others'],
    weaknesses: ['Worried about Their Social Status', 'Inflexible', 'Reluctant to Innovate or Improvise', 'Vulnerable to Criticism', 'Often Too Needy'],
    careers: ['Nursing Manager', 'HR Specialist', 'Loan Officer', 'Elementary Teacher', 'Customer Service Manager']
  },
  'ENFJ': {
    code: 'ENFJ',
    title: 'Protagonist',
    description: 'Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others. Find potential in everyone, want to help others fulfill their potential.',
    strengths: ['Tolerant', 'Reliable', 'Charismatic', 'Altruistic', 'Natural Leaders'],
    weaknesses: ['Overly Idealistic', 'Too Selfless', 'Too Sensitive', 'Fluctuating Self-Esteem', 'Struggle to Make Tough Decisions'],
    careers: ['Trainer', 'Sales Manager', 'PR Manager', 'Minister', 'Non-profit Director']
  },
  'ENTJ': {
    code: 'ENTJ',
    title: 'Commander',
    description: 'Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems.',
    strengths: ['Efficient', 'Energetic', 'Self-Confident', 'Strong-Willed', 'Strategic Thinkers'],
    weaknesses: ['Stubborn and Dominant', 'Intolerant', 'Impatient', 'Arrogant', 'Poor Handling of Emotions'],
    careers: ['CEO', 'Management Consultant', 'Lawyer', 'Politician', 'Marketing Director']
  }
};
