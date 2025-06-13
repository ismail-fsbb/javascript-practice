export function fetchStudentData(id) {
  return new Promise(res => setTimeout(() => {
    res({ id, grades: [Math.random()*100|0, Math.random()*100|0, Math.random()*100|0] });
  }, 800));
}
