// export default () => {
//   const getData = (endpoint, options) => axios.get(endpoint, {
//     cancelToken: new axios.CancelToken(((c) => {
//       window.cancelXHR = c;
//     })),
//   }).then((res) => {
//     if (options && options.required && this.dataMxn.is404(res, options)) {
//       this.$router.replace({
//         name: '404',
//       });
//       return;
//     } if (res.status === 200) {
//       if (typeof res.data === 'string') {
//         res.data = JSON.parse(res.data);
//       }
//       return res.data;
//     }
//     return options && options.status ? res : null;
//   }).catch((error) => {
//     // console.error(error); //eslint-disable-line
//     if (options && options.required && this.dataMxn.is404(error, options)) {
//       this.$router.replace({
//         name: '404',
//       });
//     }
//   });
//   return { getData };
// };
export default () => {
  const getData = (endpoint) => fetch(endpoint)
    .then((res) => res.json());
  return { getData };
};
