import {Provider} from 'react-redux';
import {Catalog} from './components/Catalog/Catalog.jsx';
import {Container} from './components/Container/Container.jsx';
import {Header} from './components/Header/Header.jsx';
import { ModalDelivery } from './components/ModalDelivery/ModalDelivery.jsx';
import {Navigation} from './components/Navigation/Navigation.jsx';
import {store} from './store/index.js';
 
export const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <main>
        <Navigation/>
        <Container className="navigation__container"/>       
        <Catalog/>
      </main>
      <footer> </footer>
      <ModalDelivery/>
    </Provider>
  );
};
