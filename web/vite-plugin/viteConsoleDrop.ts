import { PluginOption } from "vite";

/**
 * to delete console log and debugger in source code
 * @returns {PluginOption}
 */
export default function viteConsoleDropPlugin(): PluginOption {
  return {
    enforce: "pre",
    name: "vite-plugin-console-drop-plugin",
    apply: "build",
    transform(code, id) {
      if (
        !(
          id.endsWith(".vue") ||
          id.endsWith("ts") ||
          id.endsWith("tsx") ||
          id.endsWith("js") ||
          id.endsWith("jsx")
        )
      ) {
        return code;
      }

      const src = code.split("\n");
      return src
        .map((item) => {
          return item
            .replace(
              /console\.log\((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*\)[;\n]?/g,
              "\n"
            )
            .replace(/debugger[;\n]?/, "");
        })
        .join("\n");
    },
  };
}
