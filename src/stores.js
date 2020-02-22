import { readable, writable } from "svelte/store";

let localforage = {
  config() {},
  async getItem() {},
  async setItem() {}
};

if (typeof window !== "undefined") {
  (async () => {
    localforage = (await import("localforage")).default;

    localforage.config({
      name: "Sound Rodeo"
    });

    try {
      const version = await localforage.getItem("version");
      if (version !== 1) {
        await localforage.setItem("version", 1);
        await localforage.setItem("boards", []);
      }
    } catch (err) {
      setError.set(err);
    }

    try {
      let value = await localforage.getItem("boards");
      value = value.filter(board => board.version === 1);
      boards.set(value);
    } catch (err) {
      setError.set(err);
    }

    setLoading.set(false);
  })();
}

const setLoading = writable(true);
export const loading = readable(true, set => {
  const unsubscribe = setLoading.subscribe(value => {
    set(value);
  });

  return unsubscribe;
});

const setWorking = writable(true);
export const working = readable(true, set => {
  const unsubscribe = setWorking.subscribe(value => {
    set(value);
  });

  return unsubscribe;
});

const setError = writable(false);
export const error = readable(false, set => {
  const unsubscribe = setError.subscribe(value => {
    set(value);
  });

  return unsubscribe;
});

export const boards = writable([]);
boards.subscribe(async value => {
  setWorking.set(true);
  try {
    await localforage.setItem("boards", value);
  } catch (err) {
    setError.set(err);
  }
  setWorking.set(false);
});
