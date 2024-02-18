import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 5) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
      }
    }
  }
`;
