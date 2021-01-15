import { Button } from "@devinle/component-test/dist/index.js";

const redButton = {
  // We can add a name to identify it later.
  name: "redButton",

  // We can add a priority so it executes before or after other processors.
  priority: 10,

  // Only process the node it if it's an image.
  test: ({ node }) => node.component === "button",

  processor: ({ node }) => {

    if(node.props["data-type"] && 'red-button' === node.props["data-type"]) {
        node.props = JSON.parse(node.props["data-props"]);
    }

    // We tell Html2React that it should use the <Image /> component
    // from @frontity/components, which includes lazy loading support.
    node.component = Button;

    return node;
  }
};

export default redButton;