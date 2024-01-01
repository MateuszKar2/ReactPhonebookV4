import Phonebook from './Phonebook/Phonebook';
import { Provider } from 'react-redux/es';
import store from "../redux/store";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Provider store={store}>
        <Phonebook/>
      </Provider>
    </div>
  );
};
