import { useState } from 'react';

interface Challenge {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  completed: boolean;
}

interface Tutorial {
  id: string;
  title: string;
  description: string;
  language: string;
  duration: number;
}

function App() {
  const [challenges] = useState<Challenge[]>([
    {
      id: '1',
      title: 'Two Sum Problem',
      difficulty: 'easy',
      category: 'Arrays',
      completed: false
    },
    {
      id: '2',
      title: 'Binary Search Tree',
      difficulty: 'medium',
      category: 'Data Structures',
      completed: false
    }
  ]);

  const [tutorials] = useState<Tutorial[]>([
    {
      id: '1',
      title: 'React Hooks Fundamentals',
      description: 'Learn useState, useEffect, and custom hooks',
      language: 'JavaScript',
      duration: 45
    },
    {
      id: '2',
      title: 'TypeScript Basics',
      description: 'Master TypeScript type system',
      language: 'TypeScript',
      duration: 60
    }
  ]);

  return (
    <div className="app">
      <header>
        <h1>🎓 Tech Guru</h1>
        <p>Learn. Code. Master.</p>
      </header>

      <main>
        <section className="challenges">
          <h2>Coding Challenges</h2>
          <div className="challenge-list">
            {challenges.map(challenge => (
              <div key={challenge.id} className="challenge-card">
                <h3>{challenge.title}</h3>
                <span className={`difficulty ${challenge.difficulty}`}>
                  {challenge.difficulty}
                </span>
                <p>{challenge.category}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="tutorials">
          <h2>Interactive Tutorials</h2>
          <div className="tutorial-list">
            {tutorials.map(tutorial => (
              <div key={tutorial.id} className="tutorial-card">
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <div className="meta">
                  <span>{tutorial.language}</span>
                  <span>{tutorial.duration} min</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
