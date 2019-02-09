export default {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "http://example.com/root.json",
  type: "object",
  title: "The Root Schema",
  required: ["auth", "comments"],
  properties: {
    auth: {
      $id: "#/properties/auth",
      type: "boolean",
      title: "The Auth Schema",
      default: false,
      examples: [false]
    },
    comments: {
      $id: "#/properties/comments",
      type: "array",
      title: "The Comments Schema",
      items: {
        $id: "#/properties/comments/items",
        type: "object",
        title: "The Items Schema",
        required: ["body", "email", "id", "name", "postId"],
        properties: {
          body: {
            $id: "#/properties/comments/items/properties/body",
            type: "string",
            title: "The Body Schema",
            default: "",
            examples: ["laudantium ium"],
            pattern: "^(.*)$"
          },
          email: {
            $id: "#/properties/comments/items/properties/email",
            type: "string",
            title: "The Email Schema",
            default: "",
            examples: ["Eliseo@gardner.biz"],
            pattern: "^(.*)$"
          },
          id: {
            $id: "#/properties/comments/items/properties/id",
            type: "integer",
            title: "The Id Schema",
            default: 0,
            examples: [1]
          },
          name: {
            $id: "#/properties/comments/items/properties/name",
            type: "string",
            title: "The Name Schema",
            default: "",
            examples: ["id labore ex et quam laborum"],
            pattern: "^(.*)$"
          },
          postId: {
            $id: "#/properties/comments/items/properties/postId",
            type: "integer",
            title: "The Postid Schema",
            default: 0,
            examples: [1]
          }
        }
      }
    }
  }
};
