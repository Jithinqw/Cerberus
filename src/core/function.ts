const noop = (): void => {};

const isPromise = (value: any) => {
    return (
      typeof value === 'object' &&
      value !== null &&
      typeof value.then === 'function'
    );
};