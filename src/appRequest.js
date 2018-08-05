import axios from "axios";

//@TODO: add timeouts
const appRequest = {
  getVideos: () => {
    const url = `https://challenge.subsplash.net`;

    // Make Request
    return axios({
      url: url,
      method: "GET",
      headers: {
        "X-Sap-Auth": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlN2U5NDhlOC0xMzA3LTRhNDktOTkzZS1jZDQwMGIyNDBiNzMiLCJpYXQiOjE1MTc0NDMyMDB9.cCnoZDiDA1wZDw2jrbRgpwWvtA5nHHaDaUKLl1fAXA',
      },
    })
      .then((resp) => {
        console.log
        return resp.data;
      })
      .catch((resp) => {
        return resp;

      });
  }
}
  export default appRequest;