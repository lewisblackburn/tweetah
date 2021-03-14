import withApollo from "../lib/withApollo";
import { LoungePage } from "../modules/lounge/LoungePage";

export default withApollo({ ssr: true })(LoungePage);
