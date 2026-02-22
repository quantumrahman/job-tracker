// dummy jobs data ------------------------------------->
const jobsData = [
    {
        id: 1,
        company: "Mobile First Corp",
        position: "React Native Developer",
        employmentType: "Full-time",
        workMode: "Remote",
        salaryRange: { min: "130,000", max: "175,000"},
        status: "NOT APPLIED",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 2,
        company: "TechNova Inc",
        position: "Frontend Developer",
        employmentType: "Full-time",
        workMode: "Onsite",
        salaryRange: { min: "90,000", max: "120,000"},
        status: "NOT APPLIED",
        description: "Develop responsive web applications using React and TypeScript."
    },
    {
        id: 3,
        company: "CodeBridge Solutions",
        position: "Backend Developer",
        employmentType: "Contract",
        workMode: "Remote",
        salaryRange: { min: "80,000", max: "110,000"},
        status: "NOT APPLIED",
        description: "Build scalable APIs using Node.js and MongoDB."
    },
    {
        id: 4,
        company: "NextGen Apps",
        position: "Full Stack Developer",
        employmentType: "Full-time",
        workMode: "Hybrid",
        salaryRange: { min: "100,000", max: "140,000"},
        status: "NOT APPLIED",
        description: "Work on both frontend and backend systems using MERN stack."
    },
    {
        id: 5,
        company: "PixelCraft Studio",
        position: "UI/UX Designer",
        employmentType: "Part-time",
        workMode: "Remote",
        salaryRange: { min: "60,000", max: "85,000"},
        status: "NOT APPLIED",
        description: "Design user-friendly mobile and web interfaces."
    },
    {
        id: 6,
        company: "CloudSync Ltd",
        position: "DevOps Engineer",
        employmentType: "Full-time",
        workMode: "Onsite",
        salaryRange: { min: "110,000", max: "150,000"},
        status: "NOT APPLIED",
        description: "Manage CI/CD pipelines and cloud infrastructure on AWS."
    },
    {
        id: 7,
        company: "DataWave Analytics",
        position: "Data Analyst",
        employmentType: "Full-time",
        workMode: "Hybrid",
        salaryRange: { min: "70,000", max: "95,000"},
        status: "NOT APPLIED",
        description: "Analyze business data and generate actionable insights."
    },
    {
        id: 8,
        company: "SecureNet Systems",
        position: "Cybersecurity Specialist",
        employmentType: "Full-time",
        workMode: "Remote",
        salaryRange: { min: "120,000", max: "160,000"},
        status: "NOT APPLIED",
        description: "Protect company systems and networks from cyber threats."
    }
];

// dom element access ---------------------------------->
const totalJobs = document.querySelectorAll('#total-jobs');
const jobContainer = document.getElementById('job-container');

// function -------------------------------------------->
function displayTotalJobs(data) {
    for(const totalJob of totalJobs) {
        totalJob.innerText = data.length;
    };
};

function displayAllJobs(data) {
    data.forEach(function(jobItem) {
        const div = document.createElement('div');

        div.classList.add("w-full", "p-6", "bg-[#FFFFFF]", "border", "border-[#F1F2F4]", "rounded-lg");
        div.innerHTML = `
            <div class="mb-5">
                <div class="w-full flex items-center justify-between mb-5">
                    <div class="w-auto space-y-1">
                        <h3 class="font-geist text-lg font-semibold text-[#002C5C]">${jobItem.company}</h3>
                        <p class="font-geist text-base font-normal text-[#64748B]">${jobItem.position}</p>
                    </div>
                    <div class="w-8 h-8 rounded-full flex items-center justify-center bg-[#FFFFFF] border border-[#F1F2F4] cursor-pointer">
                        <i class="fa-regular fa-trash-can text-[#64748B] text-sm"></i>
                    </div>
                </div>
                <div class="w-full text-[#64748B] flex items-center justify-start gap-2 my-5">
                    <p class="font-geist text-sm font-normal">${jobItem.workMode}</p>
                    <i class="fa-solid fa-circle text-[4px]"></i>
                    <p class="font-geist text-sm font-normal">${jobItem.employmentType}</p>
                    <i class="fa-solid fa-circle text-[4px]"></i>
                    <p class="font-geist text-sm font-normal">$${jobItem.salaryRange.min} - $${jobItem.salaryRange.max}</p>
                </div>
                <div class="w-full space-y-2">
                    <div class="max-w-[113px] py-2 px-3 bg-[#EEF4FF] rounded-sm">
                        <p class="font-geist text-sm font-medium text-[#002C5C] uppercase">${jobItem.status}</p>
                    </div>
                    <p class="font-geist text-sm font-normal text-[#323B49]">${jobItem.description}</p>
                </div>
            </div>
            <div class="w-full flex items-center justify-start gap-2">
                <button id="jobs-btn" class="max-w-[100px] py-2 px-3 bg-transparent border border-[#10B981] rounded-sm uppercase font-geist text-sm font-semibold text-[#10B981] cursor-pointer">interview</button>
                <button id="jobs-btn" class="max-w-[100px] py-2 px-3 bg-transparent border border-[#EF4444] rounded-sm uppercase font-geist text-sm font-semibold text-[#EF4444] cursor-pointer">rejected</button>
            </div>
        `

        jobContainer.appendChild(div);
    });
};

// function call --------------------------------------->
displayTotalJobs(jobsData);
displayAllJobs(jobsData);