require('dotenv').config();

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-airtable', 
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, 
        tables: [
          {
            baseId: `appucCQ5OlSqfEOpc`,
            tableName: `All Products`,
          },
        ],
      },
    },
  ],
}
