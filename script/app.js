// dummy jobs data ------------------------------------->
const jobsData = [
    {
        id: 1,
        company: "Mobile First Corp",
        position: "React Native Developer",
        employmentType: "Full-time",
        workMode: "Remote",
        salaryRange: { min: 130000, max: 175000, currency: "USD" },
        status: "NOT APPLIED",
        description:
            "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 2,
        company: "TechNova Inc",
        position: "Frontend Developer",
        employmentType: "Full-time",
        workMode: "Onsite",
        salaryRange: { min: 90000, max: 120000, currency: "USD" },
        status: "INTERVIEW",
        description:
            "Develop responsive web applications using React and TypeScript."
    },
    {
        id: 3,
        company: "CodeBridge Solutions",
        position: "Backend Developer",
        employmentType: "Contract",
        workMode: "Remote",
        salaryRange: { min: 80000, max: 110000, currency: "USD" },
        status: "REJECTED",
        description:
            "Build scalable APIs using Node.js and MongoDB."
    },
    {
        id: 4,
        company: "NextGen Apps",
        position: "Full Stack Developer",
        employmentType: "Full-time",
        workMode: "Hybrid",
        salaryRange: { min: 100000, max: 140000, currency: "USD" },
        status: "NOT APPLIED",
        description:
            "Work on both frontend and backend systems using MERN stack."
    },
    {
        id: 5,
        company: "PixelCraft Studio",
        position: "UI/UX Designer",
        employmentType: "Part-time",
        workMode: "Remote",
        salaryRange: { min: 60000, max: 85000, currency: "USD" },
        status: "INTERVIEW",
        description:
            "Design user-friendly mobile and web interfaces."
    },
    {
        id: 6,
        company: "CloudSync Ltd",
        position: "DevOps Engineer",
        employmentType: "Full-time",
        workMode: "Onsite",
        salaryRange: { min: 110000, max: 150000, currency: "USD" },
        status: "NOT APPLIED",
        description:
            "Manage CI/CD pipelines and cloud infrastructure on AWS."
    },
    {
        id: 7,
        company: "DataWave Analytics",
        position: "Data Analyst",
        employmentType: "Full-time",
        workMode: "Hybrid",
        salaryRange: { min: 70000, max: 95000, currency: "USD" },
        status: "REJECTED",
        description:
            "Analyze business data and generate actionable insights."
    },
    {
        id: 8,
        company: "SecureNet Systems",
        position: "Cybersecurity Specialist",
        employmentType: "Full-time",
        workMode: "Remote",
        salaryRange: { min: 120000, max: 160000, currency: "USD" },
        status: "NOT APPLIED",
        description:
            "Protect company systems and networks from cyber threats."
    }
];

// dom element access ---------------------------------->
const totalJobs = document.querySelectorAll('#total-jobs');

// function -------------------------------------------->
function printTotalJobs(data) {
    for(const totalJob of totalJobs) {
        totalJob.innerText = data.length;
    };
};

// function call --------------------------------------->
printTotalJobs(jobsData);