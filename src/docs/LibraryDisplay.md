# Library Display Feature

## Usage Instructions

1. Import the `LibraryDisplay` component into your React application.
2. Use the component in your JSX to display the library items.

```jsx
import { LibraryDisplay } from '../components/LibraryDisplay';

function App() {
  return (
    <div>
      <h1>Library</h1>
      <LibraryDisplay />
    </div>
  );
}

export default App;
```

## Technical Details

The `LibraryDisplay` component fetches library items from an API and displays them in a list. It uses React hooks for state management and side effects.

### Dependencies

- `axios`: For making HTTP requests to the API.
- `react-query`: For handling data fetching and caching.

### Installation

To use this component, you need to install the required dependencies:

```bash
cnpm install axios react-query
```
