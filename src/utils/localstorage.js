export const getState = () => {
	try {
    const unParsedState = localStorage.getItem('state');
    return unParsedState ? JSON.parse(unParsedState) : undefined
  } catch (e) {
    return undefined;
  }
}

export const setState = (state) => {
  try {
    const stateString = JSON.stringify(state);
    localStorage.setItem('state', stateString);
  } catch (e) {
    console.warn("Saving state failed");
  }
}