
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "./store";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};

export default Wrapper;
