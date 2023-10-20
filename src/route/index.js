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

router.get('/bio', function (req, res) {
  res.render('bio', {
    layout: 'bio',
    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
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

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: 'program',
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// ================================================================

router.get('/mac', function (req, res) {
  res.render('mac', {
    layout: 'basic',
    name: 'Apple MacBook Pro',
    description: 'The ultimate notebook for power users',
    price: 1999.99,
    category: 'Computers & Tablets',
    features: {
      processor: {
        brand: 'Intel',
        model: 'Core i9',
        speed: '2.3 GHz',
        cores: 8,
        cache: '16 MB',
      },
      memory: {
        type: 'DDR4',
        size: '32 GB',
        speed: '2666 MHz',
      },
      storage: {
        type: 'SSD',
        size: '1 TB',
      },
      display: {
        size: '16 inches',
        resolution: '3072x1920',
        technology: 'Retina',
        color_space: 'P3',
        brightness: '500 nits',
        refresh_rate: '60 Hz',
      },
      graphics: {
        brand: 'AMD',
        model: 'Radeon Pro 5500M',
        memory: '4 GB GDDR6',
      },
      ports: [
        {
          type: 'Thunderbolt 3',
          count: 4,
          features: [
            'Charging',
            'DisplayPort',
            'Thunderbolt (up to 40 Gbps)',
            'USB 3.1 Gen 2 (up to 10 Gbps)',
          ],
        },
        {
          type: 'HDMI',
          count: 1,
        },
      ],
      battery: {
        type: 'Lithium Polymer',
        capacity: '100 Wh',
        life: 'Up to 11 hours',
      },
      weight: '4.3 pounds',
      dimensions: {
        height: '0.64 inch',
        width: '14.09 inches',
        depth: '9.68 inches',
      },
      operating_system: 'macOS',
      accessories: [
        {
          name: 'Apple Magic Keyboard',
          price: 99.99,
        },
        {
          name: 'Apple Magic Mouse 2',
          price: 79.99,
        },
        {
          name: 'USB-C to USB Adapter',
          price: 19.99,
        },
      ],
    },
  })
})

// ================================================================

module.exports = router
