import { ComponentMeta, ComponentStory } from "@storybook/react";

import Login from ".";
import "./../../index.css";

export default {
  title: "Login",
  component: Login,
} as ComponentMeta<typeof Login>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Login> = (
  args: JSX.IntrinsicAttributes
) => <Login {...args} />;

export const LoginForm = Template.bind({});

LoginForm.args = {
  primary: true,
  label: "Button",
};
