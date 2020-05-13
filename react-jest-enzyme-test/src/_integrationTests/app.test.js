import moxios from "moxios";
import { testStore } from "./../../Utils";
import { fetchPosts } from "./../actions";
import { store } from "../createStore";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example Title1",
        body: "Some Text",
      },
      {
        title: "Example Title1",
        body: "Some Text",
      },
      {
        title: "Example Title1",
        body: "Some Text",
      },
    ];


    moxios.wait(()=>{
       const request=moxios.requests.mostRecent();
       request.respondWith({
           status:200,
           // response:[{}]
           response:expectedState
       })
    });

    return store.dispatch(fetchPosts())
           .then(()=>{
               const newState=store.getState();
               expect(newState.posts).toBe(expectedState);
           })
  });
});
