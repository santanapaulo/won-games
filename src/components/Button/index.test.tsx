import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>By now</Button>);
    expect(screen.getByRole('button', { name: /By now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size ', () => {
    renderWithTheme(<Button size="small">By now</Button>);
    expect(screen.getByRole('button', { name: /By now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size ', () => {
    renderWithTheme(<Button size="large">By now</Button>);
    expect(screen.getByRole('button', { name: /By now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('should render the full width version ', () => {
    renderWithTheme(<Button fullWidth>By now</Button>);
    expect(screen.getByRole('button', { name: /By now/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render an icon version version ', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>By now</Button>,
    );
    expect(screen.getByText(/by now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render a button as a link ', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        By now
      </Button>,
    );
    expect(screen.getByRole('link', { name: /by now/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });
});
