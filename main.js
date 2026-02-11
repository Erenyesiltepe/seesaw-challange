import { bindListeners } from "./jsLibraries/mouseListeners.js";
import { loadFromStorage } from "./jsLibraries/localStorageHandler.js";

loadFromStorage();
bindListeners();