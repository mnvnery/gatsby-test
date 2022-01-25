import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/Layout"

export const query = graphql`
  query ProductsPage {
    film: allAirtable(filter: {data: {Type: {eq: "Film"}}}) {
      nodes {
        data {
          Name
          Price_day
          Type
        }
      }
    }
    photography: allAirtable(filter: {data: {Type: {eq: "Photography"}}}) {
      nodes {
        data {
          Name
          Price_day
          Type
        }
      }
    }
  }  
`;
export default function Products({data}) {
  const film = data.film.nodes
  const photography = data.photography.nodes
  
  return(
  <div>
    <h3>Film</h3>
    <ul>
      {film.map(node => (
        <li>
          {node.data.Name} for {node.data.Price_day}
        </li>
      ))}
    </ul>
    <h3>Photography</h3>
    <ul>
      {photography.map(node => (
        <li>
          {node.data.Name} for {node.data.Price_day}
        </li>
      ))}
    </ul>
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input name="name" placeholder="Your Name" type="text"/>
        <button>Send</button>
    </form>
  </div>


  
)
}


