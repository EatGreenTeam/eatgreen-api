import config from "./app/config";
import app from "./app";

app.listen(config.PORT, () => {
    console.log(`Server is running on ${config.PORT}`);
  });