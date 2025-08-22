// You gave this. I'm extending to support per-environment nicely.
export const config = {
  theInternet: {
    // If you don’t have separate env URLs, keep all three pointing to same host.
    dev: { baseURL: "https://the-internet.herokuapp.com/" },
    qa: { baseURL: "https://the-internet.herokuapp.com/" },
    prod: { baseURL: "https://the-internet.herokuapp.com/" },
  },
  opencart: {
    dev: { baseURL: "https://demo.opencart.com/" },
    qa: { baseURL: "https://demo.opencart.com/" },
    prod: { baseURL: "https://demo.opencart.com/" },
  },
  youtube: {
    dev: { baseURL: "https://youtube.com/" },
    qa: { baseURL: "https://youtube.com/" },
    prod: { baseURL: "https://youtube.com/" },
  },
};
