import React from "react"
import { graphql } from 'gatsby';

export const query = graphql`
  {
    allAirtable {
      nodes {
        table
        data {
          Name
          Price_Day
        }
      }
    }
  }
`;
export default ({data}) => (
  <div>
    <ul>
      {data.allAirtable.nodes.map(node => (
        <li>
          {node.data.Name} for {node.data.Price_Day}
        </li>
      ))}
    </ul>
  </div>
)
