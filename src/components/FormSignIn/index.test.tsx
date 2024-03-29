import { render, screen } from 'utils/test-utils';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    render(<FormSignIn />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in now/i }),
    ).toBeInTheDocument();
  });

  it('should render the forgot password link', () => {
    render(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /forgot your password\?/i }),
    ).toBeInTheDocument();
  });

  it('should render text to sign up if already have an account', () => {
    render(<FormSignIn />);

    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument();
  });
});
