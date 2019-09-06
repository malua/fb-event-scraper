import initExpress from "./initExpress";
import initApi from "./initApi";

const start = async config => {
  const app = await initExpress(config);
  await initApi(app, config);

  const wd = require("./watchdog")(config);
  wd.start((diff, html) => {
    console.error("!!! result mismatched !!!");
    console.log(diff);
  });
};

export default {
  start
};
