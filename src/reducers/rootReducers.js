import modalReducers from "./modal";
import listCard from "./listCard";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  modals: modalReducers,
  cards: listCard,
});

export default rootReducers;
