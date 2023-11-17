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
  popularCourses: [
    {
      image: "/895786_7b4b_2-272x161.jpg",
      theme: "Development >",
      description: "The Complete iOS 10 & Swift3 Developer Course",
      rating: 4,
      price: "$199.99",
      discountedPrice: "$100",
    },
    {
      image: "/246154_d8b0_3-272x161.jpg",
      theme: "Development >",
      description: "Web Design for Beginners: Real World Coding in HTML & CSS",
      rating: 5,
      price: "$129.99",
      discountedPrice: "$65",
    },
    {
      image: "/752950_b773-272x161.jpg",
      theme: "Development >",
      description:
        "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
      rating: 4,
      price: "$99.99",
      discountedPrice: "$50",
    },
    {
      image: "/1253188_58f7_2-272x161.jpg",
      theme: "Development >",
      description:
        "The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
      rating: 4,
      price: "$199.99",
      discountedPrice: "$100",
    },
    {
      image: "/919872_ed54_6-272x161.jpg",
      theme: "Development >",
      description: "Android Java Masterclass - Become an App Developer",
      rating: 4,
      price: "$99.99",
      discountedPrice: "$50",
    },
    {
      image: "/951684_9c1a_2-272x161.jpg",
      theme: "Development >",
      description: "Xamarin Forms: Build Native Cross-platform App with C#",
      rating: 4,
      price: "$109.99",
      discountedPrice: "$95",
    },
  ],
});
