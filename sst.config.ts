/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-astro",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          profile: "zinq-dev",
          // profile: input.stage === "prod" ? "zinq-prod" : "zinq-dev",
          region: "us-east-2",
        },
      },
    };
  },
  async run() {
    new sst.aws.Astro("astro-sst-test", {
      // cachePolicy: "4135ea2d-6df8-44a3-9df3-4b5a84be39ad",
      // assets: {
      //   fileOptions: [
      //     {
      //       files: ["*", "**"],
      //       contentType: "text/html",
      //       cacheControl:
      //         "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
      //     },
      //   ],
      // },
    });
  },
});
