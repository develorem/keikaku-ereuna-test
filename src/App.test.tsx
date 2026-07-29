import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('is a component', () => {
    expect(App).toBeTypeOf('function');
  });
});
