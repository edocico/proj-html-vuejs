import { reactive } from "vue";

export const store = reactive({
  headerDirectories: [
    {
      name: "Business",
      //icon: faChartLine,
    },
    {
      name: "Design",
      //icon: faPalette,
    },
    {
      name: "Development",
      //icon: faGear,
    },
    {
      name: "Lifestyle",
      //icon: faFaceSmile,
    },
    {
      name: "Office Productivity",
      //icon: faPrint,
    },
  ],
});
