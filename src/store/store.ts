import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Goal{
    id : number,
    description : string,
    deadline : string,
    progress : number
}

interface GoalState {
    goals : Goal[],
    addGoal : (goal : Goal) => void;
    updateProgress : (id : number, progress : number) => void;
    removeGoal : (id : number) => void
}

export const useGoalStore = create<GoalState>()(
    persist(
        (set)=>({
            goals : [],
            addGoal : (goal)=> set((state)=>({
                goals : [...state.goals, goal ]
            })),
            updateProgress : (id ,progress)=>set((state)=>({
                goals : state.goals.map((goal)=> goal.id === id ? {...goal,progress} : goal)
            })),
            removeGoal : (id)=>set((state)=>({
                goals : state.goals.filter((goal)=>goal.id !== id)
            })),
        }),
        {
            name : "goal-storage"
        }
    )
)