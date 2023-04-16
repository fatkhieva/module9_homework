
const parser = new DOMParser();
const xml = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;



const xmlDOM = parser.parseFromString(xml, "text/xml");
const students = Array.from(xmlDOM.getElementsByTagName("student")).map((s) => {
    const nameElem = s.getElementsByTagName("name")[0];
    const name = `${nameElem.getElementsByTagName("first")[0].textContent} ${nameElem.getElementsByTagName("second")[0].textContent}`;
    const age = Number(s.getElementsByTagName("age")[0].textContent);
    const prof = s.getElementsByTagName("prof")[0].textContent;
    const lang = nameElem.getAttribute("lang");
    return { name, age, prof, lang };
  });
  const obj = { list: students };
  console.log(obj);