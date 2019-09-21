export const newWorkersArray = (name, workers) => {
    return workers.filter(worker => worker.name !== name)
};

export const newLikedWorkersArray = (name, workers, likedWorkers) => {
    const worker = workers.find(worker => worker.name === name);
    return [...likedWorkers, worker]
};

export const newDislikedWorkersArray = (name, workers, dislikedWorkers) => {
    const worker = workers.find(worker => worker.name === name);
    return [...dislikedWorkers, worker]
};
