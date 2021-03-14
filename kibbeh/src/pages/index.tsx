import withApollo from "../lib/withApollo";
import { LandingPage } from "../modules/landing-page/LandingPage";

export default withApollo({ ssr: false })(LandingPage);
