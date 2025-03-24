# Goal Setter

![Goal Setter UI](https://raw.githubusercontent.com/Yaswanth-Vempuluru-7916/goal-setter-zustand/main/src/assets/images/ui.png)

A simple Goal Setter app built with React, TypeScript, Vite, Zustand, and Tailwind CSS. This project allows users to set personal goals with deadlines, track their progress, and manage them by adding, updating, or removing goals. It’s a beginner-friendly example of using Zustand for state management.

## Table of Contents
- [Goal Setter](#goal-setter)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Future Enhancements](#future-enhancements)
  - [Contributing](#contributing)
  - [License](#license)

## Features
- **Add Goals**: Set new goals with a description and deadline.
- **Track Progress**: Increment progress by 10% with a visual progress bar (0-100%).
- **Remove Goals**: Delete goals from the list.
- **Validation**: Ensures descriptions are non-empty and deadlines aren’t in the past.
- **Persistent Storage**: Goals are saved in local storage and persist across refreshes.
- **Responsive Design**: Styled with Tailwind CSS for a clean, modern UI.

## Technologies
- **React**: Frontend library for building the UI.
- **TypeScript**: Adds static typing for better code reliability.
- **Vite**: Fast build tool for development and production.
- **Zustand**: Lightweight state management library with persistence.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation
Follow these steps to set up the project locally:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Yaswanth-Vempuluru-7916/goal-setter-zustand.git
   cd goal-setter
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Run the Development Server**  
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to see the app.

## Usage
1. **Add a Goal**:
   - Enter a description (e.g., “Learn Zustand”) and select a deadline.
   - Click “Add Goal” to save it.
   - Errors appear if the description is empty or the deadline is in the past.

2. **Update Progress**:
   - Click the “+10%” button next to a goal to increase its progress.
   - The progress bar fills up, and the button disables at 100%.

3. **Remove a Goal**:
   - Click the “Remove” button to delete a goal from the list.

4. **Persistence**:
   - Goals persist in local storage—refresh the page, and they’ll still be there.

## Project Structure
```
goal-setter/
├── src/
│   ├── store/
│   │   └── useGoalStore.ts  # Zustand store for goal state and actions
│   ├── App.tsx              # Main component with UI and logic
│   ├── main.tsx             # Entry point
│   ├── index.css            # Tailwind CSS directives
│   └── vite-env.d.ts        # TypeScript Vite environment types
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies and scripts
└── README.md                # This file
```

## Future Enhancements
- **Edit Goals**: Allow users to modify existing goals.
- **Filter Goals**: Add filters for active vs. overdue goals.
- **Completion Status**: Mark goals as “Done” when progress reaches 100%.
- **Sorting**: Sort goals by deadline or progress.
- **Notifications**: Alert users about approaching deadlines.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the existing style and includes TypeScript types.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

