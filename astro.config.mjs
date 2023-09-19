import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown({
    config: {
       // Agrega "window.trackMetrics" como función reenviada.
       forward: ["window.trackMetrics"],
    },
  }),],
});
