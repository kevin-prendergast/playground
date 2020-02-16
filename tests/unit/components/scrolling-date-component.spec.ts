import { shallowMount } from "@vue/test-utils";
import ScrollingDateComponent from "@/components/ScrollingDateComponent.vue";

describe("SrollingDateComponent.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(ScrollingDateComponent, {});
    expect(wrapper).toMatchSnapshot();
  });
});
