
import { TasksPage } from './pages/tasks-page';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';

export function App() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TasksPage />
      </ThemeProvider>
    );
}