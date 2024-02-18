import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "./queries/launchesPast";

function App() {
  const { loading, error, data, refetch } = useQuery(GET_LAUNCHES, {
    onError: (error) => console.error("Error fetching launches:", error),
    onCompleted: (data) => console.log("Launch data:", data),
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <button onClick={() => refetch()}>Refetch</button>
      {data.launchesPast.map((launch) => (
        <div key={launch.id}>
          <h3>{launch.mission_name}</h3>
          <p>{new Date(launch.launch_date_local).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
