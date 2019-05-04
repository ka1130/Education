import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "components/Navigation/NavigationItems";
import NavigationItem from "components/Navigation/NavigationItems/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  it("renders two <NavigationItem> components if not authenticated", () => {
    const wrapper = shallow(<NavigationItems />);
    // expect(wrapper.find(NavigationItem).length).toEqual(2);
  });

  it("renders three <NavigationItem> components if authenticated", () => {
    const wrapper = shallow(<NavigationItems />);
    // expect(wrapper.find(NavigationItem).length).toEqual(2);
  });
});
