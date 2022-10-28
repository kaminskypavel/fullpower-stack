// Button.stories.ts|tsx

import {ComponentMeta, ComponentStory} from "@storybook/react";

import {UsersList} from "./UsersList";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UsersList",
  component: UsersList,
} as ComponentMeta<typeof UsersList>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof UsersList> = (args) => <UsersList {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "test@test.com"
    }
  ]

};
