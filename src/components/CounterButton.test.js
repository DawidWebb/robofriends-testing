import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it("expoect to render CounterButton component", () => {
	const mockColor = `red`;

	expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the count", () => {
	const mockColor = `red`;
	const wrapper = shallow(<CounterButton color={mockColor} />);

	wrapper.find('[id="counter"]').simulate("click");
	expect(wrapper.state()).toEqual({ count: 1 });
	wrapper.find('[id="counter"]').simulate("click");
	wrapper.find('[id="counter"]').simulate("click");
	expect(wrapper.state()).toEqual({ count: 3 });
});
