import { Axios } from "./Axios";

function getHome() {
  const url =
    "everything?q=tesla&from=2022-10-16&sortBy=publishedAt&apiKey=12b64533a43946a89ecaa67b9f852f10";
  return Axios.get(url);
}

const homeService = {
  getHome,
};

export default homeService;
