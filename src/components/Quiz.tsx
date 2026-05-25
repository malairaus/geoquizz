import { useEffect, useState } from "react";
import {
  getQuestionBankByDifficulty,
  getQuestionsByDifficulty,
  difficulties,
  QUESTIONS_PER_LEVEL,
  QUESTIONS_PER_QUIZ,
  type Difficulty,
  type DifficultyInfo,
} from "../data/questions";
import type { Question } from "../data/questions";
import {
  ArrowLeft,
  CheckCircle,
  ChevronRight,
  Clock,
  Globe,
  RotateCcw,
  Shield,
  Trophy,
  XCircle,
  Zap,
} from "lucide-react";

const audioCtxRef = { current: null as AudioContext | null };

function getAudioCtx(): AudioContext {
  if (!audioCtxRef.current) {
    audioCtxRef.current = new AudioContext();
  }
  return audioCtxRef.current;
}

function playTone(isCorrect: boolean) {
  const ctx = getAudioCtx();
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = isCorrect ? "sine" : "sawtooth";
  osc.frequency.setValueAtTime(isCorrect ? 523.25 : 220, now);
  osc.frequency.linearRampToValueAtTime(isCorrect ? 783.99 : 150, now + 0.25);
  gain.gain.setValueAtTime(isCorrect ? 0.24 : 0.18, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.35);
}

type Screen = "start" | "difficulty" | "quiz" | "results";

const difficultyIcons: Record<Difficulty, React.ReactNode> = {
  normal: <Globe className="w-6 h-6" />,
  competitiv: <Shield className="w-6 h-6" />,
  olimpic: <Zap className="w-6 h-6" />,
};

const timeByDifficulty: Record<Difficulty, number> = {
  normal: 3 * 60,
  competitiv: 5 * 60,
  olimpic: 8 * 60,
};

function getEvaluation(score: number): string {
  if (score >= 90) return "Excelent!";
  if (score >= 70) return "Foarte bine!";
  if (score >= 50) return "Mai exerseaza putin.";
  return "Reia materia si incearca din nou.";
}

function getEvaluationColor(score: number): string {
  if (score >= 90) return "text-emerald-600";
  if (score >= 70) return "text-blue-600";
  if (score >= 50) return "text-amber-600";
  return "text-red-500";
}

function getScoreRingColor(score: number): string {
  if (score >= 90) return "stroke-emerald-500";
  if (score >= 70) return "stroke-blue-500";
  if (score >= 50) return "stroke-amber-500";
  return "stroke-red-500";
}

function initAnswers(len: number) {
  return Array(len).fill(null) as (number | null)[];
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}

function getTimeLabel(difficulty: Difficulty) {
  return formatTime(timeByDifficulty[difficulty]);
}

