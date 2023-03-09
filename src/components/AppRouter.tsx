import {Navigate, Route, Routes} from 'react-router-dom';
import { routes } from '../router/route';

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.element />}
        />
      ))}
      <Route path='/*' element={<Navigate replace to='/1' />}/>
    </Routes>
  );
};
