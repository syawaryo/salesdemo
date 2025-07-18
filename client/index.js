import routes from "./routes.js";
import create from "./create.jsx";

export default {
  // 元のコードに近い形（即時 dynamic import → Promise）
  context: import("./context.js"),
  routes,
  create,
};