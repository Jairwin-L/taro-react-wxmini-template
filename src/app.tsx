import { ReactNode } from 'react';
import { useError } from '@tarojs/taro';
import './app.scss';

const App: React.FC<{ children: ReactNode }> = ({ children }) => {
  useError((error) => console.log(`onError----->`, error));
  return <>{children}</>;
};

export default App;
