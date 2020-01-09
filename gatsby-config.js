module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/dtlmd/219d25842fb840b8bcde831ac76f43c9?v=ea2cc12823034a478592986ddf8efe9b"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/dtlmd/aa0b9f9c724c483b85662f183c8c2c46?v=ffc44bf4e2ca4b6caa1b0f57bede9762"
            }
        }
    ],
}
