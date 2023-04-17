import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App.jsx';
import userEvent from '@testing-library/user-event';



test('componente principal de aplicación', () => {
  render(App.jsx)
  
  userEvent.click(screen.getByText('Cargado Satisfactoriamente'))

  expect(screen.getByRole('button')).toBeDisabled()
});
