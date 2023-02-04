import { AnimateSharedLayout } from "framer-motion";
import ThemeProvider from './context/ThemeContext';
import AppRoutes from './routes';

const App = () => {

  return (
    <AnimateSharedLayout>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AnimateSharedLayout>
  )
}

export default App