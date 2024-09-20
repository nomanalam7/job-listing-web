import Filter from "../filter/filter";
import Header from "../header/header";
import JobCard from "../jobCard/jobCard";
import SearchBar from "../searchBar/searchBar";


const jobs = [
  {
    title: 'Senior UX Designer',
    company: 'Dribbble',
    companyLogo: '/path-to-logo.png',
    description: 'UX designers measure and optimise applications...',
    tags: ['Remote', 'Full Time', 'UX'],
    salary: '$3k - $5k',
  },
  {
    title: 'Product UX Designer',
    company: 'Twitter',
    companyLogo: '/path-to-logo.png',
    description: 'We are looking for a UX Designer to design software...',
    tags: ['Remote', 'Figma', 'UX'],
    salary: '$3.5k',
  },
];

export default function JobListPage() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center p-6 align-middle items-center">
        <SearchBar />
      </div>

      <div className="container mx-auto mt-8 flex space-x-8">
        <div className="w-1/4">
          <Filter />
        </div>
        <div className="w-3/4 space-y-4">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