export default function Quiz() {
  const [screen, setScreen] = useState<Screen>("start");
  const [difficulty, setDifficulty] = useState<Difficulty>("normal");
  const [questions, setQuestions] = useState<Question[]>(() =>
    getQuestionsByDifficulty("normal")
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    initAnswers(QUESTIONS_PER_QUIZ)
  );
  const [timeLeft, setTimeLeft] = useState(timeByDifficulty.normal);
  const [timedOut, setTimedOut] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedOption === currentQuestion?.correctIndex;
  const progress =
    ((currentIndex + (validated ? 1 : 0)) / questions.length) * 100;
  const diffInfo = difficulties.find((d) => d.key === difficulty)!;
  const questionBankSize = getQuestionBankByDifficulty(difficulty).length;

  useEffect(() => {
    if (screen !== "quiz" || timeLeft <= 0) return;

    const timerId = window.setInterval(() => {
      setTimeLeft((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [screen, timeLeft]);

  useEffect(() => {
    if (screen === "quiz" && timeLeft === 0) {
      setTimedOut(true);
      setScreen("results");
    }
  }, [screen, timeLeft]);

  function resetQuizState(nextQuestions: Question[], nextDifficulty: Difficulty) {
    setQuestions(nextQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setValidated(false);
    setCorrectCount(0);
    setAnswers(initAnswers(nextQuestions.length));
    setTimeLeft(timeByDifficulty[nextDifficulty]);
    setTimedOut(false);
  }

  function startQuiz(d: Difficulty) {
    setDifficulty(d);
    resetQuizState(getQuestionsByDifficulty(d), d);
    setScreen("quiz");
  }

  function handleValidate() {
    if (selectedOption === null || timeLeft === 0) return;

    setValidated(true);
    playTone(isCorrect);

    if (isCorrect) {
      setCorrectCount((c) => c + 1);
    }

    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedOption;
    setAnswers(newAnswers);
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setValidated(false);
    } else {
      setScreen("results");
    }
  }

  function handleRestart() {
    setScreen("start");
    resetQuizState(getQuestionsByDifficulty(difficulty), difficulty);
  }

  function handleRetakeSameLevel() {
    resetQuizState(getQuestionsByDifficulty(difficulty), difficulty);
    setScreen("quiz");
  }

  if (screen === "start") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 shadow-lg shadow-sky-200 mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Quiz de Geografie
            </h1>
            <p className="text-slate-500 text-lg">
              Testeaza-ti cunostintele de geografie
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 font-semibold text-sm">
                  20
                </div>
                <span className="text-slate-600">
                  Intrebari random fara repetari in aceeasi sesiune
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 font-semibold text-sm">
                  100
                </div>
                <span className="text-slate-600">
                  Intrebari distincte pentru fiecare nivel
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 rounded-lg bg-amber-50 p-1.5 text-amber-600" />
                <span className="text-slate-600">
                  Timp: Normal 3 min, Competitiv 5 min, Olimpic 8 min
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setScreen("difficulty")}
            className="w-full py-4 px-6 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 transition-all duration-200 active:scale-[0.98] text-lg"
          >
            Alege dificultatea
          </button>
        </div>
      </div>
    );
  }

  if (screen === "difficulty") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <button
            onClick={() => setScreen("start")}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium">Inapoi</span>
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Alege nivelul de dificultate
            </h2>
            <p className="text-slate-500">
              Fiecare nivel contine {QUESTIONS_PER_LEVEL} de intrebari, iar quizul afiseaza {QUESTIONS_PER_QUIZ} random
            </p>
          </div>

          <div className="space-y-4">
            {difficulties.map((d) => (
              <button
                key={d.key}
                onClick={() => startQuiz(d.key)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg active:scale-[0.99] group bg-white hover:border-transparent ${d.borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${d.bgGradient} flex items-center justify-center text-white shrink-0 shadow-sm`}
                  >
                    {difficultyIcons[d.key]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="font-bold text-slate-800 text-lg">
                        {d.label}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        {getTimeLabel(d.key)}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (screen === "results") {
    const score = correctCount * 5;
    const evaluation = timedOut ? "Timpul a expirat." : getEvaluation(score);
    const evalColor = timedOut ? "text-amber-600" : getEvaluationColor(score);
    const ringColor = getScoreRingColor(score);
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (score / 100) * circumference;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${diffInfo.bgGradient} shadow-lg ${diffInfo.shadowColor} mb-4`}
            >
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Rezultate</h2>
            <p className="text-sm text-slate-400 mt-1">
              Nivel: {diffInfo.label} - set de 20 din {questionBankSize}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-6">
            <div className="flex justify-center mb-6">
              <div className="relative w-36 h-36">
                <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    className={ringColor}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 1s ease-out" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-slate-800">{score}</span>
                  <span className="text-sm text-slate-400">din 100</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className={`text-xl font-bold ${evalColor}`}>{evaluation}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-emerald-600 font-medium">Corecte</span>
                </div>
                <span className="text-2xl font-bold text-emerald-700">{correctCount}</span>
              </div>
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-red-500 font-medium">Gresite / necompletate</span>
                </div>
                <span className="text-2xl font-bold text-red-600">{questions.length - correctCount}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
            <h3 className="font-semibold text-slate-700 mb-4">Rezumatul raspunsurilor</h3>
            <div className="grid grid-cols-10 gap-1.5">
              {questions.map((q, i) => {
                const isAnswerCorrect = answers[i] === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-semibold ${
                      isAnswerCorrect
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-600"
                    }`}
                    title={`Intrebarea ${i + 1}: ${isAnswerCorrect ? "Corect" : "Gresit/necompletat"}`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleRetakeSameLevel}
              className={`w-full py-4 px-6 bg-gradient-to-r ${diffInfo.bgGradient} text-white font-semibold rounded-xl shadow-lg ${diffInfo.shadowColor} hover:shadow-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 text-lg`}
            >
              <RotateCcw className="w-5 h-5" />
              Reia Quizul cu intrebari random
            </button>
            <button
              onClick={() => setScreen("difficulty")}
              className="w-full py-3 px-6 bg-white text-slate-600 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Alege alt nivel de dificultate
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium">Iesi</span>
          </button>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${diffInfo.bgGradient} text-white`}>
              {diffInfo.label}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                timeLeft <= 30 ? "bg-red-100 text-red-600" : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-500">
              Intrebarea {currentIndex + 1} din {questions.length}
            </span>
            <span className="text-sm font-medium text-slate-500">
              {correctCount * 5} pct
            </span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${diffInfo.bgGradient} rounded-full transition-all duration-500 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-4">
          <h2 className="text-lg font-semibold text-slate-800 leading-relaxed mb-6">
            {currentQuestion.text}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let optionStyle = "border-slate-200 hover:border-sky-300 hover:bg-sky-50/50";

              if (validated) {
                if (index === currentQuestion.correctIndex) {
                  optionStyle = "border-emerald-400 bg-emerald-50 ring-1 ring-emerald-400";
                } else if (index === selectedOption && !isCorrect) {
                  optionStyle = "border-red-400 bg-red-50 ring-1 ring-red-400";
                } else {
                  optionStyle = "border-slate-100 opacity-50";
                }
              } else if (selectedOption === index) {
                optionStyle = "border-sky-500 bg-sky-50 ring-1 ring-sky-500";
              }

              return (
                <button
                  key={option}
                  onClick={() => {
                    if (!validated) setSelectedOption(index);
                  }}
                  disabled={validated}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${optionStyle} ${
                    !validated ? "cursor-pointer active:scale-[0.99]" : "cursor-default"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-semibold shrink-0 ${
                        validated && index === currentQuestion.correctIndex
                          ? "bg-emerald-500 text-white"
                          : validated && index === selectedOption && !isCorrect
                            ? "bg-red-500 text-white"
                            : selectedOption === index && !validated
                              ? "bg-sky-500 text-white"
                              : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {validated && index === currentQuestion.correctIndex ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : validated && index === selectedOption && !isCorrect ? (
                        <XCircle className="w-4 h-4" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </div>
                    <span
                      className={`font-medium ${
                        validated && index === currentQuestion.correctIndex
                          ? "text-emerald-700"
                          : validated && index === selectedOption && !isCorrect
                            ? "text-red-700"
                            : "text-slate-700"
                      }`}
                    >
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {validated && (
          <div
            className={`rounded-2xl p-5 mb-4 border ${
              isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"
            }`}
          >
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              )}
              <div>
                <p className={`font-semibold mb-1 ${isCorrect ? "text-emerald-700" : "text-amber-700"}`}>
                  {isCorrect ? "Raspuns corect!" : "Raspuns incorect"}
                </p>
                {!isCorrect && (
                  <p className="text-sm text-amber-600 mb-1">
                    Varianta corecta: <span className="font-semibold">{currentQuestion.options[currentQuestion.correctIndex]}</span>
                  </p>
                )}
                <p className={`text-sm ${isCorrect ? "text-emerald-600" : "text-amber-600"}`}>
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          {!validated ? (
            <button
              onClick={handleValidate}
              disabled={selectedOption === null}
              className={`flex-1 py-3.5 px-6 font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] text-lg ${
                selectedOption === null
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : `bg-gradient-to-r ${diffInfo.bgGradient} text-white shadow-lg ${diffInfo.shadowColor} hover:shadow-xl`
              }`}
            >
              Valideaza
            </button>
          ) : (
            <button
              onClick={handleNext}
              className={`flex-1 py-3.5 px-6 bg-gradient-to-r ${diffInfo.bgGradient} text-white font-semibold rounded-xl shadow-lg ${diffInfo.shadowColor} hover:shadow-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 text-lg`}
            >
              {currentIndex < questions.length - 1 ? (
                <>
                  Urmatoarea intrebare
                  <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                "Vezi rezultatele"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
