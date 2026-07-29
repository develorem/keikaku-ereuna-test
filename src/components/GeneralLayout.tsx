import React from 'react';

export default function GeneralLayout() {
  return (
    <div className="general-layout">
      <header>
        <h1>My App</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        © 2023 My Company
      </footer>
    </div>
  );
}