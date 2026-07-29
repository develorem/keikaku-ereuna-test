import React from 'react';
import GeneralLayout from './components/GeneralLayout';
import AddToLibraryButton from './components/AddToLibraryButton';

export default function App() {
  return (
    <GeneralLayout>
      <h1>It works</h1>
      <p>Scaffolded by Keikaku — replace this with the app.</p>
      <AddToLibraryButton />
    </GeneralLayout>
  );
}
