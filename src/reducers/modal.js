const initModals = [
  {
    title: "Thiết Kế Giao Diện Website",
    desc: "Với kinh nghiệm 2 năm trong lĩnh vực phát triển website tôi có thể.",
    service: [
      "Thiết kế giao diên theo yêu cầu của khách hàng",
      "Thiết kế giao diên theo yêu cầu của khách hàng",
    ],
  },
];
const modalReducers = (state = initModals, action) => {
  switch (action.type) {
    case "SHOW_MODAL": {
      break;
    }
    default:
      return state;
  }
};
export default modalReducers;
