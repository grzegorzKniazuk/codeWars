const removeDuplicateWords = s => {
    return Array.from(new Set(s.split(' '))).join(' ');
};