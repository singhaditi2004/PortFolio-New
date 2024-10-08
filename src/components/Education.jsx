import { motion } from "framer-motion";

const Education = () => {
  const educationItems = [
    {
      year: "2021-2025",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Gyan Ganga College of Technology",
      score: "7.85",
    },
    {
      year: "2021-2020",
      degree: "Higher Secondary School",
      institution: "St. Norbert Girl's Higher Secondary School",
      score: "82%",
    },
    {
      year: "2020-2019",
      degree: "Seconary School",
      institution: "Gyanodaya Children Academy",
      score: "80.2%",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8 "
    >
      <style>{`
       .custom{
        background-color: #FFF5EE;
        color: black;
        border-radius: 10px;
        width:50vw;
        padding: 1rem;
       
      `}</style>
      <center>
        <h2 className="text-3xl font-bold mb-6 mt-10">Education</h2>
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="mb-4 shadow-lg custom pl-6 pt-2 "
          >
            <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
            <p className="mb-1 font-semibold">{item.institution}</p>
            <p className="mb-1">{item.year}</p>
            <p>{item.score}</p>
          </motion.div>
        ))}
      </center>
    </motion.div>
  );
};

export default Education;
