import { FormEvent, useState } from "react";
import { useGoalStore } from "./store/store";
import "./App.css"
const App = () => {
  const { goals, addGoal, updateProgress,removeGoal } = useGoalStore();

  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null)

    const today = new Date().toISOString().split('T')[0];
    if (!description.trim()) {
      setError('Description is required.');
      return;
    }

    if (!deadline) {
      setError('Deadline is required.');
      return;
    }

    if (deadline < today) {
      setError('Deadline cannot be in the past.');
      return;
    }

    const newGoal = {
      id: Date.now(),
      description: description.trim(),
      deadline,
      progress: 0,
    };

    addGoal(newGoal);
    setDescription('');
    setDeadline('');
  };

  const handleProgress = (id: number, currentProgress: number) => {
    const newProgress = Math.min(currentProgress + 10, 100);
    updateProgress(id, newProgress);
  };

  const handleRemove = (id: number) => {
    removeGoal(id);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      <div className="w-full max-w-lg bg-gray-800/80 backdrop-blur-md border rounded-lg shadow-lg p-6 holo-container">
        <h1 className="text-3xl font-bold mb-6 animate-pulse-slow text-center primary-text-light">
          Goal Setter
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 primary-text-medium">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-700/50 border rounded-md p-2 text-white focus:outline-none focus:ring-2 transition-all duration-300 primary-input"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 primary-text-medium">Deadline</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="bg-gray-700/50 border rounded-md p-2 text-white focus:outline-none focus:ring-2 transition-all duration-300 primary-input"
            />
          </div>

          <button
            type="submit"
            disabled={!description.trim() || !deadline}
            className="w-full disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 glow-button primary-button"
          >
            Add Goal
          </button>
        </form>

        {/* Goals List */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 primary-text-medium">
            Your Goals
          </h2>
          {goals.length === 0 ? (
            <p className="text-gray-400 italic text-center animate-fade-in">
              No goals yet. Add one above!
            </p>
          ) : (
            <ul className="space-y-4">
              {goals.map((goal) => (
                <li
                  key={goal.id}
                  className="flex flex-col bg-gray-700/30 border rounded-md p-3 hover:bg-gray-700/50 transition-all duration-300 animate-slide-in primary-border-faint"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium primary-text-faint">
                      {goal.description}
                    </span>
                    <button
                      onClick={() => handleRemove(goal.id)}
                      className="transition-all duration-300 transform hover:scale-110 active:scale-90 cursor-pointer primary-text-light hover:text-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v1H9V4a1 1 0 011-1zm-7 4h14"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="text-sm text-gray-300">
                    Due: {goal.deadline}
                  </div>

                  <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-600 rounded-full h-2 mr-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500 primary-progress"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <span className="mr-2 primary-text-light">
                      {goal.progress}%
                    </span>
                    <button
                      onClick={() => handleProgress(goal.id, goal.progress)}
                      disabled={goal.progress >= 100}
                      className="disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-3 py-1 rounded-md transition-all duration-300 transform hover:scale-110 active:scale-90 glow-button primary-button-small"
                    >
                      +10%
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;