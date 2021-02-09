export const findByTestAttr = (wrapper, idValue) => {
    return wrapper.find(`[data-test="${idValue}"]`);
  };
  