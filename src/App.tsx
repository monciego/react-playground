import { Counter } from './pages/projects/counter';
import { GithubUsers } from './pages/projects/github-users/github-users';
import { WindowSize } from './pages/projects/window-size';
import { UserForm } from './pages/projects/user-form';
import { ComplexForm } from './pages/projects/complex-form';
import { ComponentLifeCycle } from './pages/projects/component-life-cycle';
import { List } from './pages/projects/rendering-list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { UseRefInput } from './pages/projects/inputUseRef';
import { Composition } from './pages/projects/composition';
import { ConditionalRendering } from './pages/projects/conditional-rendering-';
import { Starwars } from './pages/projects/starwars';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/use-ref-input' element={<UseRefInput />} />
            <Route path='/projects/counter' element={<Counter />} />
            <Route path='/projects/github-users' element={<GithubUsers />} />
            <Route
              path='/projects/component-life-cycle'
              element={<ComponentLifeCycle />}
            />
            <Route path='/projects/complex-form' element={<ComplexForm />} />
            <Route path='/projects/composition' element={<Composition />} />
            <Route
              path='/projects/conditional-rendering'
              element={<ConditionalRendering />}
            />
            <Route path='/projects/window-sizer' element={<WindowSize />} />
            <Route path='/projects/star-wars' element={<Starwars />} />
            <Route path='/projects/user-form' element={<UserForm />} />
            <Route path='/projects/rendering-list' element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
