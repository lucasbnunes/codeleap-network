import 'whatwg-fetch'
import '@testing-library/jest-dom'
import { useAppSelector } from '@/hooks/useAppSelector';
import Feed from '@/pages/feed';
import { renderWithProviders } from '@/utils/test-utils';
import { screen, render, renderHook } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/styles/theme';

jest.mock('../../hooks/useAppSelector');

const mockUseAppSelector = useAppSelector as jest.MockedFunction<typeof useAppSelector>

describe('Feed page', () => {
  it('should render nothing when there is no username', () => {
    mockUseAppSelector.mockReturnValue({ username: '' })
    renderWithProviders(
      <MantineProvider theme={theme}>
        <Feed />)
      </MantineProvider>
    )
    const title = screen.queryByText(/CodeLeap Network/)

    expect(title).not.toBeInTheDocument()
  });

  it('should render the title when there is a username', () => {
    mockUseAppSelector.mockReturnValue({ username: 'TestUser' })
    renderWithProviders(
      <MantineProvider theme={theme}>
        <Feed />)
      </MantineProvider>
    )
    const title = screen.queryByText(/CodeLeap Network/)

    expect(title).toBeInTheDocument()
  });
})