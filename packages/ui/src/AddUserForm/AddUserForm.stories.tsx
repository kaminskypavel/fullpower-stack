// Button.stories.ts|tsx

import {ComponentMeta, ComponentStory} from "@storybook/react";

import AddUserForm from "./AddUserForm";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "AddUserForm",
  component: AddUserForm,
} as ComponentMeta<typeof AddUserForm>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AddUserForm> = (args) => <AddUserForm />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  primary: true,
  label: "AddUserForm",
};
