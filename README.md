# Quiz Application

A React-based quiz application that allows users to take a timed quiz with 15 questions fetched dynamically from the Open Trivia Database API. The app provides an intuitive interface, navigation features, and a detailed result report upon quiz completion.

---

## Features

1. **Start Page**:
   - Users begin the quiz by submitting their email address.
   - Validation ensures a valid email format is entered.

2. **Quiz Layout**:
   - Displays 15 questions fetched dynamically from the [Open Trivia Database API](https://opentdb.com/api.php?amount=15).
   - Questions are accompanied by multiple-choice answers generated from the API.
   - A countdown timer (30 minutes) ensures time-bound completion. Auto-submits when time runs out.

3. **Navigation**:
   - Users can navigate directly to any question.
   - Overview panel indicates:
     - **Visited questions**.
     - **Attempted questions**.

4. **End of Quiz**:
   - Upon completion or timeout, users are redirected to a report page.
   - The report shows:
     - Each question.
     - User's answer and the correct answer side by side for easy comparison.

5. **Data Source**:
   - Quiz data is fetched from the Open Trivia Database API.

---

## Demo

[Insert a link to a live demo of the application or screenshots if applicable.]

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quiz-application.git
   cd quiz-application
