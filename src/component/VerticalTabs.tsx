import { VTabs, VTab } from "react-vtabs";

const VerticalTabs = () => {
  return (
    <VTabs
      tabContainerStyle={{ marginLeft: 20 }}
      tabLabelStyle={{ width: 150 }}
      inkBarStyle={{ backgroundColor: "orange" }}
    >
      <VTab label="Profile">
        <img src={} alt="Profile" />
        <div>
          <p>
            hi1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan nibh dapibus, varius leo a, posuere mauris. Vivamus mattis,
            erat vel finibus condimentum, purus justo fringilla lorem, vitae
            lobortis neque arcu eu est. Ut pretium rutrum turpis, vel tempus
            turpis viverra nec.
          </p>
          <p>
            Ut viverra sed arcu euismod maximus. Pellentesque ultrices, nisi at
            consectetur tempor, orci enim interdum ex, vitae congue lorem massa
            vitae mauris.
          </p>
        </div>
      </VTab>
      <VTab label="t2">
        <div>
          hi2 Vivamus mattis, erat vel finibus condimentum, purus justo
          fringilla lorem, vitae lobortis neque arcu eu est. Ut pretium rutrum
          turpis, vel tempus turpis viverra nec
        </div>
      </VTab>
      <VTab
        label="t3"
        tabContainerStyle={{ backgroundColor: "rgba(255, 165, 0, 0.5)" }}
      >
        <div>
          <p>
            hi3 Nulla eget malesuada diam. Aliquam condimentum scelerisque odio,
            non consequat diam sodales fermentum. Vestibulum et congue leo. Duis
            tincidunt metus eu ullamcorper lacinia. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae;
          </p>
          <p>
            Pellentesque condimentum placerat ipsum sit amet bibendum.
            Vestibulum mattis magna et interdum aliquam.
          </p>
        </div>
      </VTab>
    </VTabs>
  );
};

export default VerticalTabs;
