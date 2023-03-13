import { ReactNode } from 'react';
import './app.scss'

const App: React.FC<{children: ReactNode}> = ({ children }) => {
  return <>{children}</>;
};

export default App;
