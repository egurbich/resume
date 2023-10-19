// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    page: {
      title: 'My education',
    },
    header: {
      address: 'Some test address',
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    header: {
      address: 'Some test address',
    },
    footer: {
      social: 'social',
      firstname: 'firstname',
      lastname: 'lastname',
      address: 'address',
    },
    salary: '600$ в місяц',
    experience: {
      section1: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
          work on a new project I learn the domain and try to understand the idea of the project. Good team
          player, every colleague is a friend to me.`,
      },
      section2: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
  })
})

// ================================================================

router.get('/education', function (req, res) {
  res.render('education', {
    title: 'Eductaion title',
    certTitle: 'My certificates',
    footer: {
      social: 'social',
      firstname: 'firstname',
      lastname: 'lastname',
      address: 'address',
    },

    header: {
      address: 'Some test address',
    },

    main: {
      educations: [
        {
          name: 'КПІ',
          isEnd: true,
        },
        {
          name: 'Університет імені Т.Г. Шевчека',
          isEnd: false,
        },
        {
          name: 'Києво-Могилянська Академія',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Some cert 1',
          id: 111,
        },
        {
          name: 'Some cert 2',
          id: 222,
        },
        {
          name: 'Some cert 3',
          id: 333,
        },
      ],
    },
  })
})
// ================================================================

router.get('/skills', function (req, res) {
  res.render('skills', {
    title: 'My skills',
    hobbiesTitle: 'My hobbies',
    footer: {
      social: 'social',
      firstname: 'firstname',
      lastname: 'lastname',
      address: 'address',
    },

    main: {
      skills: [
        {
          name: 'Java',
          isMain: true,
        },
        {
          name: 'Mysql',
          isMain: false,
        },
        {
          name: 'JavaScript',
          isMain: false,
        },
      ],
      hobbies: [
        {
          name: 'Some test hobby 1',
          isMain: true,
        },
        {
          name: 'Some test hobby 2',
          isMain: false,
        },
        {
          name: 'Some test hobby 3',
          isMain: false,
        },
      ],
    },
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    page: {
      title: 'Resume | Work',
    },
    footer: {
      social: 'social',
      firstname: 'firstname',
      lastname: 'lastname',
      address: 'address',
    },
    layout: 'big',
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https:/test.ua',
          },
          duration: {
            from: '10.10.2020',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'react',
              url: 'https://some.url',
              about: 'Some text about the proj 1',
              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                  name: 'stack 1',
                },
                {
                  name: 'stack 2',
                },
                {
                  name: 'stack 3',
                },
              ],
              awards: [
                {
                  name: 'Some award 1',
                },
                {
                  name: 'Some award 2',
                },
              ],
            },
            {
              name: 'HTML',
              url: 'https://some.url',
              about: 'Some text about the proj 2',
              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                  name: 'stack 1',
                },
                {
                  name: 'stack 2',
                },
                {
                  name: 'stack 3',
                },
              ],
              awards: [
                {
                  name: 'Some award 1',
                },
                {
                  name: 'Some award 2',
                },
              ],
            },
            {
              name: 'Node.js',
              url: 'https://some.url',
              about: 'Some text about the proj 3',
              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                  name: 'stack 1',
                },
                {
                  name: 'stack 2',
                },
                {
                  name: 'stack 3',
                },
              ],
              awards: [
                {
                  name: 'Some award 1',
                },
                {
                  name: 'Some award 2',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

router.get('/person', function (req, res) {
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

module.exports = router
