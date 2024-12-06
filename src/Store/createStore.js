import configureStore from "./configureStore";
/**
 * Combine all reducers in this file and export the combined reducers.
 */
import history from "../Utils/history";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

const store = configureStore({}, history);

export default { store, history };
