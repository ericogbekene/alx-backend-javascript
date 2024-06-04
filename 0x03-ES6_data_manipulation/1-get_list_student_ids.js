export default function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents) !== true) {
    return [];
  }

  return getListStudents.map((data) => data.id);
}
