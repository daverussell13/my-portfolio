import {
  defineDocumentType,
  makeSource,
  Args as SourceProps,
  ComputedFields,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  path: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

// Document types
export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "project/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}));

const contentSource: SourceProps = {
  contentDirPath: "src/contents",
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
};

export default makeSource(contentSource);
