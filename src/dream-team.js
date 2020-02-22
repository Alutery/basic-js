module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;

  let result = [];
  members.forEach(member => {
    if(typeof member === 'string') {
      result.push(member.trim()[0].toUpperCase());
    }
  });

  return result.sort().join('');
};