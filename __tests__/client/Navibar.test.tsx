import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import Navibar from '../../src/components/navbar/Navibar';

jest.mock('next-auth/react');

describe('Navbar functionality', () => {
  it('No profile picture when user has not logged in', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(<Navibar />);

    const profilePic = screen.queryByTestId('dropdown');
    expect(profilePic).not.toBeInTheDocument();
  });

  it('Profile picture is displayed when user has logged in', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        user: {
          username: 'aliezan',
        },
      },
      status: 'authenticated',
    });

    render(<Navibar />);

    const profilePic = screen.getByTestId('dropdown');
    expect(profilePic).toBeInTheDocument();
  });
});
