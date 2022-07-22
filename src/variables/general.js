/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: true,
    text: 'Sign contract for "What are conference organizers afraid of?"'
  },
  {
    checked: false,
    text: "Lines From Great Russian Literature? Or E-mails From My Boss?"
  },
  {
    checked: true,
    text: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
  }
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Name", "Country", "City", "Sales"];
const tbody = [
  {
    className: "table-success",
    data: ["Pedro Penduko", "Philippines", "Pampanga", "$36,738"]
  },
  {
    className: "",
    data: ["Cardo Talisay", "Philippines", "Batangas", "$23,789"]
  },
  {
    className: "table-info",
    data: ["Asiong Salonga", "Philippines", "Manila", "$56,142"]
  },
  {
    className: "",
    data: ["Nardong Putik", "Philippines", "Cavite", "$38,735"]
  },
  {
    className: "table-danger",
    data: ["Jose Dimagulangan", "Philippines", "Pasay", "$63,542"]
  },
  { className: "", data: ["Alexanda Trese", "Philippines", "Manila", "$78,615"] },
  {
    className: "table-warning",
    data: ["Marie Mar", "Philippines", "Mexico", "$98,615"]
  }
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
