import { render, screen, waitFor } from '@testing-library/react';
import Characters from './page';

describe('Characters Page', () => {
  beforeEach(() => {
    // Mock the fetch function
    global.fetch = jest.fn().mockImplementation((url) => {
      const page = url.match(/page=(\d+)/)[1];
      const limit = url.match(/limit=(\d+)/)[1];
      const data = {
        docs: [
          { id: 1, name: 'Character 1' },
          { id: 2, name: 'Character 2' },
        ],
        pages: 3,
      };
      return Promise.resolve({
        json: () => Promise.resolve(data),
      });
    });
  });

  it('renders the page with character data and pagination', async () => {
    render(<Characters />);

    // Wait for the data to be fetched and the page to update
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    // Assert that the "Back to all movies" link is rendered correctly
    expect(screen.getByText('Back to all movies')).toHaveAttribute('href', '/');

    // Assert that the "All Characters" title is rendered correctly
    expect(screen.getByText('All Characters')).toBeInTheDocument();

    // Assert that the "See all quotes" link is rendered correctly
    expect(screen.getByText('See all quotes')).toHaveAttribute('href', '/quotes');

    // Assert that the Grid component is rendered with the fetched character data
    expect(screen.getByTestId('character-grid')).toBeInTheDocument();
    expect(screen.getAllByTestId('character-item')).toHaveLength(2); // Assuming 2 characters are fetched

    // Assert that the Pagination component is rendered
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays a loader while fetching character data', async () => {
    render(<Characters />);

    // Assert that the loader is displayed initially
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the data to be fetched and the page to update
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
  });

  it('handles errors while fetching character data', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch character data'));

    render(<Characters />);

    // Wait for the error message to be displayed
    await waitFor(() => expect(screen.getByText('Failed to fetch character data')).toBeInTheDocument());
  });
});
