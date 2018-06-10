function match(candidate, job) {
    if (candidate.minSalary === undefined || job.maxSalary === undefined) throw "Parameter is undefined";
    return (candidate.minSalary < job.maxSalary + candidate.minSalary * 0.1);
}