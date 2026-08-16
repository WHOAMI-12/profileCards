import Card from "./components/cards.jsx"

function App(){

  const designers = [
  {
    availability: "Available",
    rate: "$55/hr",
    profilePic: "https://i.pravatar.cc/150?img=12",
    name: "Wade Warren",
    role: "UI/UX Designer",
    company: "Google",
    tags: ["UI", "UX", "Figma", "+4"],
    description:
      "Wade is a 32 year old UI/UX designer with an impressive portfolio behind him."
  },
  {
    availability: "Available",
    rate: "$65/hr",
    profilePic: "https://i.pravatar.cc/150?img=47",
    name: "Olivia Carter",
    role: "Product Designer",
    company: "Microsoft",
    tags: ["Product", "UI", "Figma", "+3"],
    description:
      "Olivia is a 29 year old product designer focused on creating simple and intuitive digital experiences."
  },
  {
    availability: "Busy",
    rate: "$80/hr",
    profilePic: "https://i.pravatar.cc/150?img=33",
    name: "Ethan Brooks",
    role: "UX Researcher",
    company: "Amazon",
    tags: ["UX", "Research", "Testing", "+5"],
    description:
      "Ethan is a 35 year old UX researcher who specializes in turning user insights into better products."
  },
  {
    availability: "Available",
    rate: "$70/hr",
    profilePic: "https://i.pravatar.cc/150?img=44",
    name: "Sophia Miller",
    role: "Visual Designer",
    company: "Apple",
    tags: ["UI", "Visual", "Photoshop", "+2"],
    description:
      "Sophia is a 28 year old visual designer with a strong eye for typography, branding, and digital interfaces."
  },
  {
    availability: "Available",
    rate: "$60/hr",
    profilePic: "https://i.pravatar.cc/150?img=15",
    name: "Noah Anderson",
    role: "Interaction Designer",
    company: "Meta",
    tags: ["UX", "Interaction", "Figma", "+6"],
    description:
      "Noah is a 31 year old interaction designer who enjoys building engaging and meaningful user experiences."
  },
  {
    availability: "Busy",
    rate: "$75/hr",
    profilePic: "https://i.pravatar.cc/150?img=25",
    name: "Emma Wilson",
    role: "UI Designer",
    company: "Netflix",
    tags: ["UI", "Branding", "Photoshop", "+3"],
    description:
      "Emma is a 27 year old UI designer experienced in creating polished interfaces for modern digital products."
  },
  {
    availability: "Available",
    rate: "$90/hr",
    profilePic: "https://i.pravatar.cc/150?img=68",
    name: "Liam Thompson",
    role: "Product Designer",
    company: "Adobe",
    tags: ["UI", "UX", "Illustrator", "+5"],
    description:
      "Liam is a 34 year old product designer who combines strong visual skills with a deep understanding of users."
  },
  {
    availability: "Available",
    rate: "$50/hr",
    profilePic: "https://i.pravatar.cc/150?img=5",
    name: "Ava Martinez",
    role: "UX Designer",
    company: "Spotify",
    tags: ["UX", "Research", "Figma", "+2"],
    description:
      "Ava is a 26 year old UX designer passionate about designing accessible and enjoyable digital experiences."
  },
  {
    availability: "Busy",
    rate: "$85/hr",
    profilePic: "https://i.pravatar.cc/150?img=59",
    name: "James Parker",
    role: "Design Lead",
    company: "Apple",
    tags: ["UI", "UX", "Leadership", "+7"],
    description:
      "James is a 38 year old design lead with years of experience building products used by millions of people."
  },
  {
    availability: "Available",
    rate: "$55/hr",
    profilePic: "https://i.pravatar.cc/150?img=49",
    name: "Mia Thompson",
    role: "UI/UX Designer",
    company: "NVIDIA",
    tags: ["UI", "UX", "Prototyping", "+4"],
    description:
      "Mia is a 30 year old UI/UX designer who loves transforming complex ideas into clean and usable interfaces."
  },
  {
    availability: "Available",
    rate: "$72/hr",
    profilePic: "https://i.pravatar.cc/150?img=11",
    name: "Lucas Davis",
    role: "Product Designer",
    company: "Microsoft",
    tags: ["Product", "UX", "Figma", "+6"],
    description:
      "Lucas is a 33 year old product designer with extensive experience designing scalable digital products."
  },
  {
    availability: "Busy",
    rate: "$95/hr",
    profilePic: "https://i.pravatar.cc/150?img=32",
    name: "Isabella Moore",
    role: "Senior UI/UX Designer",
    company: "Amazon",
    tags: ["UI", "UX", "Research", "+3"],
    description:
      "Isabella is a 36 year old senior designer known for creating thoughtful experiences backed by strong research."
  },
  {
    availability: "Available",
    rate: "$62/hr",
    profilePic: "https://i.pravatar.cc/150?img=8",
    name: "Daniel Cooper",
    role: "UX Designer",
    company: "Tesla",
    tags: ["UX", "Wireframing", "Figma", "+5"],
    description:
      "Daniel is a 30 year old UX designer who specializes in turning complicated workflows into simple experiences."
  },
  {
    availability: "Available",
    rate: "$78/hr",
    profilePic: "https://i.pravatar.cc/150?img=23",
    name: "Charlotte King",
    role: "Brand Designer",
    company: "Airbnb",
    tags: ["Branding", "UI", "Illustrator", "+2"],
    description:
      "Charlotte is a 31 year old brand designer with a passion for creating memorable and consistent visual identities."
  },
  {
    availability: "Busy",
    rate: "$68/hr",
    profilePic: "https://i.pravatar.cc/150?img=61",
    name: "Henry Adams",
    role: "UI Designer",
    company: "IBM",
    tags: ["UI", "Photoshop", "Figma", "+4"],
    description:
      "Henry is a 34 year old UI designer who creates clean interfaces that balance aesthetics and usability."
  },
  {
    availability: "Available",
    rate: "$58/hr",
    profilePic: "https://i.pravatar.cc/150?img=36",
    name: "Amelia Scott",
    role: "UX Researcher",
    company: "LinkedIn",
    tags: ["UX", "Research", "Interviews", "+6"],
    description:
      "Amelia is a 28 year old UX researcher who enjoys discovering user needs and translating them into better products."
  },
  {
    availability: "Available",
    rate: "$82/hr",
    profilePic: "https://i.pravatar.cc/150?img=52",
    name: "Benjamin Clark",
    role: "Design Systems Lead",
    company: "Atlassian",
    tags: ["UI", "Design Systems", "Figma", "+8"],
    description:
      "Benjamin is a 37 year old design systems expert who helps teams build consistent and scalable interfaces."
  },
  {
    availability: "Busy",
    rate: "$73/hr",
    profilePic: "https://i.pravatar.cc/150?img=29",
    name: "Harper Lewis",
    role: "Interaction Designer",
    company: "Uber",
    tags: ["UX", "Interaction", "Prototyping", "+3"],
    description:
      "Harper is a 29 year old interaction designer focused on creating smooth and engaging digital experiences."
  },
  {
    availability: "Available",
    rate: "$88/hr",
    profilePic: "https://i.pravatar.cc/150?img=40",
    name: "Alexander Young",
    role: "Senior Product Designer",
    company: "Salesforce",
    tags: ["Product", "UI", "UX", "+7"],
    description:
      "Alexander is a 39 year old product designer with extensive experience building products for growing technology companies."
  },
  {
    availability: "Available",
    rate: "$64/hr",
    profilePic: "https://i.pravatar.cc/150?img=17",
    name: "Ella Walker",
    role: "UI/UX Designer",
    company: "Twitter",
    tags: ["UI", "UX", "Photoshop", "+4"],
    description:
      "Ella is a 27 year old UI/UX designer who combines strong visual design skills with a user-first approach."
  }
];

  return (
    <>
   <div class="container">
    {designers.map((designer) => (
      <Card aval = {designer.availability} rate = {designer.rate} pfp = {designer.profilePic} name = {designer.name} role = {designer.role} company = {designer.company} tags = {designer.tags} description = {designer.description} />
    ))}

    <Card aval ="Available" rate = "$33/hr" pfp = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0fjvwU8TrO-hbK3N_eQrHDgWrha09oYS1TUaehQSKA&s=10" name = "catFish" role = "UI/UX designer" company = "Epic Coders" tags = {["UI", "UX", "photoshop", "+4"]} description = "catFish is a 32 year old UI/UX designer with an impressive portfolio behind him" />
   </div>
   

    </>
  )
}

export default App