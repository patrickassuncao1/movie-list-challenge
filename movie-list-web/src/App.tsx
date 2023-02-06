import { LayoutGroup } from "framer-motion";
import ThemeProvider from './context/ThemeContext';
import AppRoutes from './routes';

const App = () => {

  return (
    <LayoutGroup>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </LayoutGroup>
  )
}

export default App