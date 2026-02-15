import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';
import { RecipeDetail } from './pages/RecipeDetail';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { About } from './pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'recipe/:id',
        element: <RecipeDetail />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
