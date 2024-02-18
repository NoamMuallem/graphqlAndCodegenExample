import { useGetLaunchesQuery } from "./gql/graphql";

function App() {
  const { loading, error, data, refetch } = useGetLaunchesQuery({
    variables:{
      limit:5
    },
    onError: (error) => console.error("Error fetching launches:", error),
    onCompleted: (data) => console.log("Launch data:", data),
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data?.launchesPast) {
    return <p>Error :(</p>;
  }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", width:"100%"}}>
      <h1>SpaceX Launches</h1>
      <button onClick={() => refetch()}>Refetch</button>
      {data.launchesPast.map((launch) => {
        if(!launch) return null

        return (
        <div key={launch.mission_name}>
          <h3>{launch.mission_name}</h3>
          <p>{new Date(launch.launch_date_local).toLocaleString()}</p>
        </div>
      )
      })}
    </div>
  );
}

export default App;
