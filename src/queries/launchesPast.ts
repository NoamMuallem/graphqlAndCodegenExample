import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
    query GetLaunches ($limit:Int, $offset:Int, $order:String, $sort:String, $find:LaunchFind) {
      launchesPast(limit: $limit, offset:$offset, order:$order, sort:$sort, find:$find) {
        mission_name
        launch_date_local
      }
    }
`;
