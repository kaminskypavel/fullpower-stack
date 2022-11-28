// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { UsersList } from "./UsersList";
import { faker } from "@faker-js/faker";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "UsersList",
  component: UsersList,
} as ComponentMeta<typeof UsersList>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof UsersList> = (args) => (
  <UsersList {...args} />
);

export const PrimaryUserList = Template.bind({});

// generate 10 random users
const users = Array.from({ length: 10 }, (_, idx) => ({
  id: idx,
  name: faker.name.firstName(),
  email: faker.internet.email(),
  highlight: faker.datatype.boolean(),
}));

PrimaryUserList.args = {
  users,
};
