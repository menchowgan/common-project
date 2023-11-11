import { UserConfig, defineConfig, loadEnv } from "vite";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

const viteConfig: Record<string, () => UserConfig> = {
  'build': () => {
    console.log("-----production------");
    return viteProdConfig
  },
  "serve": () => {
    console.log("-----development------");
    return viteDevConfig
  }
}

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log("---env", env);
  
  return viteConfig[command]()
})