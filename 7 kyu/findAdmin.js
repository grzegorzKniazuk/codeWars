function findAdmin(list, lang) {
    return list.filter(value => value.githubAdmin === 'yes' && value.language === lang);
}