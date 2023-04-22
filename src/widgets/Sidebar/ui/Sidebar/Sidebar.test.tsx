import { screen, render, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('sidebar-toggle', () => {
        renderWithTranslation(<Sidebar />);
        const sidebarToggle = screen.getByTestId('sidebar__toggle');
        fireEvent.click(sidebarToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
