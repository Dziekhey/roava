import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), '');

  const sentryConfig: SentryReactRouterBuildOptions = {
    org: 'dziekhey',
    project: 'tourvisto',
    // An auth token is required for uploading source maps.
    authToken: process.env.VITE_SENTRY_AUTH_KEY,
  };

  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    sentryConfig,
    ssr: {
      noExternal: ['@syncfusion/**'], // Force bundling Syncfusion for SSR
    },
  };
});