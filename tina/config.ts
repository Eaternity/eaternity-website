import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "_posts/blog",
        fields: [
          {
            type: 'image',
            label: 'Hero image',
            name: 'image',
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published'
          },
          {
            type: 'image',
            label: 'Different sized hero image',
            name: 'blogimage',
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            ui: {
              dateFormat: 'YYYY-MM-DD',
              parse: (value) => value && value.format('YYYY-MM-DD'),
            },
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Sub-Title",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            label: 'Categories',
            name: 'category',
            type: 'string',
            list: true,
            options: [
              {
                value: 'blog',
                label: 'Blog',
              },
            ],
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true,
            options: [
              {
                value: 'Presse',
                label: 'press',
              },
              {
                value: 'Planet',
                label: 'planet',
              },
              {
                value: 'Climate',
                label: 'climate',
              },
            ],
          },
        ],
      },
    ],
  },
});
