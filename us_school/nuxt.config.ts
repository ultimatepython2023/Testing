
export default defineNuxtConfig({

  css:[
    "bootstrap/dist/css/bootstrap.css",
    "~/src/assets/css/style.css",


  ],
  runtimeConfig:{
    public:{
      base_url:process.env.API_URL,
    }
  },
  plugins:[
    {src:"~/plugins/bootstrap.js", mode:"client"},
    {src:"~/plugins/sweet-alert.ts"},
    {src: "~/plugins/jquery", mode: "client" },
    {src:"~/plugins/functions.js", mode:"client"},
    {src:"~/plugins/select2.js", mode:"client"},
  ],
 

})
