import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import Navibar from '../../src/components/navbar/Navibar';

jest.mock('next-auth/react');

describe('Navbar functionality', () => {
  describe('Navbar dropdown', () => {
    it('No profile picture when user has not logged in', () => {
      (useSession as jest.Mock).mockReturnValue({
        data: null,
        status: 'unauthenticated',
      });

      render(<Navibar />);

      const profilePic = screen.queryByTestId('profile-pic');
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

      const profilePic = screen.getByTestId('profile-pic');
      expect(profilePic).toBeInTheDocument();
    });
  });

  describe('Navbar links', () => {
    it('Navbar links when user are not authenticated', async () => {
      (useSession as jest.Mock).mockReturnValue({
        data: null,
        status: 'unauthenticated',
      });

      render(<Navibar />);
      const logoLink = screen.getByRole('link', { name: /home/i });
      const aboutLink = screen.getByRole('link', { name: /about/i });
      const homeLink = screen.getByRole('link', { name: /home/i });

      expect(aboutLink).toHaveAttribute('href', '/about');
      expect(homeLink).toHaveAttribute('href', '/');
      expect(logoLink).toHaveAttribute('href', '/');
    });
  });
});
