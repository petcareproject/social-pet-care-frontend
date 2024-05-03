import useGetUser from "../http/useGetUser";
import FooterSection from "./Footer/FooterSection";
import FriendSection from "./FriendSection/FriendSection";
import Header from "./HeroSection/Header";
import MeetUpSection from "./MeetUp/MeetUpSection";
import OurClientSection from "./OurClient/OurClientSection";
import SecondSection from "./SecondSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import SocialGatheringSection from "./SocialGathering/SocialGatheringSection";

const HomePage = () => {
	return (
		<>
			<div>
				<Header />
				<SecondSection />
				<MeetUpSection />
				<FriendSection />
				<ServiceSection />
				<OurClientSection />
				<SocialGatheringSection />
				<FooterSection />
			</div>
		</>
	);
};

export default HomePage;
