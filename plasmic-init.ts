import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

const PLASMIC_PROJECT_ID = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID;
const PLASMIC_PUBLIC_API_TOKEN =
  process.env.NEXT_PUBLIC_PLASMIC_PUBLIC_API_TOKEN;

if (!PLASMIC_PROJECT_ID || !PLASMIC_PUBLIC_API_TOKEN) {
  console.log(
    JSON.stringify({ PLASMIC_PROJECT_ID, PLASMIC_PUBLIC_API_TOKEN }, null, 2)
  );
  throw new Error(
    "PLASMIC_PROJECT_ID and PLASMIC_PUBLIC_API_TOKEN must be set in the environment"
  );
}

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: PLASMIC_PROJECT_ID,
      token: PLASMIC_PUBLIC_API_TOKEN,
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
