### A directory of professors and their research areas

This website is a directory of professors and their research areas. It is a simple website that allows users to search for professors by their names or research areas. It makes it easier for students to find professors who are working on topics that they are interested in. Thus benefiting both students and professors.

## Add a new professor

Go to [app/researchersData.ts](https://github.com/AbhinavMir/searchprof/blob/main/app/researchersData.ts), click on the edit button and add a professor in the following format:

```javascript
    {
      name: "Dr. Emily Johnson",
      position: "Professor",
      affiliation: "Harvard University",
      homepage: "https://scholar.harvard.edu/emilyjohnson",
      researchAreas: ["Quantum Computing", "Cryptography", "Cybersecurity"]
    },
```