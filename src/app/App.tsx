import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>

      <AppRouter />
    </div>
  );
};
