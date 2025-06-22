import { gql, request } from "graphql-request";

const query = gql`
  {
    transfers {
      blockNumber
      from
      blockTimestamp
      to
      id
      transactionHash
      value
    }
  }
`;
const url =
  "https://api.studio.thegraph.com/query/114384/fake-net/version/latest";
const headers = { Authorization: "Bearer afdbd56da82d67a62a282def0424380f" };

async function fetchSubgraphData() {
  return await request(url, query, {}, headers);
}
fetchSubgraphData()
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch(console.error);
