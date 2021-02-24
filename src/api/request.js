import axios from 'axios'
// import { reject } from 'core-js/fn/promise'
export default function requset(data, reqUrl) {
  // const data = JSON.stringify({ 'time_class': 'total', 'county_name': '修水', 'phone': '13979282121' })
  const config = {
    method: 'post',
    url: 'http://112.35.56.85:8888/xs/reporter/' + reqUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  }
  return axios(config)
  // return new Promise((resolve, reject) => {
  //   axios(config)
  //     .then(response => {
  //       const res = response.data
  //       console.log(res)
  //       return res
  //     }).catch(error => {
  //       console.log(error)
  //     })
  // })
}
// export function getBusi() {
//   const data = JSON.stringify({ 'time_class': 'total', 'county_name': '修水', 'buzi_class': '总计' })
//   // console.log(data);
//   const config = {
//     method: 'post',
//     url: 'http://112.35.56.85:8888/xs/reporter/score_group_var.php',
//     // dataType: 'json',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     data: data
//   }
//   axios(config)
//     .then(response => {
//       const data = response.data.data
//       const title = response.data.title
//       for (var i of data) {
//         const obj = {}
//         for (let j = 0; j < title.length; j++) {
//           obj[title[j]] = i[j]
//         }
//         this.tableData.push(obj)
//       }
//       for (const key in this.tableData[0]) {
//         this.tableColumns2.push({
//           prop: key,
//           label: key,
//           align: 'center'
//         })
//       }
//       this.tableColumns2[0].fixed = 'fixed'
//       this.tableColumns2[0].width = '100'
//       // for(let j = 0; j < title.length; j++){
//       //   if(j == 0){
//       //       this.tableColumns2.push({
//       //       prop: 'aim',
//       //       fixed: 'fixed',
//       //       label: title[j],
//       //       align: 'center',
//       //       width: '100'
//       //   });
//       //   }else{
//       //       this.tableColumns2.push({
//       //       prop: 'county',
//       //       label: title[j],
//       //       align: 'center'
//       //   });
//       //   }
//       // }
//     })
// }
// export function getpkData() {
//   const data = JSON.stringify({ 'time_class': 'total', 'county_name': '修水', 'buzi_class': '宽带' })
//   // console.log(data);
//   const config = {
//     method: 'post',
//     url: 'http://112.35.56.85:8888/xs/reporter/score_pk_var.php',
//     // dataType: 'json',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     data: data
//   }
//   axios(config)
//     .then(response => {
//       const data = response.data.data
//       const title = response.data.title
//       for (var i of data) {
//         const obj = {}
//         for (let j = 0; j < title.length; j++) {
//           obj[title[j]] = i[j]
//         }
//         this.pkData.push(obj)
//         // console.log(i);
//       }
//       for (const key in this.pkData[0]) {
//         this.tableColumns.push({
//           prop: key,
//           label: key,
//           align: 'center'
//         })
//       }
//       console.log(this.tableColumns)
//       this.tableColumns[0].fixed = 'fixed'
//       this.tableColumns[0].width = '100'
//       console.log(this.pkData)
//     })
// }
